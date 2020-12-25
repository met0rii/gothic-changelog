// vue core
import Vue from "vue";
import VueRouter from "vue-router";

// views
import Home from "../views/home/Home.vue";
import ModChangelogs from "../views/mod-changelogs/ModChangelogs.vue";
import Changelogs from "../views/mod-changelogs/changelogs/Changelogs.vue";
import ChangelogsCards from "../views/mod-changelogs/changelogs/changelogs-cards/ChangelogsCards.vue";
import ChangelogOverview from "../views/mod-changelogs/changelogs-overview/ChangelogOverview.vue";
import ModAuthors from "../views/mod-authors/ModAuthors.vue";
import ModOverview from "../views/mod-overview/ModOverview.vue";

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
    component: ModChangelogs,
    children: [
      {
        path: "changelog",
        name: "Changelogs",
        component: Changelogs,

        children:[
          {
            path: "/",
            name:"ChangelogsCards",
            component: ChangelogsCards,
            
          },
          {

            path: ":changelogId",
            name: "ChangelogPreview",
            component: ChangelogOverview,
          }
        ]
      },      
      {
        path: "authors",
        name: "ModAuthors",
        component: ModAuthors,
      },
      {
        path: "overview",
        name: "ModOverview",
        component: ModOverview,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});
export default router;
