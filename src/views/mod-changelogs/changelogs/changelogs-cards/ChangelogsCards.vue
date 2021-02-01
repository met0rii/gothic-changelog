<template>
  <v-row>
    <template v-if="selected">
      <v-col cols="12" sm="6" lg="4" xl="2" class="card-container pl-4 pr-4">
        <changelog-card
          :id="latestChangelog.updateId"
          :description="latestChangelog.updateDescription"
          :date="latestChangelog.date"
          :version="latestChangelog.version"
          :showBadge="true"
          badgeText="Latest"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
        lg="4"
        xl="2"
        class="card-container pl-4 pr-4"
        v-for="changes in slicedChanglogs"
        v-bind:key="changes.version"
      >
        <changelog-card
          :id="changes.updateId"
          :description="changes.updateDescription"
          :date="changes.date"
          :version="changes.version"
        />
      </v-col>
      <v-col cols="12">

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
    latestChangelog() {
      return this.$store.state.changelogs.selected.changes[0];
    },
    slicedChanglogs() {
      return this.$store.state.changelogs.selected.changes.slice(1);
    },
  },
};
</script>

<style scoped>
</style>