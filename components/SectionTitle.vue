<template>
  <v-col class="section-title" cols="12">
    <div class="title-container">
      <h2 class="ml-6 pb-1">{{ title }}</h2>
      <div class="section-border"></div>
    </div>
  </v-col>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.section-title {
  margin: 32px 0 30px 0;
  padding: 0px;
}

.title-container {
  width: max-content;
}

.section-border {
  height: 15px;
  width: calc(100% + 16px);
  background-color: var(--orange-secondary);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>