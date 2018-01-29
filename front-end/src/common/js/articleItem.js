export default class Article {
  constructor({
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
  }) {
    this.content = content
    this.miniContent = miniContent
    this.createDate = createDate
    this.frontImageUrl = frontImageUrl
    this.tags = tags
    this.title = title
    this.url = url
    this.fromUrl = fromUrl
    this.collectionCount = collectionCount
    this.commentsCount = commentsCount
    this.viewsCount = viewsCount
  }
}
