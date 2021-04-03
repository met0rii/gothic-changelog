// vue core
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from "../store/index";
import VueGtag from "vue-gtag";

// animations
import './assets/css/vue2-animate.css';

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: "G-70MWY7X2NK" },
  pageTrackerTemplate(to) {
    return {
      page_title: `${to.name}${to.params.id ? " - " + to.params.id : ""}`,
      page_path: to.path
    }
  }
}, router);

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
