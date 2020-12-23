import Vue from "vue";
import Vuex from "vuex";
import modules from './modules/modules'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageLoader : false
  },
  mutations: {
    'MUTATE_PAGE_LOADER': (state, show) => {
      state.pageLoader = show
    }
  },
  actions: {
    showPageLoader: ({ commit }, showPageLoader) => {
      commit('MUTATE_PAGE_LOADER', showPageLoader)
    }
  },
  getters: {
    isPageLoaderEnabled : state => !!state.pageLoader
  },
  modules,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
});
