<template>
  <v-card dark class="card fill-height" color="grey darken-3" width="400">
    <v-card-title class="headline">Changelog {{ date }}</v-card-title>
    <v-card-subtitle class="subheadline">
      {{ description }}
    </v-card-subtitle>
    <v-card-actions class="card-actions">
      <v-btn v-on:click="onBtnClick" text>Read more</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ChangelogCard",
  props: {
    id: String,
    description: String,
    date: String,
    version: String,
  },
  data: () => ({}),
  methods: {
    onBtnClick() {
      const modId = this.$route.params.id;
      const changelogId = this.$props.id;

      this.$store.commit("changelogs/selectChangelog", changelogId);
      this.$router.push({ path: `${modId}/changelog/${changelogId}` });
    },
  },
};
</script>

<style scoped>
.headline {
  margin-bottom: 10px;
}
.subheadline {
  margin-left: 2px;
}
.card {
  display: flex;
  flex-direction: column;
}
.card-actions {
  margin-top: auto;
}
</style>