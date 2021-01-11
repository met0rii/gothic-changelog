<template>
  <v-col class="section-title" cols="12">
    <div class="title-container">
      <h2 class="title ml-6 pb-3">{{ title }}</h2>
      <div class="section-border"></div>
    </div>
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
  margin: 32px 0 30px 0;
  padding: 0px;
}
.title {
  font-size: 32px !important;
}

.title-container {
  width: max-content;
}

.section-border {
  height: 15px;
  width: calc(100% + 12px);
  background-color: orange;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>