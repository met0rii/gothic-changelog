// vue core
import Vue from 'vue'
import Vuex from 'vuex'

// modules
import ChangelogModule from "./changelogs/index";
import SidebarModule from "./sidebar/index";
import newsModule from "./news/index";

Vue.use(Vuex)


export default () => new Vuex.Store({
  modules: {
    changelogs: ChangelogModule,
    sidebar: SidebarModule,
    news: newsModule
  },
  actions: {
    async nuxtServerInit(store, context) {
      await store.commit('setBaseUrl', context.req.headers.referer);
    }
  },
  mutations: {
    setBaseUrl(state, value) {
      state.baseUrl = value;
    }
  },
  state: {
    baseUrl: ''
  }
})
