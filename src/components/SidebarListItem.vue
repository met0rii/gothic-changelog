<template>
  <v-list-item :disabled="disabled" class="custom-list-item" link :to="toRoute">
    <v-list-item-content className="custom-list-item-content">
      <v-list-item-title>
        {{ title }}
      </v-list-item-title>
    </v-list-item-content>
    <div v-if="notAvailable" class="badge">
      <span class="text" data-text="Soon">Już Wkrótce</span>
    </div>
  </v-list-item>
</template>

<script>
export default {
  name: "SidebarListItem",
  props: {
    title: String,
    toRoute: [String, Object],
    notAvailable: Boolean,
    disabled: Boolean,
  },
};
</script>

<style scoped>
.custom-list-item.v-list-item {
  padding: 4px !important;
  margin-bottom: 0 !important;
  padding-left: 20px !important;
}

.custom-list-item.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled):hover {
  border-radius: 0px;
  color: var(--orange-secondary) !important;
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

.badge {
  margin-right: 14px;
  background-color: var(--orange-secondary);
  border-radius: 4px;
  color: var(--black-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  box-shadow: var(--neon-light-subtle);
}

.text {
  font-size: 9px;
  font-family: Comic Sans MS, Comic Sans;
  text-transform: uppercase;
  font-weight: bold;
}

.custom-list-item .v-list-item__content {
  font-size: 20px !important;
  min-height: 20px !important;
  padding: 0px !important;
}

.custom-list-item .v-list-item__content .v-list-item__title {
  font-size: 16px;
  line-height: normal;
}

.custom-list-item.v-list-item--active::before {
  opacity: 0.05;
}
</style>
