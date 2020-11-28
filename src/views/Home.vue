<template>
  <div>{{ count }}</div>
</template>

<script>
export default {
  name: "Home",

  components: {},

  data: () => ({}),

  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style>
</style>