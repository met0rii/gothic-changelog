<template>
  <v-app>
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
          <v-list-item-subtitle> Zobacz najnowsze wersje </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <sidebar-list :sidebarItems="sidebarItems"></sidebar-list>
    </v-navigation-drawer>

    <v-app-bar class="navbar" clipped-left color="#212121" dark app>
      <v-app-bar-nav-icon
        v-on:click="drawerVisible = !drawerVisible"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Gothic Sefaris</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="content-container">
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <router-view :key="routePath" />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import SidebarList from "./components/SidebarList.vue";
export default {
  name: "App",

  components: { SidebarList },
  data: () => {
    return {
      drawerVisible: true,
    };
  },

  computed: {
    sidebarItems() {
      return this.$store.state.sidebar.collection;
    },
    routePath() {
      return this.$route.path.split("/").slice(0, 4).join("/");
    },
  },
  mounted() {
    this.$store.dispatch("sidebar/getCollection");
    document.title = "Gothic Sefaris";
  },

  watch: {
    $route: {
      immediate: true,
      handler() {
        if (!this.$route.params.id) {
          document.title = "Gothic Sefaris";
        }
      },
    },
  },
};
</script>

<style>
/*EXTERNAL CSS*/
@import "./assets/css/vue2-animate.css";

/*CSS VARIABLES*/
:root {
  /*BOX SHADOW*/
  --neon-light: 0px 0px 16px 0px rgba(255, 255, 255, 0.62);

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

  /*TYPOGRAPHY*/
  --h1: 40px;
  --h2: 36px;
  --h3: 26px;
  --h4: 22px;
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
</style>
