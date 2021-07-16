// vue core
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from "../store/index";
import VueGtag from "vue-gtag";
import VueMoment from "vue-moment";
const moment = require('moment')
require('moment/locale/pl')

// animations
import './assets/css/vue2-animate.css';

Vue.config.productionTip = false
if(process.env.NODE_ENV !== 'development')
{
  Vue.use(VueGtag, {
    config: { id: "G-70MWY7X2NK" },
    pageTrackerTemplate(to) {
      return {
        page_title: `${to.name}${to.params.id ? " - " + to.params.id : ""}`,
        page_path: to.path
      }
    }
  }, router);
}

Vue.use(VueMoment, {moment});
new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
