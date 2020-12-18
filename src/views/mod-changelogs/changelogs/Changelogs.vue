<template>
  <v-container>
    <v-row class="card-container d-flex">
      <v-col
        xs="12"
        sm="12"
        md="12"
        v-for="changes in selected.changes"
        v-bind:key="changes.version"
        class="text-center"
      >
        <v-btn
          :to="{ name: 'redirect', query: { url: selected.url } }"
          color="secondary"
          x-large
          >Pobierz</v-btn
        >
      </v-col>

      <v-col
        xs="12"
        sm="12"
        md="12"
        v-for="changes in selected.changes"
        v-bind:key="changes.version"
      >
        <h2 class="mt-3">Zmiany</h2>
      </v-col>

      <v-col
        xs="12"
        sm="6"
        md="4"
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

    <v-row class="card-container d-flex">
      <v-col
        xs="12"
        sm="12"
        md="12"
        v-for="changes in selected.changes"
        v-bind:key="changes.version"
      >
        <h2 class="mt-3">Galeria</h2>
      </v-col>

      <v-col
        xs="12"
        v-for="changes in selected.changes"
        v-bind:key="changes.version"
      >
        <mod-gallery :data="selected" />
      </v-col>
    </v-row>
  </v-container>
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
  margin: 16px 12px 12px 12px;
}
</style>
