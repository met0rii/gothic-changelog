<template>
  <v-container class="changelogs" fluid v-if="selected">
    <v-row>
      <v-col>
        <div align="center">
          <v-img
            :src="selected.titleUrl"
            :lazy-src="selected.titleUrl"
            width="60%"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                  aria-hidden="true"
                />
              </v-row>
            </template>
          </v-img>
        </div>
        <div v-if="selected.url && selected.url.length" align="center">
          <v-btn
            :to="'/redirect?url=' + selected.url"
            color="orange lighten-3"
            light
            class="download-btn mt-5 mb-5"
            large
          >
            <v-icon left dark> mdi-cloud-download</v-icon>
            Pobierz
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <NuxtChild/>
    </transition>
  </v-container>
</template>

<script>
export default {
  name: "ModChangelogs",
  async fetch({store, params}) {
    await store
      .dispatch("changelogs/getCollection", {
        paramId: params.mod,
        asSingle: true
      })
  },
  computed: {
    selected() {
      return this.$store.state.changelogs.selected;
    },

    modId() {
      return this.$route.params.id;
    },
  },
  head() {
    const mod = this.$store.state.changelogs.selected;
    const image = mod?.gallery?.length > 0 ? mod.gallery[0] : mod?.titleUrl;
    const title = mod?.title || 'Brak nazwy';
    return {
      title,
      meta:  [
        {
          hid: 'description',
          name: 'description',
          content: mod?.description
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: mod?.description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: image
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: title
        }
      ],
      link: [{
        rel: 'canonical',
        href: `${process.env.appUrl}/${mod.id}`
      }]
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(currentValue, oldValue) {
        this.selectSingleChangelog();
        if (process.client) {
          if (oldValue != null && currentValue.params.mod != oldValue.params.mod) {
            window.scrollTo({
              top: 0
            });
          }
        }
      },
    },
  },

  methods: {
    selectSingleChangelog() {
      this.$store.commit(
        "changelogs/selectChangelog",
        this.$route.params.changeLogId
      );
    }
  },
};
</script>

<style scoped>
.changelogs {
  height: 100%;
}

.card:not(:first-child) {
  margin-left: 12px;
}

.mod-title {
  width: max-content;
  display: inline-block;
}

.mod-header-wrapper {
  display: flex;
  align-content: center;
}

.download-btn:hover {
  box-shadow: var(--neon-light);
}
</style>
