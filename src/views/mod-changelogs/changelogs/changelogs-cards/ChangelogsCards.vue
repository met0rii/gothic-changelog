<template>
  <v-row class="cards d-flex">
    <template v-if="selected">
      <v-col
        xs="12"
        sm="6"
        lg="4"
        xl="2"
        class="card-container pl-4 pr-4"
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
    </template>
  </v-row>
</template>

<script>
// components
import ChangelogCard from "../../../../components/ChangelogCard";

export default {
  components: {
    ChangelogCard,
  },
  computed: {
    selected() {
      return this.$store.state.changelogs.selected;
    },
  },
};
</script>

<style scoped>
</style>