import requests
from bs4 import BeautifulSoup
import json
import time
from w3lib.html import remove_tags
from pymongo import MongoClient

headers = {
    'Accept': '*/*',
    'Host': 'timeline-merger-ms.juejin.im',
    'Referer': 'https://juejin.im/welcome/frontend',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0',
}

content_headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Host': 'juejin.im',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0'
}

origin_url = 'https://timeline-merger-ms.juejin.im/v1/get_entry_by_rank?src=web&before={}&limit=20&category=5562b415e4b00c57d9b94ac8'

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
        data_list = text['d']['entrylist']
        rank_index = data_list[-1]['rankIndex']
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
        return rank_index


def parse_content(content_text):
    soup = BeautifulSoup(content_text, 'lxml')
    p_nums = [item.get_text() for item in soup.select('p')]
    return remove_tags("".join(p_nums))


if __name__ == '__main__':
    api_url = origin_url.format(5.1561705670688)
    for _ in range(100):
        print(api_url)
        text = get_response(api_url)
        if text:
            rank_index = parse(text)
            api_url = origin_url.format(rank_index)
            time.sleep(1)
