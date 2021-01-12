<template>
  <ul>
    <li v-for="(item, index) in data.overview.lists" :key="index">
      {{ item.content }}
      <ul v-if="item.subList">
        <li v-for="(subItem, i) in item.subList" :key="i">
          {{ subItem.content }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true },
  },
  components: {},
  data: () => {
    return {
      drawerVisible: true,
    };
  },

  mounted() {
    this.$store.dispatch("changelogs/getCollection");
    document.title = "Gothic Sefaris";
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        if (!this.$route.params.id) {
          document.title = "Gothic Sefaris";
        }
      },
    },
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