<template>
  <v-row>
    <template v-for="(image, index) in data.gallery">
      <gallery-image
        :url="image"
        :asset-url="getImage(image)"
        :key="index"
        :index="index"
        :images-count="data.gallery.length"
        @click="onImageClick"
      />
    </template>

    <template v-if="fullscreen">
      <div class="mask" v-on:click="changeFullscreen(false)"></div>
      <div class="fullscreen-image-container">
        <v-img
          :src="getImage(selectedImage)"
          :lazy-src="getImage(selectedImage)"
          aspect-ratio="1"
          class="grey lighten-2 fullscreen-image"
        />
        <div class="cross" @click="changeFullscreen(false)">
          <div class="cross-first"></div>
          <div class="cross-second"></div>
        </div>
        <div class="image-buttons">
          <v-container fill-height fluid>
            <v-row align="center" justify="center">
              <v-col align="left" @click="selectPrevImage">
                <v-btn x-large icon color="white" :disabled="!canPrevImage"
                  ><v-icon>mdi-arrow-left-bold</v-icon></v-btn
                >
              </v-col>

              <v-col align="right">
                <v-btn
                  x-large
                  icon
                  color="white"
                  :disabled="!canNextImage"
                  @click="selectNextImage"
                  ><v-icon>mdi-arrow-right-bold</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
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
  data() {
    return {
      fullscreen: false,
      selectedImage: undefined,
    };
  },
  beforeMount() {
    document.addEventListener("keyup", this.onKeyUp);
  },
  methods: {
    onKeyUp(event) {
      if (this.fullscreen) {
        switch (event.keyCode) {
          case 27: {
            // ESC
            this.changeFullscreen(false);
            break;
          }
          case 37: {
            this.selectPrevImage();
            // ARROW LEFT
            break;
          }

          case 39: {
            // ARROW RIGHT
            this.selectNextImage();
            break;
          }
        }
      }
    },
    selectPrevImage() {
      if (this.currentImageIndex - 1 < 0) {
        return;
      }
      const index = this.currentImageIndex - 1;
      if (index >= this.data.gallery.length) {
        return;
      }
      this.selectedImage = this.data.gallery[index];
    },
    selectNextImage() {
      if (this.currentImageIndex < 0) {
        return;
      }
      const index = this.currentImageIndex + 1;
      if (index >= this.data.gallery.length) {
        return;
      }
      this.selectedImage = this.data.gallery[index];
    },
    onImageClick(url) {
      this.selectedImage = url;
      this.changeFullscreen(true);
    },
    changeFullscreen(value) {
      this.fullscreen = value;
      if (this.fullscreen) {
        document.documentElement.classList.add("image-opened");
      } else {
        this.selectedImage = undefined;
        document.documentElement.classList.remove("image-opened");
      }
    },
    getImage(image) {
      return require("@/assets/" + image);
    },
  },
  computed: {
    canPrevImage() {
      return this.currentImageIndex > 0;
    },
    canNextImage() {
      return this.currentImageIndex + 1 < this.data.gallery.length;
    },
    currentImageIndex() {
      if (!this.selectedImage) {
        return -1;
      }
      return this.data.gallery.indexOf(this.selectedImage);
    },
  },
  beforeDestroy() {
    document.documentElement.classList.remove("image-opened");
    document.removeEventListener("keyup", this.onKeyUp);
  },
};
</script>

<style>
.mask,
.fullscreen-image-container {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.mask {
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.6;
  z-index: 100;
}

.image-buttons {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

.fullscreen-image-container {
  z-index: 200;
  box-shadow: 0px 0px 16px 0px rgba(255, 255, 255, 0.62);
}

.fullscreen-image {
  height: 90vh;
}
.cross {
  position: absolute;
  right: 50px;
  top: 30px;
  cursor: pointer;
  width: 15px;
  height: 15px;
  z-index: 1000;
}

.cross-first,
.cross-second {
  background-color: rgba(255, 255, 255, 1);
  width: 30px;
  height: 5px;
  border-radius: 6px;
}
.cross-first {
  transform: translateY(5px) rotate(45deg);
}
.cross-second {
  transform: rotate(-45deg);
}

.image-opened {
  overflow: hidden;
}

@media (min-width: 320px) {
  .fullscreen-image-container {
    width: 95%;
  }
  .fullscreen-image {
    height: 50vh;
  }
}

@media (min-width: 1264px) {
  .fullscreen-image {
    height: 80vh;
  }
}

@media (max-width: 960px) {
  .gallery-image:hover {
    box-shadow: none !important;
  }
}
</style>
