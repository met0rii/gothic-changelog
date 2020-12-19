<template>
  <div class="changelog-container">
    <v-row class="cards d-flex">
      <v-col xs="12" sm="12" md="12">
        <h2>Zmiany</h2>
      </v-col>
      <template v-if="selected">
        <div
          class="card-container"
          v-for="changes in selected.changes"
          v-bind:key="changes.version"
        >
          <changelog-card
            :id="changes.updateId"
            :description="changes.updateDescription"
            :date="changes.date"
            :version="changes.version"
          />
        </div>
      </template>
    </v-row>

    <v-row>
      <v-col xs="12" sm="12" md="12">
        <h2>Galeria</h2>
      </v-col>

      <v-col xs="12">
        <mod-gallery :data="selected" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// components
import ChangelogCard from "../../../components/ChangelogCard";
import ModGallery from "../../../components/ModGallery";

export default {
  components: { ChangelogCard, ModGallery },
  computed: {
    selected() {
      return this.$store.state.changelogs.selected;
    },
  },
};
</script>

<style scoped>
.card-container {
  margin-right: 24px;
  width: 400px;
  height: 300px;
}
.changelog-container {
  padding-left: 12px;
}
</style>
