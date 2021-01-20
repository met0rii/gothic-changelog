// vue core
import Vue from 'vue'
import Vuex from 'vuex'

// modules
import ChangelogModule from "./changelogs/index";
import SidebarModule from "./sidebar/index";

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    changelogs: ChangelogModule,
    sidebar: SidebarModule
  }
})