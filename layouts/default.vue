<template>
  <v-app>
    <SiteLoader/>
    <v-navigation-drawer
      v-model="drawerVisible"
      disable-resize-watcher
      clipped
      color="#212121"
      dark
      app
    >
      <v-list-item class="introduction">
        <v-list-item-content>
          <h3>Modyfikacje</h3>
          <v-list-item-subtitle>Najnowsze wersje</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <sidebar-list :sidebarItems="sidebarItems"></sidebar-list>
    </v-navigation-drawer>

    <v-app-bar class="navbar" clipped-left color="#212121" dark app>
      <v-app-bar-nav-icon
        v-on:click="drawerVisible = !drawerVisible"
        :aria-label="drawerVisible ? 'Zwiń menu' : 'Rozwiń menu'"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Sefaris</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="content-container">
      <Nuxt v-if="server" :key="routePath"/>
      <transition
        v-else
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <Nuxt :key="routePath"/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import SidebarList from "~/components/SidebarList";
import SiteLoader from "~/components/SiteLoader";

export default {
  name: "App",
  components: {SidebarList, SiteLoader},
  data: () => {
    return {
      drawerVisible: true,
      server: process.server
    };
  },

  computed: {
    sidebarItems() {
      return this.$store.state.sidebar;
    },
    routePath() {
      return this.$route.path.split("/").slice(0, 4).join("/");
    },
  }
};
</script>

<style>
/*EXTERNAL CSS*/
@import "~/assets/css/vue2-animate.css";
@import "../node_modules/typeface-roboto/index.css";
@import "../node_modules/material-design-icons/iconfont/material-icons.css";

/*CSS VARIABLES*/
:root {
  /*BOX SHADOW*/
  --neon-light: 0px 0px 16px 0px rgba(255, 255, 255, 0.62);
  --neon-light-subtle: 0px 0px 8px 0px rgba(255, 255, 255, 0.62);

  /*COLOURS*/
  --black-primary: #313030;
  --black-background: #141414;

  --white-primary: #fafafa;
  --white-secondary: rgba(255, 255, 255, 0.7);

  --divider-color: #686868;
  --black-mask: #000;

  --orange-secondary: #ffb74d;
  --orange-secondary-dark: #a86b0e;
  --orange-secondary-light: #ffcc80;

  --black-secondary: #212121;

  /*TYPOGRAPHY*/
  --h1: 40px;
  --h2: 36px;
  --h3: 26px;
  --h4: 22px;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-button {
  display: none;
}

::-webkit-scrollbar-track {
  background: #666;
}

::-webkit-scrollbar-track-piece {
  background: #666;
}

::-webkit-scrollbar-thumb {
  width: 5px;
  background: #333;
  border-radius: 3px;
}

h1 {
  font-size: var(--h1);
}

h2 {
  font-size: var(--h2);
}

h3 {
  font-size: var(--h3);
}

h4 {
  font-size: var(--h4);
}

body {
  background-color: var(--black-background);
}

.content-container {
  background-color: var(--black-background);
  color: var(--white-primary);
  height: 100%;
  height: 100%;
}

.neon-btn:hover {
  box-shadow: var(--neon-light);
}

.v-divider {
  border-color: var(--divider-color) !important;
}

.introduction {
  margin-top: 10px;
}

/*VUETIFY OVERRIDES*/
.theme--dark.v-pagination .v-pagination__item--active {
  color: var(--black-primary) !important;
  background-color: var(--orange-secondary) !important;
  border-color: var(--orange-secondary) !important;
}

.theme--dark.v-tabs > .v-tabs-bar {
  background-color: var(--black-secondary) !important;
}

.overview {
  background-color: var(--black-primary);
  border-radius: 4px;
  color: var(--white-primary);
}

.header {
  color: var(--orange-secondary);
}
</style>
