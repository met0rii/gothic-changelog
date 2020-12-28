<template>
  <v-container class="changelogs" fluid v-if="selected">
    <v-row>
      <v-col>
        <div align="center">
          <v-img
            max-width="60%"
            :src="selected.titleUrl"
          ></v-img>
        </div>
        <div align="center">
          <v-btn
            :to="{ name: 'redirect', query: { url: selected.url } }"
            color="grey lighten-1"
            class="download-btn mt-5 mb-5"
            large
            >Pobierz<v-icon right dark> mdi-cloud-download </v-icon></v-btn
          >
        </div>
        <div>
          <span class="recent-version">{{ selected.description }}</span>
        </div>
      </v-col>
    </v-row>

    <transition enter-active-class="animated slideInRight">
      <router-view />
    </transition>
  </v-container>
</template>

<script>
export default {
  name: "ModChangelogs",
  computed: {
    selected() {
      return this.$store.state.changelogs.selected;
    },
  },

  mounted() {
    if (this.$store.state.changelogs.mods.length > 0) {
      this.$store.commit("changelogs/selectSingle", this.$route.params.id);
      this.selectSingleChangelog();
    } else {
      this.$store
        .dispatch("changelogs/getCollection", this.$route.params.id)
        .then(() => this.selectSingleChangelog());
    }
  },

  watch: {
    $route: {
      immediate: true,
      handler() {
        this.selectSingleChangelog();
      },
    },
  },

  methods: {
    selectSingleChangelog() {
      this.$store.commit(
        "changelogs/selectChangelog",
        this.$route.params.changelogId
      );
      this.setTitle();
    },
    setTitle() {
      const selected = this.$store.state.changelogs.selected;
      if (selected) {
        document.title =
          "Gothic Sefaris - " + selected.title || "Gothic Sefaris";
      }
    },
  },
};
</script>

<style scoped>
.changelogs {
  height: 100%;
}

.card:not(:first-child) {
  margin-left: 12px;
}
.mod-title {
  width: max-content;
  display: inline-block;
}
.mod-header-wrapper {
  display: flex;
  align-content: center;
}

.download-btn:hover {
  box-shadow: 0px 0px 16px 0px rgba(255, 255, 255, 0.62);
}
</style>
