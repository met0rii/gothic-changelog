<template>
  <v-row>
    <template v-for="(image, index) in data.gallery">
      <gallery-image
        :url="image"
        :asset-url="image"
        :key="index"
        :index="index"
        :images-count="data.gallery.length"
        @click="onImageClick"
      />
    </template>

    <template v-if="fullscreen">
      <div class="mask" v-on:click="changeFullscreen(false)"></div>
      <div class="fullscreen-image-container">
        <transition
          :enter-active-class="enterClassName"
          :leave-active-class="leaveClassName"
          mode="out-in"
        >
          <div :key="selectedImage" class="image-container">
            <v-img
              :src="selectedImage"
              :lazy-src="selectedImage"
              aspect-ratio="1"
              class="fullscreen-image"
            />
            <v-btn
              small
              fab
              color="orange lighten-3"
              class="cross"
              @click="changeFullscreen(false)"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <div class="image-buttons">
              <v-container fill-height fluid>
                <v-row align="center" justify="center">
                  <v-col align="left">
                    <v-btn
                      fab
                      small
                      color="orange lighten-3"
                      :disabled="!canPrevImage"
                      @click="selectPrevImage"
                      ><v-icon>mdi-arrow-left-bold</v-icon></v-btn
                    >
                  </v-col>

                  <v-col align="right">
                    <v-btn
                      fab
                      small
                      color="orange lighten-3"
                      :disabled="!canNextImage"
                      @click="selectNextImage"
                      ><v-icon>mdi-arrow-right-bold</v-icon></v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </transition>
      </div>
    </template>
  </v-row>
</template>

<script>
import GalleryImage from "./GalleryImage.vue";

export default {
  name: "ModGallery",
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
      direction: "",
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
            this.direction = "left";
            break;
          }

          case 39: {
            // ARROW RIGHT
            this.selectNextImage();
            this.direction = "right";
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
      this.direction = "left";
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
      this.direction = "right";
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
    enterClassName() {
      return this.direction === "left" ? "slideInLeft" : "slideInRight";
    },
    leaveClassName() {
      return this.direction === "left" ? "slideOutRight" : "slideOutLeft";
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
  z-index: 200;
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

.fullscreen-image {
  height: 100%;
  border-radius: 12px;
  box-shadow: var(--neon-light);
}

.cross {
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
  width: 15px;
  height: 15px;
  z-index: 1000;
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
