<template>
  <v-container fluid v-if="selected">
    <v-row>
      <v-col>
        <h1>{{ selected.title }}</h1>
        <span class="recent-version">{{ selected.description }}</span>
      </v-col>
    </v-row>
    <v-divider dark></v-divider>
    <router-view />
  </v-container>
</template>

<script>
export default {
  name: "ModChangelogs",

  computed: {
    selected() {
      return this.$store.state.changelogs.selected;
    },
  },

  mounted() {
    if (this.$store.state.changelogs.mods.length > 0) {
      this.$store.commit("changelogs/selectSingle", this.$route.params.id);
    } else {
      this.$store.dispatch("changelogs/getCollection", this.$route.params.id);
    }
  },

  watch: {
    $route() {
      this.$store.commit("changelogs/selectSingle", this.$route.params.id);
    },
  },
};
</script>

<style scoped>
.recent-version {
  margin-left: 3px;
}

.card:not(:first-child) {
  margin-left: 12px;
}
</style>