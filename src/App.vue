<template>
  <v-app>
    <v-navigation-drawer permanent color="black" dark app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Modifications </v-list-item-title>
          <v-list-item-subtitle> See latest versions </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
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

    <v-app-bar dark app>
      <v-toolbar-title>Wierza Ksardasa</v-toolbar-title>
    </v-app-bar>

    <v-main class="content-container">
      <router-view />
    </v-main>

    <v-footer dark app> </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  computed: {
    items() {
      return this.$store.state.mods.map((el) => ({
        title: el.title,
        id: el.id,
      }));
    },

    isLoading() {
      return this.$store.state.isLoading;
    },
  },

  mounted() {
    this.$store.dispatch("getMods");
  },
};
</script>

<style scoped>
.content-container {
  background-color: #212121;
  color: #fafafa;
  height: 100%;
}

.recent-version {
  margin-left: 3px;
}

.card-container {
  margin-top: 16px;
}

.card:not(:first-child) {
  margin-left: 12px;
}
</style>