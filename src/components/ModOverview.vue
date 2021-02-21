
<template>
  <div class="overview pt-6 pb-6 pl-4 pr-4">
    <recursive-list :data="data.overview.lists" />
  </div>
</template>

<script>
import RecursiveList from "./RecursiveList.vue";

export default {
  name: "ModeOverview",
  props: {
    data: { type: Object, required: true },
  },
  components: { RecursiveList },
};
</script>
<style scoped>
.overview {
  background-color: var(--black-primary);
  border-radius: 4px;
  color: var(--white-primary);
}
</style>