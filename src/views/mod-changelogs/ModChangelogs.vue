<template>
  <v-container class="changelogs" fluid v-if="selected">
    <v-row>
      <v-col>
        <div align="center">
          <v-img
            :src="selected.titleUrl"
            :lazy-src="selected.titleUrl"
            width="60%"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </div>
        <div v-if="selected.url && selected.url.length" align="center">
          <v-btn
            :to="{ name: 'redirect', query: { url: selected.url } }"
            color="orange lighten-3"
            light
            class="download-btn mt-5 mb-5"
            large
          >
            <v-icon left dark> mdi-cloud-download </v-icon>
            Pobierz
          </v-btn>
        </div>
        <div>
          <span class="recent-version">{{ selected.description }}</span>
        </div>
      </v-col>
    </v-row>

    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
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

    modId() {
      return this.$route.params.id;
    },
  },

  mounted() {
    this.$store
      .dispatch("changelogs/getCollection", {
        itemId: this.$route.params.id,
        paramId: this.$route.params.gameId,
      })
      .then(() => this.selectSingleChangelog());
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
  box-shadow: var(--neon-light);
}
</style>
