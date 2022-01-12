<template>
  <v-card dark class="card fill-height">
    <v-card-title class="headline">
    <item-header fontSize="26px" :title="version" :redirect="redirectData" />
    </v-card-title>
    <v-card-subtitle class="subheadline">
      <div class="line-clamp" v-html="description"></div>
    </v-card-subtitle>

    <v-card-actions class="card-actions">
      <v-spacer />
      <v-btn small :to="redirectData" color="orange lighten-3" light>
        Czytaj dalej
        <v-icon right> mdi-arrow-right </v-icon>
      </v-btn>
    </v-card-actions>
    <div v-if="showBadge" class="card-ribbon-container">
      <div class="card-left-outer-space"></div>
      <div class="card-ribbon">
        <div class="card-ribbon-content">
          {{ badgeText }}
        </div>
      </div>
      <div class="card-right-outer-space"></div>
    </div>
  </v-card>
</template>

<script>
import ItemHeader from "./ItemHeader.vue";

export default {
  name: "ChangelogCard",
  props: {
    id: String,
    description: String,
    date: String,
    version: String,
    showBadge: Boolean,
    badgeText: String,
  },
  components: {
    ItemHeader,
  },
  data: () => ({}),
  computed: {
    redirectData() {
      return `/mod/${this.$route.params.game}/${this.$route.params.mod}/changelog/${this.$props.id}`;
    },
  },
};
</script>

<style scoped>
.headline {
  margin-bottom: 10px;
  font-size: 20px !important;
}

.line-clamp {
  height: 150px;
  padding: 0px !important;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.headline-link:hover {
  text-decoration: underline;
}

.card {
  display: flex;
  flex-direction: column;
  transition: all 0.4s;
  width: 100%;
  height: 100%;
  background-color: var(--black-primary);
  position: relative;
}

.card:hover {
  box-shadow: var(--neon-light);
}
.card-actions {
  margin-top: auto;
}

.card-ribbon-container {
  width: max-content;
  height: max-content;
  position: absolute;
  right: -40px;
  top: 15px;
  z-index: 1;
}

.card-ribbon {
  background-color: var(--orange-secondary);
  text-align: center;
  width: 80px;
  padding-left: 70px;
  padding-right: 70px;
  color: var(--black-primary);
  border-top-right-radius: 6px;
  font-weight: bold;
  font-size: 20px;
  transform: rotate(45deg);
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  z-index: 100;
}

.card-ribbon-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-left-outer-space,
.card-right-outer-space {
  display: block;
  position: absolute;
  background-color: var(--orange-secondary-dark);
  z-index: -1;
}

.card-left-outer-space {
  top: -24px;
  left: 5px;
  width: 14px;
  height: 10px;

  border-top-left-radius: 6px;
}

.card-right-outer-space {
  bottom: -50px;
  right: 31px;
  width: 9px;
  height: 13px;

  border-bottom-right-radius: 6px;
}

@media only screen and (min-width: 350px) {
  .headline {
    font-size: 1.5em !important;
  }
}
</style>
