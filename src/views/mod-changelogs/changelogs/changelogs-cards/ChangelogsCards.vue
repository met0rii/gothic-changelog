<template>
  <div>
    <v-row>
      <template v-if="selected">
        <v-col
          cols="12"
          sm="6"
          lg="4"
          xl="2"
          class="card-container pl-4 pr-4"
          v-for="changes in changelogs"
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
    <div class="d-flex justify-end">
      <v-pagination dark v-model="page" :length="pagesLength" />
    </div>
  </div>
</template>

<script>
// components
import ChangelogCard from "../../../../components/ChangelogCard";

export default {
  components: {
    ChangelogCard,
  },
  data: () => {
    return {
      page: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    pagesLength() {
      return Math.floor(
        this.$store.state.changelogs.selected.changes.length / this.itemsPerPage
      );
    },
    selected() {
      return this.$store.state.changelogs.selected;
    },
    changelogs() {
      return this.$store.state.changelogs.selected.changes;
    },
  },
};
</script>

<style scoped>
</style>