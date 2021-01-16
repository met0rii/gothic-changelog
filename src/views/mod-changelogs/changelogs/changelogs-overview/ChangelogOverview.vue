<template>
  <v-row>
    <section-title title="Lista zmian" />
    <v-col xs="12" class="pl-4 pr-4">
      <div class="changelog-row pa-4">
        <div class="back-button-container mb-2">
          <back-button text="Powrót" />
        </div>
        <div class="changelog-headline-container mb-4">
          <h2 class="changelog-headline">Changelog {{ changelog.version }}</h2>
          <span class="changelog-subline">
            Data wydania: {{ changelog.date }}
          </span>
        </div>
        <span v-html="changelog.updateDescription"></span>
        <div
          class="mt-6"
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
              open-all
              :items="list.list"
            >
              <template v-slot:prepend="{ item }">
                <v-icon v-if="item"> mdi-pan-right </v-icon>
              </template>
            </v-treeview>
          </template>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import BackButton from "../../../../components/BackButton.vue";
import SectionTitle from "../../../../components/SectionTitle.vue";

export default {
  components: { BackButton, SectionTitle },
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
.changelog-row {
  background-color: var(--black-primary);
  border-radius: 4px;
}
.changelog-headline {
  margin-bottom: 10px;
}

.changelog-subline {
  color: var(--white-secondary);
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
