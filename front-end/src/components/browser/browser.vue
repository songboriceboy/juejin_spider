<template>
  <layout v-if="sliceItems">
    <p>总共：{{ maxHugePageIndex }}页，当前第{{ hugeIndex }}页</p>
    <div style="margin-bottom:10px;" class="container" v-for="(item,index) in sliceItems" :key="index">
      <detail-item :item="item"/>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end">
        <li class="page-item" :class="hugeIndex===1?'disabled':''" @click="hugePagePre">
          <a class="page-link">&laquo;&laquo;</a>
        </li>
        <li class="page-item" :class="pageIndex===minPageIndex?'disabled':''" @click="pagePre">
          <a class="page-link">&laquo;</a>
        </li>
        <li class="page-item" v-for="i in pageNumbers" :key="i"  :class="pageIndex===i?'active':''" @click="pageLocation(i)">
          <a class="page-link">{{ i }}</a>
        </li>

        <li class="page-item" :class="pageIndex===maxPageIndex?'disabled':''" @click="pageNext">
          <a class="page-link">&raquo;</a>
        </li>
        <li class="page-item" :class="hugeIndex===maxHugePageIndex?'disabled':''" @click="hugePageNext">
          <a class="page-link">&raquo;&raquo;</a>
        </li>
      </ul>
    </nav>
  </layout>
</template>

<script>
import Layout from '../layout/layout'
import DetailItem from '../detail-item/detail-item'
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['items', 'total'])
  },
  watch: {
    items() {
      this.pageChange()
    }
  },
  methods: {
    hugePagePre() {
      if (this.hugeIndex === 1) {
        return
      }
      this.hugeIndex -= 1
      this.pageIndex = 1
      this._getItems()
      this.pageChange()
    },
    hugePageNext() {
      if (this.hugeIndex === 10) {
        return
      }
      this.hugeIndex += 1
      this.pageIndex = 1
      this._getItems()
      this.pageChange()
    },
    pageLocation(index) {
      this.pageIndex = index
      this.pageChange()
    },
    pagePre() {
      if (this.pageIndex === 1) {
        return
      }
      this.pageIndex -= 1
      this.pageChange()
    },
    pageNext() {
      if (this.pageIndex === 5) {
        return
      }
      this.pageIndex += 1
      this.pageChange()
    },
    pageChange() {
      const length = this.items.length
      this.maxPageIndex =
        length % 2 === 0 ? length / 2 : Math.floor(length / 2) + 1
      this.pageNumbers = new Array(this.maxPageIndex)
      for (let i = 0; i < this.pageNumbers.length; i++) {
        this.pageNumbers[i] = i + 1
      }
      // console.log(this.pageNumbers)
      this.maxHugePageIndex = Math.ceil(this.total / 10)
      this.sliceItems = this.items.slice(
        (this.pageIndex - 1) * 2,
        this.pageIndex * 2
      )
    },
    _getItems() {
      const params = { keyword: this.keyword, page: this.hugeIndex }
      // todo
      this.nomalizeItems(params)
    },
    ...mapActions(['nomalizeItems'])
  },
  created() {
    this.hugeIndex = this.hugePageIndex
    // console.log(this.$route.params)
    this._getItems()
  },
  data() {
    return {
      sliceItems: [],
      pageIndex: 1,
      minPageIndex: 1,
      maxPageIndex: 5,
      hugeIndex: 1,
      pageNumbers: [],
      maxHugePageIndex: 1
    }
  },
  props: {
    keyword: {
      type: String,
      default: 'elastic'
    },
    hugePageIndex: {
      type: Number,
      default: 1
    }
  },
  components: {
    Layout,
    DetailItem
  }
}
</script>

<style scoped>

</style>
