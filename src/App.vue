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
        <v-list-group v-for="item in items" :key="item.title" no-action>
          <template v-slot:activator>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item
            :to="`/mod/${item.id}/${page.url}`"
            v-for="page in subNavigation"
            :key="page.title"
          >
            <v-list-item-content>
              <v-list-item-title>{{ page.title }}</v-list-item-title>
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
      subNavigation: [
        {
          title: "Changelog",
          url: "changelog",
        },
        {
          title: "Przegląd",
          url: "overview",
        },
        {
          title: "Galeria",
          url: "gallery",
        },
        {
          title: "Autorzy",
          url: "authors",
        },
      ],
    };
  },

  computed: {
    items() {
      return this.$store.state.changelogs.mods.map((el) => ({
        title: el.title,
        id: el.id,
      }));
    },
    routePath() {
      return this.$route.path.split("/").slice(0, 3).join("/");
    },
  },
  mounted() {
    this.$store.dispatch("changelogs/getCollection");
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

/*CSS VARIABLES*/
:root {
  /*BOX SHADOW*/
  --neon-light: 0px 0px 16px 0px rgba(255, 255, 255, 0.62);

  /*COLOURS*/
  --black-primary: #313030;
  --white-primary: #ffff;
  --white-secondary: rgba(255, 255, 255, 0.7);
  --black-mask: #000;
  --orange-secondary: #ffb74d;

  /*TYPOGRAPHY*/
  --h1: 32px;
  --h2: 26px;
}
</style>
