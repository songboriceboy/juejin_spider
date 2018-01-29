<template>
  <form class="my-2 my-lg-0">
    <div class="form-inline">
      <input class="form-control mr-sm-2 search" :class="isLong?'longSearch':''" v-model="query" type="text" placeholder="搜索">
      <button style="margin-right:5px;" type="button" class="btn btn-secondary btn-sm" @click="clear">x</button>
      <!-- eslint-disable-next-line -->
      <button style="margin-right:5px;" type="button" class="btn btn-secondary btn-sm" @click="expand">{{ direction? '->' : '<-' }}</button>
      <button class="btn btn-info my-2 my-sm-0" type="button" @click="search">搜索</button>
    </div>
    <div class="dropdown">
      <div class="dropdown-menu search show" :class="isLong?'longSearch':''" v-show="suggestions.length>0">
        <a class="dropdown-item" v-for="(suggestion,index) in suggestions" :href="suggestion.url" :key="index">
          {{ suggestion.title }}
          <span class="badge badge-primary badge-pill">{{ suggestion.score }}</span>
        </a>
      </div>
    </div>
  </form>
</template>

<script>
import { getSuggestions } from '../../api/getArticle'
import SuggestItem from '../../common/js/suggestItem'
import { debounce } from '../../common/js/util'
import { mapActions } from 'vuex'
export default {
  watch: {
    query(newQuery) {
      debounce(this.queryForSuggestions, 200)(newQuery)
    }
  },
  methods: {
    clear() {
      this.query = ''
      this.suggestions = []
    },
    async queryForSuggestions(newQuery) {
      const params = { keyword: newQuery }
      let options
      await getSuggestions(params).then(res => {
        options = res.my_suggest[0].options
      })
      this.suggestions = options.map(item => {
        const score = item._score
        const title = item._source.title
        const url = item._source.url
        // console.log(item._source)
        return new SuggestItem({ score, title, url })
      })
      // console.log(this.suggestions)
    },
    search() {
      const params = { keyword: this.query, hugePageIndex: 1 }
      if (this.$route.name === 'Browser') {
        this.nomalizeItems(params)
      } else {
        this.$router.push({
          name: 'Browser',
          params: params
        })
      }
      this.query = ''
      this.suggestions = []
      // console.log(this.$route)
    },
    expand() {
      this.direction = !this.direction
      setTimeout(() => {
        this.isLong = !this.isLong
      }, 20)
    },
    ...mapActions(['nomalizeItems'])
  },
  data() {
    return {
      isLong: false,
      direction: false,
      query: '',
      suggestions: []
    }
  }
}
</script>

<style scoped>
.search {
  transition: width 1s linear;
  width: 250px;
}

.longSearch {
  width: 500px;
}
</style>
