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
            :to="'/redirect?url=' + selected.url"
            color="orange lighten-3"
            light
            class="download-btn mt-5 mb-5"
            large
          >
            <v-icon left dark> mdi-cloud-download</v-icon>
            Pobierz
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <NuxtChild/>
    </transition>
  </v-container>
</template>

<script>
export default {
  name: "ModChangelogs",
  async fetch({store, params}) {
    await store
      .dispatch("changelogs/getCollection", {
        itemId: params.mod,
        paramId: params.game,
      })
  },
  computed: {
    selected() {
      return this.$store.state.changelogs.selected;
    },

    modId() {
      return this.$route.params.id;
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(currentValue, oldValue) {
        this.selectSingleChangelog();
        if (process.client) {
          if (oldValue != null && currentValue.params.mod != oldValue.params.mod) {
            window.scrollTo({
              top: 0
            });
          }
        }
      },
    },
  },

  methods: {
    selectSingleChangelog() {
      this.$store.commit(
        "changelogs/selectChangelog",
        this.$route.params.changeLogId
      );
      this.setTitle();
    },
    setTitle() {
      if (process.client) {
        const selected = this.$store.state.changelogs.selected;
        if (selected) {
          document.title =
            "Gothic Sefaris - " + selected.title || "Gothic Sefaris";
        }
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
