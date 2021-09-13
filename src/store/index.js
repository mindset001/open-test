import { createStore } from 'vuex'

export default createStore({
  state: {
    user: ""
  },
  mutations: {
    authuser(state, payload) {
      state.user = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
