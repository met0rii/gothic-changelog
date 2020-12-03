<template>
  <v-container class="changelog-container" fluid>
    <v-row class="changelog-row">
      <v-col cols="12">
        <h2>Changelog {{ changelog.date }}</h2>
        <span>{{ changelog.updateDescription }}</span>
      </v-col>
      <v-col cols="12">
        <ul>
          <li
            v-for="(item, index) in changelog.list"
            :key="index"
            v-html="item"
          ></li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    changelog() {
      return this.$store.state.changelogs.selectedChangelog;
    },
  },
};
</script>

<style scoped>
.changelog-container {
  height: 100%;
}
.changelog-row {
  margin: 16px 12px 12px 12px;
  padding: 6px;
  background-color: #424242;
  border-radius: 4px;
}
</style>