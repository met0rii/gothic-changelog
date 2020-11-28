<template>
  <v-card dark class="card" color="grey darken-3" width="350">
    <v-card-title class="headline">Changelog {{ date }}</v-card-title>
    <v-card-subtitle>
      {{ description }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn text :to="id">Read more</v-btn>
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
};
</script>

<style>
</style>