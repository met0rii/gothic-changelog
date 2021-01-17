<template>
  <v-treeview
    item-children="list"
    item-text="content"
    dark
    :items="data.overview.lists"
  >
  </v-treeview>
  <!-- <ul>
    <li v-for="(item, index) in data.overview.lists" :key="index">
      {{ item.name }}
      <ul v-if="item.list">
        <li v-for="(item, itemIndex) in item.list" :key="itemIndex">
          {{ item.name }}
        </li>
      </ul>
    </li>
  </ul> -->
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true },
  },
  components: {},

  mounted() {
    this.$store.dispatch("changelogs/getCollection");
    document.title = "Gothic Sefaris";
  },
};
</script>
<style scoped>
ul li {
  list-style: square;
}
ul li ul li {
  list-style: disc;
}
</style>