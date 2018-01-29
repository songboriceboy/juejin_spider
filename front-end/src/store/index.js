import Vue from 'vue'
import vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import state from './state'
import mutations from './mutations'

Vue.use(vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug
})
