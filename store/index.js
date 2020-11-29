import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mods: [],
    selected: null,
    error: false,
    isLoading: false,
  },
  mutations: {
    setMods(state, payload) {
      state.mods = payload;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setError(state, error) {
      state.error = error
    },
    selectSingle(state, id) {
      state.selected = state.mods.find((el) => el.id === id);
    }
  },
  actions: {
    getMods(context, id = null) {
      context.commit("setLoading", true);
      axios.get("/mock.json").then((res) => {
        context.commit("setLoading", false);
        context.commit("setMods", res.data);
        if (id) {
          context.commit("selectSingle", id);
        }
      }).catch((e) => {
        context.commit("setLoading", false);
        context.commit("setError", e.message);
      })
    }
  }
})