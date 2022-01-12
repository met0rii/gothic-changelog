<template>
  <div>
    <transition
      :enter-active-class="enterClassName"
      :leave-active-class="leaveClassName"
      mode="out-in"
    >
      <v-row class="cards-container" :key="page">
        <template v-if="selected">
          <v-col
            cols="12"
            sm="6"
            md="3"
            class="card-container pl-4 pr-4"
            v-for="(changes, index) in changelogs"
            v-bind:key="changes.version"
          >
            <changelog-card
              :id="changes.updateId"
              :description="changes.updateDescription"
              :date="changes.date"
              :version="changes.version"
              :show-badge="index === 0 && isFirstPage"
              badgeText="Latest"
            />
          </v-col>
        </template>
      </v-row>
    </transition>
    <div v-if="pagesLength !== 1" class="d-flex justify-end">
      <v-pagination
        dark
        :value="page"
        @input="changePage"
        :length="pagesLength"
      />
    </div>
  </div>
</template>

<script>
// components
import ChangelogCard from "@/components/ChangelogCard";

export default {
  components: {
    ChangelogCard,
  },
  data: () => {
    return {
      page: 1,
      previousPage: 0,
      itemsPerPage: 4,
    };
  },
  computed: {
    pagesLength() {
      if (this.$store.state.changelogs.selected.changes) {
        return Math.ceil(
          this.$store.state.changelogs.selected.changes.length /
            this.itemsPerPage
        );
      }

      return 1;
    },
    selected() {
      return this.$store.state.changelogs.selected;
    },
    changelogs() {
      const start = (this.page - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      if (this.$store.state.changelogs.selected.changes) {
        return this.$store.state.changelogs.selected.changes.slice(start, end);
      }
      return [];
    },
    isFirstPage() {
      return this.page === 1;
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
.cards-container {
  min-height: 300px;
}

.card-container {
  padding-top: 0px;
  padding-bottom: 24px;
}
</style>
