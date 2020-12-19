<template>
  <div class="changelog-container">
    <v-row class="card-container d-flex">
      <v-col xs="12" sm="12" md="12">
        <h2>Zmiany</h2>
      </v-col>
      <v-col
        xs="12"
        sm="6"
        md="4"
        v-for="change in selected.changes"
        v-bind:key="change.version"
      >
        <changelog-card
          :id="change.updateId"
          :description="change.updateDescription"
          :date="change.date"
          :version="change.version"
        />
      </v-col>
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
.changelog-container {
  padding-left: 12px;
}
</style>
