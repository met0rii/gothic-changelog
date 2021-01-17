<template>
  <v-row>
    <div className="list-wrapper"></div>
  </v-row>
</template>

<script>
export default {
  name: "AuthorList",
  props: {
    authors: { type: Array, required: true },
  },
  components: {},
};
</script>

<style scoped>
.list-wrapper {
  column-count: 3;
}
</style>