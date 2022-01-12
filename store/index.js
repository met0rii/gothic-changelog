// vue core
import Vue from 'vue'
import Vuex from 'vuex'

// modules
import ChangelogModule from "./changelogs/index";
import newsModule from "./news/index";
import sidebarData from '../static/mod-list.json';

Vue.use(Vuex)


export default () => new Vuex.Store({
  modules: {
    changelogs: ChangelogModule,
    news: newsModule
  },
  actions: {
    nuxtServerInit({commit}) {
      commit('setSidebar', sidebarData)
    }
  },
  mutations: {
    setSidebar(state, value) {
      state.sidebar = value;
    }
  },
  state: {
    sidebar: {}
  }
})
