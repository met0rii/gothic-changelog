<template>
  <v-row class="pl-4 pr-4">
    <v-col class="mod-authors">
      <v-tabs v-model="tab" dark>
        <v-tabs-slider color="orange lighten-3"></v-tabs-slider>

        <v-tab v-if="data.authors.creators"> Autorzy </v-tab>
        <v-tab v-if="data.authors.contributors"> Kontrybutorzy </v-tab>
      </v-tabs>
      <v-tabs-items class="tab-items" dark v-model="tab">
        <v-tab-item class="pa-4">
          <div class="tab-item">
            <author-list :authors="data.authors.creators" />
          </div>
        </v-tab-item>
        <v-tab-item class="pa-4">
          <div class="tab-item">
            <author-list :authors="data.authors.contributors" />
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>

<script>
import AuthorList from "./AuthorList.vue";
export default {
  name: "ModAuthors",
  props: {
    data: { type: Object, required: true },
  },
  data: () => {
    return {
      tab: "Autorzy",
    };
  },
  components: { AuthorList },
};
</script>
<style>
.mod-authors {
  padding: 0;
}

.mod-authors .tab-items {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.mod-authors .v-tabs .v-tabs-bar {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
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