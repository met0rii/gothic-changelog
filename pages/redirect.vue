<template>
<div>Trwa przekierowywanie....</div>
</template>

<script>
export default {
  name: "redirect.vue",
  mounted() {
    window.location = this.$route.query.url;
  }
}
</script>

<style scoped>

</style>
