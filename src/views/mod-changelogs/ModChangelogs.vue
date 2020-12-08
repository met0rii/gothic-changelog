<template>
  <v-container class="changelogs" fluid v-if="selected">
    <v-row>
      <v-col>
        <h1>{{ selected.title }}</h1>
        <span class="recent-version">{{ selected.description }}</span>
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
    $route() {
      this.$store.commit("changelogs/selectSingle", this.$route.params.id);
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
</style>