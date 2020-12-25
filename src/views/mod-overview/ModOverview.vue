<template>
  <v-container fluid>
    <v-row>
      <v-col xs="12">
        <p class="text-center headline">
          Modyfikacja {{selected.title}} dodaje
        </p>
      </v-col>
    </v-row>
	<v-row>
      <v-col xs="12">
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ModOverview",

  components: {},
  data: () => {
    return {
      drawerVisible: true,
    };
  },

  computed: {
    selected(){
		return this.$store.state.changelogs.selected;
	},
	
    routePath() {
      return this.$route.path.split("/").slice(0, 3).join("/");
    },
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
