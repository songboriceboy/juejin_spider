import { getItems } from '../api/getArticle'
import Article from '../common/js/articleItem'
import * as types from './mutation-type'
export const nomalizeItems = async function({ commit }, { keyword, page }) {
  // 从服务器得到数据
  let items, total
  await getItems({ keyword, page }).then(data => {
    // console.log(data)
    total = data.total
    items = data.hits.map(hit => {
      return _normalizeItem(hit._source)
    })
  })
  commit(types.SET_ITEMS, items)
  commit(types.SET_TOTAL, total)
}

// 标准化属服务器数据，并装入article类中
function _normalizeItem(article) {
  const content = article.content
  const miniContent = article.content.substring(0, 300) + '.......'
  const createDate = article.created_date
  const frontImageUrl =
    'https://gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg'
  const tags = article.tags.split(',').filter(item => {
    return item.length > 1
  })
  const title = article.title
  const url = article.url
  const fromUrl = 'https://juejin.im'

  const collectionCount = article.collection_count
  const commentsCount = article.comments_count
  const viewsCount = article.collection_count
  return new Article({
    content,
    miniContent,
    createDate,
    frontImageUrl,
    tags,
    title,
    url,
    fromUrl,
    collectionCount,
    commentsCount,
    viewsCount
  })
}
