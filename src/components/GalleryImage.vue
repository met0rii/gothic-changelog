<template>
  <v-col class="d-flex child-flex gallery-image-container" cols="2">
    <v-img
      v-on:click="changeFullscreen"
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
    <template v-if="fullscreen">
      <div class="mask" v-on:click="changeFullscreen"></div>
      <div class="fullscreen-image-container">
        <v-img
          :src="url"
          :lazy-src="url"
          aspect-ratio="1"
          class="grey lighten-2 fullscreen-image"
        />
        <div class="cross" v-on:click="changeFullscreen">
          <div class="cross-first"></div>
          <div class="cross-second"></div>
        </div>
      </div>
    </template>
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
  data() {
    return {
      fullscreen: false,
    };
  },

  methods: {
    changeFullscreen() {
      this.fullscreen = !this.fullscreen;
      if (this.fullscreen) {
        document.documentElement.classList.add("image-opened");
      } else {
        document.documentElement.classList.remove("image-opened");
      }
    },
  },
  beforeDestroy() {
    document.documentElement.classList.remove("image-opened");
  },
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
}

.cross-first,
.cross-second {
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  width: 30px;
  height: 5px;
  border-radius: 6px;
}
.cross-first {
  transform: rotate(45deg);
}
.cross-second {
  transform: rotate(-45deg);
}

.image-opened {
  overflow: hidden;
}
</style>