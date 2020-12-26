<template>
  <v-col class="section-title" cols="12">
    <h2>{{ title }}</h2>
  </v-col>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
.section-title {
  margin: 24px 0 10px 0;
  text-align: center;
  background: rgb(20, 20, 20);
  background: linear-gradient(
    90deg,
    rgba(20, 20, 20, 1) 0%,
    rgba(40, 40, 40, 1) 50%,
    rgba(20, 20, 20, 1) 100%
  );
}
</style>