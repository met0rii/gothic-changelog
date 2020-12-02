<template>
  <v-row class="changelog-container">
    <v-col cols="12"> {{ changelog.updateDescription }} </v-col>
  </v-row>
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
  margin: 16px 12px 12px 12px;
}
</style>