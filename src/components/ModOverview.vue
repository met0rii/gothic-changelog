<template>
  <div class="overview pt-4 pb-4 pr-4 pl-2">
    <v-treeview
      item-children="list"
      item-text="content"
      dark
      :items="data.overview.lists"
    >
    </v-treeview>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true },
  },
  components: {},
};
</script>
<style scoped>
.overview {
  background-color: var(--black-primary);
  border-radius: 4px;
  color: var(--white-primary);
}
</style>