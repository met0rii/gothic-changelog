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
        <v-list-item
          :to="`/mod/${item.id}`"
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
      <transition enter-active-class="animated slideInRight">
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
    items() {
      return this.$store.state.changelogs.mods.map((el) => ({
        title: el.title,
        id: el.id,
      }));
    },
    routePath() {
      return this.$route.path
        .split("/")
        .slice(0, 3)
        .join("/");
    },
  },
  mounted() {
    this.$store.dispatch("changelogs/getCollection");
  },
};
</script>

<style scoped>
.content-container {
  background-color: #141414;
  color: #fafafa;
  height: 100%;
  height: 100%;
}

.card-container {
  margin-top: 16px;
}

.card:not(:first-child) {
  margin-left: 12px;
}
</style>
