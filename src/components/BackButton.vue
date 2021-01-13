<template>
  <v-btn
    color="deep-purple lighten-3"
    light
    small
    @click="$router.go(-1)"
    class="back-button"
  >
    <v-icon left dark> mdi-arrow-left </v-icon>
    {{ text }}
  </v-btn>
</template>


<script>
export default {
  props: {
    text: String,
  },
};
</script>
<style scoped>
.back-button:hover {
  box-shadow: var(--neon-light);
}
</style>