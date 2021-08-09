<template>
    <p class="item-header" :style="{fontSize}"><router-link :to="redirect">{{title}}</router-link></p>
</template>

<script>
export default {
  props: {
    redirect: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    fontSize: {
      type: [String, Number],
      required: false,
    }
  },
  name: "ItemHeader",
}
</script>

<style scoped>
.item-header {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 0;
}

.item-header a {
  color: var(--orange-secondary);
  transition: color 0.3s ease;
  text-decoration: none;
}

.item-header a:hover {
  text-decoration: underline;
  color: var(--orange-secondary-dark);
}
</style>