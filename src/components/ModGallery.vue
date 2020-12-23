<template>
  <v-row>
    <template v-for="(image, index) in data.gallery">
      <gallery-image :url="getImage(image)" :key="index" />
    </template>
  </v-row>
</template>

<script>
import GalleryImage from "./GalleryImage.vue";

export default {
  components: { GalleryImage },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImage(image) {
      return require("@/assets/" + image);
    },
  },
};
</script>
