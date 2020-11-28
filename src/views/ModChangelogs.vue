<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1>{{ selected.title }}</h1>
        <span class="recent-version">{{ selected.description }}</span>
      </v-col>
    </v-row>
    <v-divider dark></v-divider>
    <v-row class="card-container">
      <v-col
        cols="2"
        v-for="changes in selected.changes"
        v-bind:key="changes.version"
      >
        <changelog-card
          :id="changes.updateId"
          :description="changes.updateDescription"
          :date="changes.date"
          :version="changes.version"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChangelogCard from "../components/ChangelogCard.vue";
export default {
  name: "ModChangelogs",

  components: { ChangelogCard },

  computed: {
    mods() {
      return this.$store.state.mods;
    },
    selected() {
      return this.$store.state.selected;
    },
  },

  mounted() {
    this.$store.commit("selectSingle", this.$route.params.id);
  },
};
</script>

<style scoped>
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