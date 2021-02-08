<template>
  <v-list class="custom-list-nav" dense nav>
    <div class="list-section">
      <div class="list-header">Główne</div>
      <v-list-item class="custom-list-item" to="/" link>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
    <div class="list-section" v-for="(value, key) in sidebarItems" :key="key">
      <div class="list-header">{{ value.name }}</div>
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
  font-size: 16px;
  margin-bottom: 4px;
  padding-left: 12px;
  color: var(--white-secondary);
}

.custom-list-nav.v-list--nav {
  padding-left: 0;
  padding-right: 0;
  margin-top: 8px;
}

.list-section:not(:first-child) {
  margin-top: 20px;
}

.custom-list-item {
  padding: 0px;
  min-height: 30px !important;
}

.custom-list-item.v-list-item {
  padding: 0px !important;
}

.custom-list-item.v-list-item--active {
  color: var(--white-primary) !important;
  border-radius: 0px !important;
  border-left: 4px solid var(--orange-secondary);
  background-color: rgba(255, 255, 255, 0.2) !important;
}

.custom-list-item .v-list-item__content {
  min-height: 20px !important;
  padding-left: 12px !important;
}

.custom-list-item.v-list-item--active::before {
  opacity: 0.05;
  border-radius: 0px !important;
}
</style>