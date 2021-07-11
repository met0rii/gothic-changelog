<template>
  <keep-alive>
    <div>
      <v-row class="sticky-tabs d-none d-md-flex">
        <v-tabs dark v-model="currentTab">
          <v-tabs-slider color="orange lighten-3"></v-tabs-slider>
          <v-tab
            v-for="(entry, index) in headers"
            :key="index"
            @click="onMenuClick(entry.element)"
            >{{ entry.title }}</v-tab
          >
        </v-tabs>
      </v-row>

      <div v-if="showInstallationTab">
        <v-row v-if="showInstallationVideo">
          <section-title ref="header-1" title="Film instalacyjny" />
          <v-col cols="12" class="pl-4 pr-4">
            <mod-video :data="selected" />
          </v-col>
        </v-row>

        <v-row v-if="showInstruction">
          <section-title ref="header-2" title="Instrukcja" />

          <v-col cols="12" class="pl-4 pr-4">
            <mod-installation :data="selected" />
          </v-col>
        </v-row>
      </div>

      <div v-if="showOverviewTab">
        <v-row v-if="showChangesList">
          <section-title ref="header-3" title="Zmiany" />
          <v-col cols="12" class="pl-4 pr-4">
            <changelogs-cards />
          </v-col>
        </v-row>
        <v-row v-if="showOverviewList">
          <section-title ref="header-4" title="Opis" />
          <v-col cols="12" class="pl-4 pr-4">
            <mod-overview :data="selected" />
          </v-col>
        </v-row>
      </div>

      <div v-if="showLinks">
        <v-row>
          <v-col cols="12" class="pl-4 pr-4">
            <mod-links :data="selected" />
          </v-col>
        </v-row>
      </div>

      <div v-if="showCreators">
        <v-row>
          <section-title ref="header-5" title="Autorzy" />
          <v-col cols="12" class="pl-4 pr-4">
            <author-list :authors="selected.authors.creators" />
          </v-col>
        </v-row>
      </div>

      <div v-if="showContributors">
        <v-row>
          <section-title ref="header-6" title="Kontrybutorzy" />
          <v-col cols="12" class="pl-4 pr-4">
            <author-list :authors="selected.authors.contributors" />
          </v-col>
        </v-row>
      </div>

      <v-row v-if="showGallery">
        <section-title ref="header-7" title="Galeria" />
        <v-col cols="12" class="pl-4 pr-4">
          <mod-gallery :data="selected" />
        </v-col>
      </v-row>
    </div>
  </keep-alive>
</template>

<script>
// components
import ModGallery from "../../../components/ModGallery";
import SectionTitle from "../../../components/SectionTitle.vue";
import ModOverview from "../../../components/ModOverview.vue";
import ChangelogsCards from "./changelogs-cards/ChangelogsCards.vue";
import AuthorList from "../../../components/AuthorList.vue";
import ModVideo from "../../../components/ModVideo.vue";
import ModInstallation from "../../../components/ModInstallation.vue";
import ModLinks from "../../../components/ModLinks.vue";

export default {
  data: () => {
    return {
      tab: "section",
      headers: [],
      currentTab: 3,
    };
  },
  components: {
    ModGallery,
    SectionTitle,
    AuthorList,
    ModOverview,
    ChangelogsCards,
    ModVideo,
    ModInstallation,
    ModLinks,
  },
  mounted() {
    this.$nextTick(() => {
      this.headers = this.getHeaders();
    });
    document.addEventListener("scroll", this.onDocumentScroll);
  },
  beforeDestroy() {
    document.addEventListener("scroll", this.onDocumentScroll);
  },
  methods: {
    getHeaders() {
      const refKeys = Object.keys(this.$refs)
        .filter((x) => x.split("-")[0] === "header")
        .sort((a, b) => {
          return +a.split("-")[1] > +b.split("-")[1] ? 1 : -1;
        });

      const arr = [];
      for (const key of refKeys) {
        const item = this.$refs[key];
        if (item) {
          arr.push({ element: item, title: item.$props.title });
        }
      }
      return arr;
    },
    onMenuClick(element) {
      window.scrollTo(0, element.$el.offsetTop - 50);
    },
    onDocumentScroll() {
      this.currentTab = this.getCrossedHeaders().length - 1;
    },
    getCrossedHeaders() {
      return this.headers
        .map((x) => x.element.$el.offsetTop)
        .filter((x) => window.scrollY >= x);
    },
  },
  computed: {
    showInstallationTab() {
      return this.selected?.installation !== undefined;
    },
    showInstallationVideo() {
      return this.showInstallationTab && this.selected.installation.url;
    },
    showInstruction() {
      return (
        this.showInstallationTab &&
        this.selected.installation.instruction?.lists?.length > 0
      );
    },
    showOverviewTab() {
      return (
        this.selected?.overview !== undefined ||
        this.selected?.changes !== undefined
      );
    },
    showOverviewList() {
      return this.showOverviewTab && this.selected.overview?.lists.length > 0;
    },
    showChangesList() {
      return this.showOverviewTab && this.selected.changes.length > 0;
    },
    showLinks() {
      return this.selected?.links && this.selected?.links?.length > 0;
    },
    showCreators() {
      return (
        this.selected?.authors !== undefined &&
        this.selected.authors?.creators?.length > 0
      );
    },
    showContributors() {
      return (
        this.selected?.authors !== undefined &&
        this.selected.authors?.contributors?.length > 0
      );
    },
    showGallery() {
      return (
        this.selected?.gallery !== undefined &&
        this.selected.gallery?.length > 0
      );
    },
    selected() {
      return this.$store.state.changelogs.selected;
    },
  },
  watch: {
    selected() {
      this.$nextTick(() => {
        this.$set(this, "headers", this.getHeaders());
      });
    },
  },
};
</script>

<style scoped>
.mod-section {
  padding: 0;
}

.mod-section .tab-items {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.mod-section .v-tabs .v-tabs-bar {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.mod-section .mod-video {
  width: 100%;
  height: 75vh;
}

.v-tabs-bar {
  background-color: var(--black-primary) !important;
}
.theme--dark.v-tabs-items {
  background-color: var(--black-primary);
}

.tab-items {
  width: 100%;
}
.sticky-tabs {
  top: 64px;
  position: sticky !important;
  z-index: 3;
}
</style>
