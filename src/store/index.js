import Vue from 'vue'
import Vuex from 'vuex'

// modules
import { shop } from '@/store/modules/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: {
    SET_DRAWER (state, payload) {
      state.drawer = payload
    }
  },
  actions: {
    setDrawer ({ commit }, payload) {
      commit('SET_DRAWER', payload)
    }
  },
  modules: {
    shop: {
      ...shop,
      namespaced: true
    }
  }
})
