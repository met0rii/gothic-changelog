// vue core
import Vue from "vue";
import VueRouter from "vue-router";

// views
import Home from "../views/home/Home.vue";
import ModChangelogs from "../views/mod-changelogs/ModChangelogs.vue";
import Changelogs from "../views/mod-changelogs/changelogs/Changelogs.vue";
import ChangelogOverview from "../views/mod-changelogs/changelogs-overview/ChangelogOverview.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/redirect",
    name: "redirect",
    beforeEnter(to) {
      window.open(to.query.url, "_blank");
    },
  },
  {
    path: "/mod/:id",
    name: "ModChangelogs",
    component: ModChangelogs,
    children: [
      {
        path: "/",
        component: Changelogs,
      },
      {
        path: "changelog/:changelogId",
        name: "ChangelogPreview",
        component: ChangelogOverview,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});
export default router;
