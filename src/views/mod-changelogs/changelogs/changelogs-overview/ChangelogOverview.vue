<template>
  <v-container class="ml-4 mr-4 changelog-container" fluid>
    <v-row v-if="changelog" class="changelog-row">
      <v-col cols="12">
        <div class="back-button-container mb-2">
          <back-button text="Powrót" />
        </div>
        <div class="changelog-headline-container mb-6">
          <h2 class="changelog-headline">Changelog {{ changelog.version }}</h2>
          <span class="changelog-subline">
            Data wydania: {{ changelog.date }}
          </span>
        </div>
        <span v-html="changelog.updateDescription"></span>
      </v-col>
      <v-col cols="12">
        <div
          :class="{ 'mb-8': multipleListItems && listIndex !== lastIndex }"
          v-for="(list, listIndex) in changelog.lists"
          :key="listIndex"
        >
          <h3 v-html="list.title" />

          <template>
            <v-treeview
              item-children="list"
              item-text="content"
              dark
              :items="list.list"
            >
              <template v-slot:prepend="{ item }">
                <v-icon v-if="item"> mdi-pan-right </v-icon>
              </template>
            </v-treeview>
          </template>
        </div>
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
    lastIndex() {
      return this.$store.state.changelogs.selectedChangelog.lists.length - 1;
    },
    multipleListItems() {
      return this.$store.state.changelogs.selectedChangelog.lists.length > 1;
    },
  },
};
</script>

<style scoped>
.changelog-headline {
  margin-bottom: 10px;
}

.changelog-subline {
  color: var(--white-secondary);
}

.changelog-row {
  padding: 6px;
  background-color: var(--black-primary);
  border-radius: 4px;
}
.changelog-headline {
  padding: 0;
  margin: 0;
}
.back-button-container {
  text-align: right;
}

@media only screen and (min-width: 350px) {
  .changelog-headline {
    font-size: var(--h2) !important;
  }
}

@media only screen and (min-width: 601px) {
  .back-button-container {
    text-align: left;
  }
}
</style>
