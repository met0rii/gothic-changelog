<template>
  <v-row>
    <section-title title="Lista zmian" />
    <v-col cols="12" class="pl-4 pr-4" v-if="changelog">
      <div class="changelog-row pa-4">
        <div class="back-button-container mb-2">
          <v-btn
            color="orange lighten-3"
            light
            small
            :to="redirectData"
            class="back-button"
          >
            <v-icon left dark> mdi-arrow-left </v-icon>
            Powrót
          </v-btn>
        </div>

        <div class="changelog-headline-container mb-4">
          <item-header fontSize="36px" :title="changelogTitle" />
          <span class="changelog-subline">
            Data wydania: {{ changelog.date | formatDate($dayjs) }}
          </span>
        </div>

        <span v-html="changelog.updateDescription"></span>

        <v-divider class="mt-4" />

        <div
          class="mt-4"
          v-if="changelog.alerts && changelog.alerts.length > 0"
        >
          <v-alert
            v-for="(alert, index) in changelog.alerts"
            :color="alert.color + ' lighten-2'"
            :key="index"
          ><span v-html="alert.text"
          /></v-alert>
        </div>

        <recursive-list class="mt-6" :data="changelog.lists" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import RecursiveList from "@/components/RecursiveList.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import ItemHeader from "@/components/ItemHeader.vue";

export default {
  components: { SectionTitle, RecursiveList, ItemHeader },
  computed: {
    changelogTitle() {
      return "Changelog " + this.changelog.version;
    },
    changelog() {
      return this.$store.state.changelogs.selectedChangelog;
    },
    redirectData() {
      return {
        name: "Changelogs",
        params: {
          game: this.$route.params.game,
          id: this.$route.params.id,
        },
      };
    },
  },
  filters: {
    formatDate(value, formater) {
      return formater(new Date(value)).format("DD MMMM YYYY");
    }
  }
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
