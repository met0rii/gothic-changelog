<template>
  <div>
    <v-row v-if="selected.changes && selected.changes.length > 0">
      <section-title title="Zmiany" />
      <v-col cols="12" class="pl-4 pr-4">
        <changelogs-cards />
      </v-col>
    </v-row>

    <v-row>
      <section-title title="Przegląd" />
      <v-col cols="12" class="pl-4 pr-4">
        <mod-overview :data="selected" />
      </v-col>
    </v-row>

    <v-row
      v-if="
        selected.installation
      "
    >
      <section-title title="Lorem" />
      <v-col cols="12" class="pl-4 pr-4">
        <mod-installation :data="selected" />
      </v-col>
    </v-row>

    <v-row
      v-if="
        selected.authors &&
        (selected.authors.creators.length > 0 ||
          selected.authors.contributors.length > 0)
      "
    >
      <section-title title="Autorzy" />
      <v-col cols="12" class="pl-4 pr-4">
        <mod-authors :data="selected" />
      </v-col>
    </v-row>

    <v-row>
      <section-title title="Galeria" />
      <v-col cols="12" class="pl-4 pr-4">
        <mod-gallery :data="selected" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// components
import ModGallery from "../../../components/ModGallery";
import SectionTitle from "../../../components/SectionTitle.vue";
import ModAuthors from "../../../components/ModAuthors.vue";
import ModOverview from "../../../components/ModOverview.vue";
import ModInstallation from "../../../components/ModInstallation.vue";
import ChangelogsCards from "./changelogs-cards/ChangelogsCards.vue";

export default {
  components: {
    ModGallery,
    SectionTitle,
    ModAuthors,
    ModOverview,
    ChangelogsCards,
    ModInstallation,
  },
  computed: {
    selected() {
      return this.$store.state.changelogs.selected;
    },
  },
};
</script>
