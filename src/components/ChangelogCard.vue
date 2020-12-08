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
  font-size: 20px !important;
}
.card {
  display: flex;
  flex-direction: column;
  transition: all 0.4s;
}

.card:hover {
  box-shadow: 0px 0px 16px 0px rgba(255, 255, 255, 0.62);
}
.card-actions {
  margin-top: auto;
}

@media only screen and (min-width: 350px) {
  .headline {
    font-size: 1.5em !important;
  }
}
</style>