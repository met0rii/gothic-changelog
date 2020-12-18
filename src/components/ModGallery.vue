<template>
  <v-row>
    <v-col
      v-for="(image, index) in data.gallery"
      :key="index"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="getImage(image)"
        :lazy-src="getImage(image)"
        aspect-ratio="1"
        class="grey lighten-2"
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
  </v-row>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImage(image) {
      return require("../assets/" + image);
    },
  },
};
</script>
