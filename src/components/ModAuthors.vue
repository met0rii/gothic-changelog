<template>
  <v-container fluid>
    <v-row>
      <v-col xs="12" md="9" lg="6" class="mx-auto">
        <v-list dark>
          <v-list-item v-for="author in data.authors" :key="author.name">
            <v-list-item-content>
              <v-list-item-title v-text="author.name"></v-list-item-title>
              <v-list-item-subtitle v-text="author.role"></v-list-item-subtitle>
              <v-btn
                :href="contact.url"
                v-for="contact in author.contacts"
                :key="contact.platform"
                primary
              >
                {{ contact.platform }}
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ModAuthors",
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
<style scoped>
</style>