<template>
  <v-card dark class="card" color="grey darken-3" width="350">
    <v-card-title class="headline">Changelog {{ date }}</v-card-title>
    <v-card-subtitle>
      {{ description }}
    </v-card-subtitle>
    <v-card-actions>
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

<style>
</style>