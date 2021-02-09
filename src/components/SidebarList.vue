<template>
  <v-list class="custom-list-nav" dense nav>
    <div class="list-section">
      <div class="list-header">Główne</div>
      <v-list-item class="custom-list-item" to="/" link>
        <v-list-item-content>
          <v-list-item-title>Strona główna</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
    <div class="list-section" v-for="(value, key) in sidebarItems" :key="key">
      <div class="list-header">
        {{ value.name }}
      </div>
      <v-list-item
        class="custom-list-item"
        v-for="child in value.data"
        :key="child.title"
        link
        :to="{
          name: 'Changelogs',
          params: { gameId: key, id: child.id },
        }"
      >
        <v-list-item-content>
          <v-list-item-title v-text="child.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
  </v-list>
</template>

<script>
export default {
  props: {
    sidebarItems: Object,
  },
};
</script>

<style scoped>
.list-header {
  margin: 0 13px 4px 13px;
  font-size: 14px;

  color: var(--white-secondary);
}
.custom-list-nav.v-list--nav {
  padding: 0 !important;
  margin-top: 20px;
}

.list-section {
  margin-bottom: 20px;
}

.custom-list-item.v-list-item {
  padding: 0px !important;
}

.custom-list-item.v-list-item--active {
  color: var(--white-primary) !important;
  border-radius: 0px !important;
  border-right: 4px solid var(--orange-secondary);
  background-color: rgba(255, 255, 255, 0.2) !important;
}

.custom-list-item .v-list-item__content {
  min-height: 20px !important;
  padding: 0px !important;
  padding-left: 14px !important;
}

.custom-list-item .v-list-item__content .v-list-item__title {
  font-size: 14px;
}

.custom-list-item.v-list-item--active::before {
  opacity: 0.05;
  border-radius: 0px !important;
}
</style>