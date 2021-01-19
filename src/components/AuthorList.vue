<template>
  <div class="author-list-wrapper">
    <div
      class="author-list-item mb-6"
      v-for="author in authors"
      :key="author.name"
    >
      <div>
        <h3>
          {{ author.name }}
        </h3>
      </div>
      <div class="author-list-subheader">
        {{ author.role }}
      </div>
      <div class="mt-1" v-if="author.contacts">
        <v-btn
          v-for="(contact, index) in author.contacts"
          :key="index"
          v-on:click="() => onContactButtonClick(contact.url)"
          small
          light
          class="mr-3"
          color="orange lighten-3"
          >{{ contact.platform }}</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthorList",
  props: {
    authors: { type: Array, required: true },
  },
  components: {},
  methods: {
    onContactButtonClick(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style>
.author-list-item {
  break-inside: avoid-column; /* Prevent element from breaking */
  page-break-inside: avoid; /* Prevent element from breaking in Firefox */
}

.author-list-subheader {
  color: var(--white-secondary);
}

@media only screen and (min-width: 320px) {
  .author-list-wrapper {
    column-count: 1;
    column-width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  .author-list-wrapper {
    column-count: 2;
    column-width: 50%;
  }
}

@media only screen and (min-width: 960px) {
  .author-list-wrapper {
    column-count: 3;
    column-width: 33%;
  }
}
</style>