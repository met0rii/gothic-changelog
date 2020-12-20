<template>
  <v-card dark class="card fill-height" color="grey darken-3">
    <v-card-title class="headline">
      <router-link class="headline-link" :to="redirectData">
        Changelog {{ version }}
      </router-link>
    </v-card-title>
    <v-card-subtitle v-html="description" class="subheadline">
    </v-card-subtitle>

    <v-card-actions class="card-actions">
      <v-btn :to="redirectData">Przeczytaj więcej</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ChangelogCard",
  props: {
    id: String,
    description: String,
    date: String,
    version: String,
  },
  data: () => ({}),
  computed: {
    redirectData() {
      return {
        name: "ChangelogPreview",
        params: {
          id: this.$route.params.id,
          changelogId: this.$props.id,
        },
      };
    },
  },
};
</script>

<style scoped>
.headline {
  margin-bottom: 10px;
  font-size: 20px !important;
}

.headline-link {
  color: white;
  text-decoration: none;
}
.subheadline {
  max-height: 180px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  text-overflow: ellipsis;
}

.headline-link:hover {
  text-decoration: underline;
}

.card {
  display: flex;
  flex-direction: column;
  transition: all 0.4s;
  width: 100%;
  height: 100%;
}

.card:hover {
  box-shadow: 0px 0px 16px 0px rgba(255, 255, 255, 0.62);
}
.card-actions {
  margin-top: auto;
}

@media only screen and (min-width: 350px) {
  .headline {
    font-size: 1.5em !important;
  }
}
</style>
