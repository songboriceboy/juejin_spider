import requests
from bs4 import BeautifulSoup
import json
import time
from w3lib.html import remove_tags
from pymongo import MongoClient

headers = {
    'Accept': '*/*',
    'Host': 'recommender-api-ms.juejin.im',
    'Referer': 'https://juejin.im/',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0',
}

content_headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Host': 'juejin.im',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0'
}

client = MongoClient('mongodb://localhost:27017/')
db = client['elastic']
collection = db['juejin']


def get_response(url):
    wb_data = requests.get(url=url, headers=headers)
    if wb_data.status_code == 200:
        return wb_data.text
    else:
        return None


def parse(text):
    text = json.loads(text)
    if text['m'] == 'ok':
        data_list = text['d']
        for data in data_list:
            collection_count = data['collectionCount']
            comments_count = data['commentsCount']
            views_count = data['viewsCount']
            object_id = data['objectId']
            title = data['title']
            created_date = data['createdAt']
            url = 'https://juejin.im/entry/' + object_id
            tags = [tag.get('title', '') for tag in data['tags']]
            # time.sleep(1)
            content_text = requests.get(url=url, headers=content_headers)
            content = parse_content(content_text.text)

            insert_one = {
                'collection_count': collection_count,
                'url': url,
                'comments_count': comments_count,
                'views_count': views_count,
                'object_id': object_id,
                'title': title,
                'created_date': created_date,
                'tags': tags,
                'content': content
            }
            collection.insert_one(insert_one)
            print('one done')
            time.sleep(1)


def parse_content(content_text):
    soup = BeautifulSoup(content_text, 'lxml')
    p_nums = [item.get_text() for item in soup.select('p')]
    return remove_tags("".join(p_nums))


if __name__ == '__main__':
    api_url = 'https://recommender-api-ms.juejin.im/v1/get_recommended_entry?suid=uuBrUzMZmbmaZibarEyy&ab=welcome_3&src=web'
    for _ in range(100):
        text = get_response(api_url)
        if text:
            parse(text)
        time.sleep(1)
