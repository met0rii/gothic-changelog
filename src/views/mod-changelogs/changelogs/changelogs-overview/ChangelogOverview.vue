<template>
  <v-row>
    <section-title title="Lista zmian" />
    <v-col xs="12" class="pl-4 pr-4">
      <div class="changelog-row pa-4">
        <div class="back-button-container mb-2">
          <back-button text="Powrót" />
        </div>
        <div class="changelog-headline-container mb-4">
          <h2>Changelog {{ changelog.version }}</h2>
          <span class="changelog-subline">
            Data wydania: {{ changelog.date }}
          </span>
        </div>
        <span v-html="changelog.updateDescription"></span>
        <v-divider class="mt-2" />
        <changelog-list :changelogList="changelog.lists"></changelog-list>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import BackButton from "../../../../components/BackButton.vue";
import ChangelogList from "../../../../components/ChangelogList.vue";
import SectionTitle from "../../../../components/SectionTitle.vue";

export default {
  components: { BackButton, SectionTitle, ChangelogList },
  computed: {
    changelog() {
      return this.$store.state.changelogs.selectedChangelog;
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
}

@media only screen and (min-width: 601px) {
  .back-button-container {
    text-align: left;
  }
}
</style>
