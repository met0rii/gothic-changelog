<template>
  <div>
    <div
      :class="{ 'mb-4': multipleListItems && listIndex !== lastIndex }"
      v-for="(list, listIndex) in data"
      :key="listIndex"
    >
      <h4 v-html="list.title" />
      <node-tree-ordered :node="list.list"></node-tree-ordered>
    </div>
  </div>
</template>


<script>
import NodeTreeOrdered from "./NodeTreeOrdered.vue";
export default {
  name: "RecursiveListOrdered",
  props: {
    data: { type: Array, required: true },
  },
  components: { NodeTreeOrdered },
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