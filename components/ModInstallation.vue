<template>
  <div class="overview pt-6 pb-6 pl-4 pr-4">
    <v-alert
      v-for="(alert, index) in data.installation.instruction.alerts"
      :color="alert.color + ' lighten-1'"
      :style="{ color: 'white' }"
      :key="index"
      ><span v-html="alert.text"
    /></v-alert>

    <recursive-list-ordered
      :class="{ 'mt-6': !!data.installation.instruction.alert }"
      :data="data.installation.instruction.lists"
    />
  </div>
</template>

<script>
import RecursiveListOrdered from "./RecursiveListOrdered.vue";

export default {
  name: "Installation",
  props: {
    data: { type: Object, required: true },
  },
  data: () => {
    return {
      tab: "Instalacja",
    };
  },
  components: { RecursiveListOrdered },
};
</script>
<style>
.mod-installation {
  padding: 0;
}

.mod-installation .tab-items {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.mod-installation .v-tabs .v-tabs-bar {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.mod-installation .mod-video {
  width: 100%;
  height: 75vh;
}

.v-tabs-bar {
  background-color: var(--black-primary) !important;
}
.theme--dark.v-tabs-items {
  background-color: var(--black-primary);
}

.tab-items {
  width: 100%;
}
</style>