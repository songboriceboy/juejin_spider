<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">
    <img src="../../assets/plogo.jpg" width="30" height="30" alt="" class="d-inline-block aligh-top">
    Pedro
  </a>
  <button class="navbar-toggler" type="button" @click="expandToggle" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" style="">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse"  :class="showNavbar?'show':''">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" :class="beActive?'active':''">
        <router-link to="/home" class="nav-link" tag="a">主页
          <span class="sr-only">(current)</span>
        </router-link>
      </li>
      <li class="nav-item" @click="activeToggle">
        <router-link to="/browser" class="nav-link" tag="a">浏览</router-link>
      </li>
      <li class="nav-item" @click="activeToggle">
        <router-link to="/about" class="nav-link" tag="a">关于</router-link>
      </li>
    </ul>
    <search-box />
  </div>
</nav>
</template>

<script>
import SearchBox from '../search-box/search-box'
export default {
  data() {
    return {
      showNavbar: false,
      beActive: true
    }
  },
  methods: {
    expandToggle() {
      this.showNavbar = !this.showNavbar
    },
    activeToggle() {
      this.beActive = false
    }
  },
  components: {
    SearchBox
  }
}
</script>

<style scoped>
a {
  font-size: 1.5em;
}
</style>
