<template>
  <v-container fluid>
    <v-row>
      <v-col xs="12">
        <p class="text-center headline">Modyfikacja {{ data.title }} dodaje</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ModOverview",
  props: {
    data: { type: Object, required: true },
  },
  components: {},
  data: () => {
    return {
      drawerVisible: true,
    };
  },

  mounted() {
    this.$store.dispatch("changelogs/getCollection");
    document.title = "Gothic Sefaris";
  },

  watch: {
    $route: {
      immediate: true,
      handler() {
        if (!this.$route.params.id) {
          document.title = "Gothic Sefaris";
        }
      },
    },
  },
};
</script>
