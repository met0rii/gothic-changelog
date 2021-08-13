<template>
    <p class="item-header" :style="{fontSize}">
      <router-link v-if="redirect" :to="redirect">{{ title }}</router-link>
      <span v-else>{{ title }}</span>
    </p>
</template>

<script>
export default {
  props: {
    redirect: {
      type: String,
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
  color: var(--orange-secondary);
}

.item-header a {
  transition: color 0.3s ease;
  color: var(--orange-secondary);
  text-decoration: none;
}

.item-header a:hover {
  text-decoration: underline;
  color: var(--orange-secondary-dark);
}
</style>