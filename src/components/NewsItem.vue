<template>
  <v-card
      class="pa-5"
      elevation="2"
      tile
      dark
  >
    <p class="news-header"><a :to="data.redirect">{{data.title}}</a></p>
    <p v-if="date" class="news-date">{{date | moment("calendar")}}</p>
    <p v-else class="news-date">nieznana</p>
    <p class="news-body" v-html="data.body"/>
    
    <p class="text-right">
      <v-btn :to="data.redirect" color="orange lighten-3" light>Więcej</v-btn>
    </p>
    
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  name: "NewsItem",
  computed: {
    date() {
      const date = new Date(this.data.date);
      
      if(isNaN(date.getTime())) {
        return '';
      }
      
      return date;
    }
  }
}
</script>

<style scoped>
.news-header {
  font-weight: bold;
  font-size:18px;
  margin-bottom:0;
}

.news-header a {
  color: var(--orange-secondary);
  transition: color 0.3s ease;
}

.news-header a:hover {
  text-decoration: underline;
  color: var(--orange-secondary-dark);

}

.news-date{
  font-style: italic;
  font-size: 12px;
}
.news-body {
  text-align: justify;
}
</style>