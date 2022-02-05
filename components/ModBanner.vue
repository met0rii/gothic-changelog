<template>
  <div :class="bannerClasses" :style="bannerStyles">
    <div>
      <h1 class="banner__title">{{ mod.title }}</h1>
    </div>

    <div>
      <v-btn @click="$emit('scroll')" class="download-btn mt-5 mb-5 mr-5" color="orange lighten-3" outlined large>
        Przejdź do opisu
      </v-btn>

      <template v-if="downloadUrls.length > 0">
        <v-btn
          v-if="downloadUrls.length === 1"
          :href="downloadUrls[0]"
          color="orange lighten-3"
          light
          class="download-btn mt-5 mb-5"
          large
        >
          <v-icon left dark> mdi-cloud-download</v-icon>
          Pobierz
        </v-btn>
        <v-menu v-else offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="orange lighten-3"
              light
              class="download-btn mt-5 mb-5"
              large
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left dark> mdi-cloud-download</v-icon>
              Pobierz
            </v-btn>
          </template>

          <v-list dark color="#313030">
            <v-list-item
              v-for="(item, index) in downloadUrls"
              :key="index"
            >
              <v-list-item-title>
                <v-btn :href="item.url.link" link text>
                  <v-icon left dark>{{item.url.icon}}</v-icon>
                  {{ item.url.text }}
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

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
    downloadUrls() {
      const modUrlData = this.mod.url;
      if (modUrlData === undefined) {
        return [];
      }

      if (typeof modUrlData === 'string' && modUrlData.length > 0) {
        return [modUrlData];
      }

      if (!(modUrlData instanceof Array)) {
        return []
      }

      const urls = [];
      for(let i = 0; i < modUrlData.length; i++) {
        const item = modUrlData[i];
          urls.push({ url: item });
      }

      return urls.filter(x => x?.url?.link?.length > 0);
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
