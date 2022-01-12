
<template>
  <div class="overview pt-6 pb-6 pl-4 pr-4">
    <div class="mb-4" v-if="data.description">      
      <h4 class="header">Opis moda</h4>
      <span v-html="data.description" />
    </div>
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

