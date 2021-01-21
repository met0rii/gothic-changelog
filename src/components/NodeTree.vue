<template>
  <ul
    :style="{
      listStyleType: calculatedListStyle,
    }"
  >
    <li v-for="(el, index) in node" :key="index" class="node-tree">
      <span class="label">{{ el.content }}</span>
      <ul v-if="el.list && el.list.length">
        <node-tree
          :style="{ marginLeft: calculatedMarginLeft }"
          :level="calculatedLevel"
          :node="el.list"
          :key="index"
        ></node-tree>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NodeTree",
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
      listStyle: ["disc", "circle", "square"],
    };
  },
};
</script>