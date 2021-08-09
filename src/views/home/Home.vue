<template>
  <v-container fluid>
    <v-row>
      <v-col cols="9" class="news">
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

      <v-col cols="3" class="text-right">
        <section-title title="Discord"/>
        <sefaris-discord/>

        <section-title title="Społeczność"/>
        <community-discord/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment';

import SefarisDiscord from "../../components/SefarisDiscord";
import CommunityDiscord from "../../components/CommunityDiscord";
import SectionTitle from "@/components/SectionTitle";
import NewsItem from "@/components/NewsItem";

export default {
  name: "Home",
  components: {NewsItem, SectionTitle, SefarisDiscord, CommunityDiscord},
  data() {
    return {
      page: 1,
      previousPage: 0,
      pageSize: 5
    }
  },
  mounted() {
    this.$store
        .dispatch("news/getCollection");
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
          const firstDate = moment(a.date);
          const secondDate = moment(b.date);
          
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
  overflow:
}

.news__container {
  padding: 0 0 0 12px !important;
}
</style>
