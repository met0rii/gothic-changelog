<template>
  <v-container fluid>
    <v-row>
      <v-col md="9" cols="12" class="news">
        <section-title title="Nowości"/>
        <transition
          :enter-active-class="enterClassName"
          :leave-active-class="leaveClassName"
          mode="out-in"
        >
          <v-col cols="12" class="news__container" :key="page">
            <news-item v-for="(item, index) in paginatedNewsList" :data="item" class="mb-5" :key="index"/>
          </v-col>
        </transition>
        <div class="d-flex justify-end">

          <v-pagination
            :value="page"
            @input="changePage"
            :length="pageCount"
            dark
          />
        </div>

      </v-col>

      <v-col md="3" cols="12" class="text-right">
        <section-title title="Discord"/>
        <sefaris-discord/>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import SefarisDiscord from '@/components/SefarisDiscord';
import CommunityDiscord from '@/components/CommunityDiscord';
import SectionTitle from "@/components/SectionTitle";
import NewsItem from "@/components/NewsItem";

export default {
  async fetch({store}) {
    await store.dispatch("news/getCollection");
  },
  name: "Home",
  components: {NewsItem, SectionTitle, SefarisDiscord, CommunityDiscord},
  data() {
    return {
      page: 1,
      previousPage: 0,
      pageSize: 5
    }
  },
  head() {
    return {
      title: 'Strona główna',
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Strona główna - Sefaris'
        }
      ],
      link: [{
        rel: 'canonical',
        href: `${process.env.appUrl}`
      }]
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.newsList.length / this.pageSize);
    },
    paginatedNewsList() {
      if(this.newsList) {
        const start = (this.page - 1) * this.pageSize;
        return this.newsList.slice(start, start + this.pageSize);
      }
      return [];
    },
    newsList() {
      if (this.$store.state.news.collection && this.$store.state.news.collection.changelogs && this.$store.state.news.collection.news) {
        const collection = this.$store.state.news.collection;
        const arr = [...collection.changelogs, ...collection.news].sort((a, b) => {
          const firstDate = this.$dayjs(a.date);
          const secondDate = this.$dayjs(b.date);

          if (firstDate.diff(secondDate) > 0) {
            return -1;
          }
          else {
            return 1;
          }
        });

        return arr;
      }
      return [];
    },
    enterClassName() {
      return this.page < this.previousPage ? "slideInLeft" : "slideInRight";
    },
    leaveClassName() {
      return this.page < this.previousPage ? "slideOutRight" : "slideOutLeft";
    },
  },
  methods: {
    changePage(page) {
      this.previousPage = this.page;
      this.page = page;
    },
  },
};
</script>

<style scoped>
.news {
  padding-left: 0px !important;
  overflow: hidden;
}

.news__container {
  padding: 0 0 0 12px !important;
}
</style>
