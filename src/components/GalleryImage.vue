<template>
  <v-col class="d-flex child-flex gallery-image-container" cols="2">
    <v-img
      :src="url"
      :lazy-src="url"
      aspect-ratio="1"
      class="grey lighten-2 gallery-image"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-col>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  methods: {},
};
</script>

<style>
.gallery-image {
  cursor: pointer;
  transition: 0.4s all;
}

.gallery-image:hover {
  box-shadow: 0px 0px 16px 0px rgba(255, 255, 255, 0.62);
}
</style>