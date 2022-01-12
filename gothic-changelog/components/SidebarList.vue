<template>
  <v-list class="custom-list-nav" dense nav>
    <div class="list-section">
      <div class="list-header">Główne</div>
      <sidebar-list-item title="Strona główna" route="/" />
    </div>
    <div class="list-section" v-for="(value, key) in sidebarItems" :key="key">
      <div class="list-header">
        {{ value.name }}
      </div>
      <sidebar-list-item
        v-for="child in value.data"
        :key="child.title"
        :title="child.title"
        :notAvailable="child.notAvailable"
        :isNew="child.isNew"
        :disabled="child.disabled"
        :route="{
          game: key,
          mod: child.id
        }"
      />
    </div>
  </v-list>
</template>

<script>
import SidebarListItem from "./SidebarListItem.vue";
export default {
  components: { SidebarListItem },
  name: "SidebarList",
  props: {
    sidebarItems: Object,
  },
};
</script>

<style scoped>
.list-header {
  padding: 10px 0 10px 15px;
  font-size: 20px;
  color: var(--white-primary);
  background-color: var(--black-primary);
  font-weight: bold;
}
.custom-list-nav.v-list--nav {
  padding: 0 !important;
  margin-top: 10px;
}
</style>
