import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Browser from '../components/browser/browser.vue'
import About from '../components/about/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/browser',
      name: 'Browser',
      component: Browser,
      props: true
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
