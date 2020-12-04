<template>
  <v-row class="card-container d-flex">
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
</template>

<script>
// components
import ChangelogCard from "../../../components/ChangelogCard";

export default {
  components: { ChangelogCard },

  computed: {
    selected() {
      return this.$store.state.changelogs.selected;
    },
  },
};
</script>

<style scoped>
.card-container {
  margin: 16px 12px 12px 12px;
}
</style>