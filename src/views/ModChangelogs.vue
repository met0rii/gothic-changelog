<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1>Mroczne tajemnice</h1>
        <span class="recent-version">Latest version: 20-14-1996</span>
      </v-col>
    </v-row>
    <v-divider dark></v-divider>
    <v-row class="card-container">
      <v-col cols="2" v-for="n in 10" v-bind:key="n">
        <v-card dark class="card" color="grey darken-3" width="350">
          <v-card-title class="headline">Changelog 20.13.2031</v-card-title>
          <v-card-subtitle>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            dicta fugiat maiores aliquam alias exercitationem minus pariatur
          </v-card-subtitle>
          <v-card-actions>
            <v-btn text>Read more</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ModChangelogs",

  components: {},

  data: () => ({}),
};
</script>

<style scoped>
.recent-version {
  margin-left: 3px;
}

.card-container {
  margin-top: 16px;
}

.card:not(:first-child) {
  margin-left: 12px;
}
</style>