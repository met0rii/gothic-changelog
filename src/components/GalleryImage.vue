<template>
  <v-col class="gallery-image-container" cols="12" sm="6" md="4" lg="3" xl="2">
    <v-img
      v-on:click="imageClick"
      :src="assetUrl"
      :lazy-src="assetUrl"
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
    assetUrl: {
      type: String,
      required: true,
    },
  },
  methods: {
    imageClick() {
      this.$emit("click", this.url);
    },
  },
};
</script>

<style>
.gallery-image {
  cursor: pointer;
  transition: 0.4s all;
  padding-top: 0px;
  padding-bottom: 24px;
}

.gallery-image:hover {
  box-shadow: var(--neon-light);
}
</style>
