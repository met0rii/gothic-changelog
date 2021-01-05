<template>
  <div class="changelog-container">
    <v-row class="cards d-flex">
      <section-title title="Zmiany" />
      <template v-if="selected">
        <v-col
          xs="12"
          sm="6"
          lg="4"
          xl="2"
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
        </v-col>
      </template>
    </v-row>

    <v-row>
      <v-col xs="12">
        <section-title title="Przegląd" />
        <mod-overview :data="selected" />
      </v-col>
    </v-row>

    <v-row>
      <v-col xs="12">
        <section-title title="Galeria" />
        <mod-gallery :data="selected" />
      </v-col>
    </v-row>

    <v-row>
      <v-col xs="12">
        <section-title title="Autorzy" />
        <mod-authors :data="selected" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// components
import ChangelogCard from "../../../../components/ChangelogCard";
import ModGallery from "../../../../components/ModGallery";
import SectionTitle from "../../../../components/SectionTitle.vue";
import ModAuthors from "../../../../components/ModAuthors.vue";
import ModOverview from "../../../../components/ModOverview.vue";

export default {
  components: {
    ChangelogCard,
    ModGallery,
    SectionTitle,
    ModAuthors,
    ModOverview,
  },
  computed: {
    selected() {
      return this.$store.state.changelogs.selected;
    },
  },
};
</script>

<style scoped>
.card-container {
  height: 300px;
}
.changelog-container {
  padding-left: 12px;
}
</style>
