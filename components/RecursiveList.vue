<template>
  <div>
    <div
      :class="{ 'mb-4': multipleListItems && listIndex !== lastIndex }"
      v-for="(list, listIndex) in data"
      :key="listIndex"
    >
      <h4 class="header" v-html="list.title" />
      <node-tree :node="list.list"></node-tree>
    </div>
  </div>
</template>


<script>
import NodeTree from "./NodeTree.vue";
export default {
  name: "RecursiveList",
  props: {
    data: { type: Array, required: true },
  },
  components: { NodeTree },
  computed: {
    lastIndex() {
      return this.data.length - 1;
    },
    multipleListItems() {
      return this.data.length > 1;
    },
  },
};
</script>