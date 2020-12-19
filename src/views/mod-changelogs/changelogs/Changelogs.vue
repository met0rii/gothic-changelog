<template>
  <div class="changelog-container">
    <v-row class="card-container d-flex">
      <v-col xs="12" sm="12" md="12">
        <h2>Zmiany</h2>
      </v-col>
      <template v-if="selected">
        <v-col
          xs="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
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
