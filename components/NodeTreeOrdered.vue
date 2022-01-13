<template>
  <ul
    :style="{
      listStyleType: calculatedListStyle,
    }"
  >
    <li v-for="(el, index) in node" :key="index" class="node-tree">
      <span v-html="el.content"></span>
      <ul v-if="el.list && el.list.length">
        <node-tree-ordered
          :style="{ marginLeft: calculatedMarginLeft }"
          :level="calculatedLevel"
          :node="el.list"
          :key="index"
        ></node-tree-ordered>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NodeTreeOrdered",
  props: {
    node: { type: Array, required: true },
    level: { type: Number },
  },
  computed: {
    calculatedLevel() {
      return this.level ? this.level + 1 : 1;
    },
    calculatedMarginLeft() {
      return 12 * this.level;
    },
    calculatedListStyle() {
      return this.level ? this.listStyle[this.level] : this.listStyle[0];
    },
  },
  data: () => {
    return {
      listStyle: ["decimal", "circle", "square"],
    };
  },
};
</script>