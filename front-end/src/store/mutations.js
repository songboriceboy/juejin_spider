import * as types from './mutation-type'

const mutations = {
  [types.SET_ITEMS](state, items) {
    state.items = items
  },
  [types.SET_TOTAL](state, total) {
    state.total = total
  }
}

export default mutations
