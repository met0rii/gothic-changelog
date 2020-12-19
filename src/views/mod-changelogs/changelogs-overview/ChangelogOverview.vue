<template>
  <v-container class="changelog-container" fluid>
    <v-row v-if="changelog" class="changelog-row">
      <v-col cols="12">
        <h2 class="changelog-headline">Changelog {{ changelog.date }}</h2>
        <span>{{ changelog.updateDescription }}</span>
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
export default {
  computed: {
    changelog() {
      return this.$store.state.changelogs.selectedChangelog;
    },
  },
};
</script>

<style scoped>
.changelog-headline {
  font-size: 20px !important;
  margin-bottom: 10px;
}

.changelog-row {
  margin: 16px 12px 12px 12px;
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
