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

      <v-list dense nav>
        <v-list-item to="/" link>
          <v-list-item-content>
            <v-list-item-title>Home </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group v-for="(value, key) in sidebarItem" :key="key">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="value.name"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            class="sidebar-child-item"
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
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar clipped-left color="#212121" dark app>
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
  --white-primary: #ffff;
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
  background-color: #141414;
}

.content-container {
  background-color: #141414;
  color: #fafafa;
  height: 100%;
  height: 100%;
}

.neon-btn:hover {
  box-shadow: var(--neon-light);
}

.v-divider {
  border-color: var(--divider-color) !important;
}

.sidebar-child-item {
  margin-left: 24px;
}

.sidebar-child-item:last-child {
  margin-bottom: 12px;
}
</style>
