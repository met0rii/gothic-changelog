// vue core
import Vue from "vue";
import VueRouter from "vue-router";

// views
const Home = () => import("../views/home/Home.vue");
const ModChangelogs = () => import("../views/mod-changelogs/ModChangelogs.vue");

// subviews
const Changelogs = () => import("../views/mod-changelogs/changelogs/Changelogs.vue");
const ChangelogOverview = () => import("../views/mod-changelogs/changelogs/changelogs-overview/ChangelogOverview.vue");

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
    path: "/mod/:gameId/:id/",
    component: ModChangelogs,
    children: [
      {
        path: "/",
        name: "Changelogs",

        component: Changelogs,
      },
      {
        path: "changelog/:changelogId",
        name: "ChangelogPreview",
        component: ChangelogOverview,
      }
    ],
  },
];

const router = new VueRouter({
  routes,
});
export default router;
