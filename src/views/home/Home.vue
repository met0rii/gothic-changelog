<template>
  <v-container fluid>
    <v-row>
      <v-col cols="9">
        <section-title title="Nowości"/>

        <news-item v-for="(item, index) in paginatedNewsList" :data="item" class="mb-5" :key="index"/>

        <div class="d-flex justify-end">
          
        <v-pagination
            v-model="currentPage"
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
      currentPage: 1,
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
        const start = (this.currentPage - 1) * this.pageSize;
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
  }
};
</script>
