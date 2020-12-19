<template>
  <v-container class="changelogs" fluid v-if="selected">
    <v-row>
      <v-col>
        <div class="mod-header-wrapper mb-2">
          <h1 class="mod-title">{{ selected.title }}</h1>
          <v-btn
            :to="{ name: 'redirect', query: { url: selected.url } }"
            color="gray"
            class="ml-5 download-btn"
            large
            >Pobierz</v-btn
          >
        </div>

        <div>
          <span class="recent-version">{{ selected.description }}</span>
        </div>
      </v-col>
    </v-row>

    <v-divider color="#424242" dark></v-divider>

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
