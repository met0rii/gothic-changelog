<template>
  <div>
    <div
      class="mt-6"
      :class="{ 'mb-4': multipleListItems && listIndex !== lastIndex }"
      v-for="(list, listIndex) in changelogList"
      :key="listIndex"
    >
      <h4 v-html="list.title" />
      <node-tree :node="list.list"></node-tree>
    </div>
  </div>
</template>


<script>
import NodeTree from "./NodeTree.vue";
export default {
  name: "ChangelogList",
  props: {
    changelogList: { type: Array, required: true },
  },
  components: { NodeTree },
  computed: {
    lastIndex() {
      return this.changelogList.length - 1;
    },
    multipleListItems() {
      return this.changelogList.length > 1;
    },
  },
};
</script>