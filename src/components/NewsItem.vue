<template>
  <v-card
      class="pa-5 news-item"
      elevation="2"
      tile
      dark
  >
    <div>
      <item-header fontSize="22px" :title="data.title" :redirect="data.redirect"/>
      <p v-if="date" class="news-date">{{date | moment("DD.MM.YYYY") }}</p>
      <p v-else class="news-date">nieznana</p>
    </div>
    <div>
      <p class="news-body" v-html="data.body"/>
    </div>
    <div>
      <p class="text-right">
        <v-btn :to="data.redirect" color="orange lighten-3" light>Więcej</v-btn>
      </p>
    </div>
    
  </v-card>
</template>

<script>
import ItemHeader from "./ItemHeader";

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  name: "NewsItem",
  components: { ItemHeader },
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
.news-item {
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
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