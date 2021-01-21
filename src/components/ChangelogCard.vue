<template>
  <v-card dark class="card fill-height">
    <v-card-title class="headline">
      <router-link class="headline-link" :to="redirectData">
        {{ version }}
      </router-link>
    </v-card-title>
    <v-card-subtitle class="subheadline">
      <div class="line-clamp" v-html="description"></div>
    </v-card-subtitle>

    <v-card-actions class="card-actions">
      <v-spacer />
      <v-btn small :to="redirectData" color="orange lighten-3" light>
        Czytaj dalej
        <v-icon right> mdi-arrow-right </v-icon>
      </v-btn>
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
          game: this.$route.params.game,
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
  color: var(--white-primary);
  text-decoration: none;
}
.line-clamp {
  max-height: 150px;
  padding: 0px !important;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
  background-color: var(--black-primary);
}

.card:hover {
  box-shadow: var(--neon-light);
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
