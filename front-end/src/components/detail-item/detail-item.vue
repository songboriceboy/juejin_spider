<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col">
          <img :src="item.frontImageUrl" width="60" height="30" alt="">
            <span class="badge badge-info">阅读量{{ item.viewsCount }}</span>
            <span class="badge badge-info">收藏量{{ item.collectionCount }}</span>
            <span class="badge badge-info">评论量{{ item.commentsCount }}</span>
        </div>
        <div class="col">
          <span style="margin-left:5px" class="badge badge-pill badge-success" v-for="tag in item.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title"> <a :href="item.url">{{ item.title }}</a></h5>
      <p class="card-text">
        {{ isMini?item.miniContent:item.content }}
        <button class="btn btn-secondary btn-sm" @click="expandContent">{{ isMini? '更多':'收起' }}</button>
      </p>
    </div>
    <div class="card-footer text-muted">
      <div class="row">
        <div class="col">
          <label>发布时间：</label>
          <span>{{ item.createDate }}</span>
        </div>
        <div class="col">
          <label>数据来源：</label>
          <a :href="item.fromUrl">掘金</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      isMini: true
    }
  },
  methods: {
    expandContent() {
      this.isMini = !this.isMini
    }
  },
  created() {}
}
</script>

<style scoped>

</style>
