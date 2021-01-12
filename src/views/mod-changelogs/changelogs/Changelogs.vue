<template>
  <div class="changelog-container">
    <v-row>
      <section-title title="Zmiany" />
      <transition enter-active-class="animated fadeIn">
        <router-view />
      </transition>
    </v-row>

    <v-row>
      <section-title title="Przegląd" />
      <v-col xs="12" class="pl-4 pr-4">
        <mod-overview :data="selected" />
      </v-col>
    </v-row>

    <v-row>
      <section-title title="Galeria" />
      <v-col xs="12" class="pl-4 pr-4">
        <mod-gallery :data="selected" />
      </v-col>
    </v-row>

    <v-row>
      <section-title title="Autorzy" />
      <v-col xs="12" class="pl-4 pr-4">
        <mod-authors :data="selected" />
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

export default {
  components: {
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

