// vue core
import Vue from "vue";
import VueRouter from "vue-router";

// views
import Home from "../views/home/Home.vue";
import ModChangelogs from "../views/mod-changelogs/ModChangelogs.vue";

// subviews
import Changelogs from "../views/mod-changelogs/changelogs/Changelogs.vue";
import ChangelogCards from "../views/mod-changelogs/changelogs/changelogs-cards/ChangelogsCards.vue";
import ChangelogOverview from "../views/mod-changelogs/changelogs/changelogs-overview/ChangelogOverview.vue";

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
    path: "/mod/:id/",
    component: ModChangelogs,
    children: [
      {
        path: "/",
        component: Changelogs,
        children: [
          {
            path: "/",
            name: "ChangelogList",
            component: ChangelogCards,
          },
          {
            path: "changelog/:changelogId",
            name: "ChangelogPreview",
            component: ChangelogOverview,
          }
        ]
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});
export default router;
