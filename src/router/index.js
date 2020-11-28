import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ModChangelogs from "../views/ModChangelogs.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mod/:id',
    name: 'ModChangelogs',
    component: ModChangelogs
  }
]

const router = new VueRouter({
  routes
})

export default router
