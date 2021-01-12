<template>
  <v-container class="ml-4 mr-4 changelog-container" fluid>
    <v-row v-if="changelog" class="changelog-row">
      <v-col cols="12">
        <div class="changelog-headline-container">
          <h2 class="changelog-headline">Changelog {{ changelog.version }}</h2>
          <back-button class="ml-6" text="Wróć" />
        </div>
        <span v-html="changelog.updateDescription"></span>
      </v-col>
      <v-col cols="12">
        <ul>
          <li v-for="(list, listIndex) in changelog.lists" :key="listIndex">
            <span
              v-html="list.title"
              :class="{
                'font-weight-bold':
                  typeof list.list === 'object' && list.list.length > 0,
              }"
            />
            <ul v-if="list.list">
              <li
                v-for="(item, itemIndex) in list.list"
                :key="listIndex + '_' + itemIndex"
                v-html="item"
              />
            </ul>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BackButton from "../../../../components/BackButton.vue";

export default {
  components: { BackButton },
  computed: {
    changelog() {
      return this.$store.state.changelogs.selectedChangelog;
    },
  },
};
</script>

<style scoped>
.changelog-headline-container {
  display: flex;
}
.changelog-headline {
  margin-bottom: 10px;
}

.changelog-row {
  padding: 6px;
  background-color: #424242;
  border-radius: 4px;
}

@media only screen and (min-width: 350px) {
  .changelog-headline {
    font-size: 1.5em !important;
  }
}
</style>
