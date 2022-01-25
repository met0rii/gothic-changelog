<template>
  <div :class="bannerClasses" :style="bannerStyles">
    <div>
      <h1 class="banner__title">{{ mod.title }}</h1>
    </div>

    <div>
      <v-btn @click="$emit('scroll')" class="download-btn mt-5 mb-5 mr-5" color="orange lighten-3" outlined large>
        Przejdź do opisu
      </v-btn>

      <v-btn
        v-if="mod.url && mod.url.length"
        :to="'/redirect?url=' + mod.url"
        color="orange lighten-3"
        light
        class="download-btn mt-5 mb-5"
        large
      >
        <v-icon left dark> mdi-cloud-download</v-icon>
        Pobierz
      </v-btn>

      <v-tooltip v-else bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="download-btn mt-5 mb-5"
            color="grey darken-3"
            large
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left dark> mdi-cloud-download</v-icon>
            Pobierz
          </v-btn>
        </template>

        <span>Mod nie jest jeszcze dostępny!</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mod: {
      type: Object,
      required: true
    }
  },
  name: "ModBanner",
  computed: {
    bannerStyles() {
      return {
        backgroundImage: `url("${this.mod.gallery[0]}")`
      }
    },
    bannerClasses() {
      const isOnMainPage = this.$route.name === 'mod';
      return {
        banner: true,
        'banner-main': isOnMainPage,
        'banner-changelog': !isOnMainPage
      }
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  background-size: cover;
  background-position: 20% 20%;
  padding: 50px;
  -webkit-box-shadow: inset 0px -100px 39px -51px rgba(20, 20, 20, 1);
  -moz-box-shadow: inset 0px -100px 39px -51px rgba(20, 20, 20, 1);
  box-shadow: inset 0px -100px 39px -51px rgba(20, 20, 20, 1);
  text-align: center;
}

.banner .banner__title {
  text-stroke: 1px rgba(67,67,67,1);
}

@media (min-width: 960px) {
  .banner {
    height: 550px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .banner-main {
    -webkit-box-shadow: inset 0px -68px 15px -40px rgba(33, 33, 33, 1);
    -moz-box-shadow: inset 0px -68px 15px -40px rgba(33, 33, 33, 1);
    box-shadow: inset 0px -68px 15px -40px rgba(33, 33, 33, 1);
  }

  .banner .banner__title {
    font-size: 3.5rem;

  }
}


</style>
