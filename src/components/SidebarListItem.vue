<template>
  <v-list-item class="custom-list-item" link :to="toRoute">
    <v-list-item-content>
      <v-list-item-title v-text="title"></v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>


<script>
export default {
  name: "SidebarListItem",
  props: {
    title: String,
    toRoute: [String, Object],
  },
};
</script>

<style scoped>
.custom-list-item.v-list-item {
  padding: 4px !important;
  margin-bottom: 0 !important;
}

.custom-list-item:hover {
  border-radius: 0px;
}
.custom-list-item.v-list-item:before {
  border-radius: 0px;
}

.custom-list-item.v-list-item--active {
  color: var(--white-primary) !important;
  border-radius: 0px !important;
  border-right: 4px solid var(--orange-secondary);
  background-color: rgba(255, 255, 255, 0.2) !important;
}

.custom-list-item .v-list-item__content {
  font-size: 20px !important;
  min-height: 20px !important;
  padding: 0px !important;
  padding-left: 20px !important;
}

.custom-list-item .v-list-item__content .v-list-item__title {
  font-size: 16px;
}

.custom-list-item.v-list-item--active::before {
  opacity: 0.05;
}
</style>