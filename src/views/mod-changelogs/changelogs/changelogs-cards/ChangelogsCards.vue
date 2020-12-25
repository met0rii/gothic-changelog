<template>
  <div class="changelog-container">
    <v-row class="cards d-flex" >
      
      <v-col class="section-title" cols="12">

        <h2 >Zmiany</h2>

      </v-col>
      <template v-if="selected">
        <v-col
          xs="12"
          sm="6"
          lg="4"
          xl="2"
          class="card-container"
          v-for="changes in selected.changes"
          v-bind:key="changes.version"
        >
          <changelog-card
            :id="changes.updateId"
            :description="changes.updateDescription"
            :date="changes.date"
            :version="changes.version"
          />
        </v-col>
      </template>
    </v-row>

    <v-row>
      <v-col class="section-title" cols="12">
        <h2>Galeria</h2>
      </v-col>

      <v-col xs="12">
        <mod-gallery :data="selected" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// components
import ChangelogCard from "../../../../components/ChangelogCard";
import ModGallery from "../../../../components/ModGallery";

export default {
  components: { ChangelogCard, ModGallery },
  computed: {
    selected() {
      return this.$store.state.changelogs.selected;
    },
  },
};
</script>

<style scoped>
.section-title {
  margin-top:5px;
  text-align: center;
background: rgb(20,20,20);
background: linear-gradient(90deg, rgba(20,20,20,1) 0%, rgba(40,40,40,1) 50%, rgba(20,20,20,1) 100%);
}
.card-container {
  height: 300px;
}
.changelog-container {
  padding-left: 12px;
}
</style>
