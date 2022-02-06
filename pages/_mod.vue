<template>
  <v-container v-if="selected" class="changelogs" fluid>
    <v-row>
      <mod-banner :mod="selected" @scroll="onScrollButtonClick"/>
    </v-row>
    <NuxtChild/>
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
      meta: [
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
          hid: 'twitter:description',
          name: 'twitter:description',
          content: mod?.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: image
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
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
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
        if (!oldValue || currentValue.params.mod != oldValue.params.mod) {
          this.selectSingleChangelog();
        }

        if (process.client) {
            window.scrollTo({
              top: 0
            });
        }
      },
    },
  },

  methods: {
    selectSingleChangelog() {
        this.$store.commit(
          "changelogs/selectChangelog",
          this.$route.params.changeLogId
        )
    },
    onScrollButtonClick() {
      const descriptionElement = document.getElementById('mod_description');
      if (descriptionElement) {
        window.scrollTo(0, descriptionElement.offsetTop - 50);
      } else {
        this.$router.push({name: 'mod', query: {scrollTo: 'mod_description'}});
      }
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
