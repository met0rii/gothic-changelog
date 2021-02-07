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
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Modyfikacje</v-list-item-title>
          <v-list-item-subtitle> Zobacz najnowsze wersje </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list class="custom-list-nav" dense nav>
        <div class="list-section">
          <div class="list-header">Główne</div>
          <v-list-item class="custom-list-item" to="/" link>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <div
          class="list-section"
          v-for="(value, key) in sidebarItem"
          :key="key"
        >
          <div class="list-header">{{ value.name }}</div>
          <v-list-item
            class="custom-list-item"
            v-for="child in value.data"
            :key="child.title"
            link
            :to="{
              name: 'Changelogs',
              params: { gameId: key, id: child.id },
            }"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="navbar" clipped-left color="#212121" dark app>
      <v-app-bar-nav-icon
        v-on:click="drawerVisible = !drawerVisible"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Gothic Sefaris</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="content-container">
      <transition enter-active-class="animated fadeIn">
        <router-view :key="routePath" />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},
  data: () => {
    return {
      drawerVisible: true,
    };
  },

  computed: {
    sidebarItem() {
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

.list-header {
  font-size: 12px;
  margin-bottom: 4px;
  padding-left: 6px;
  color: var(--white-secondary);
}

.custom-list-nav.v-list--nav {
  padding-left: 0;
  padding-right: 0;
  margin-top: 8px;
}

.list-section:not(:first-child) {
  margin-top: 20px;
}

.custom-list-item {
  padding: 0px;
  min-height: 30px !important;
}

.custom-list-item.v-list-item--active {
  color: var(--white-primary) !important;
  border-radius: 0px !important;
  border-left: 4px solid var(--orange-secondary);
}

.custom-list-item .v-list-item__content {
  min-height: 20px !important;
}

.custom-list-item.v-list-item--active::before {
  opacity: 1;
  border-radius: 0px !important;
}
</style>
