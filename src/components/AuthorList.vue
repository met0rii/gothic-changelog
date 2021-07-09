<template>
  <div class="author-list-wrapper">
    <div
      class="author-list-item pb-3"
      v-for="(author, authorIndex) in authors"
      :key="authorIndex"
    >
      <div>
        <h3>
          {{ author.name }}
        </h3>
      </div>
      <div class="author-list-subheader">
        {{ author.role }}
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
  methods: {},
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
@media only screen and (min-width: 1600px) {
  .author-list-wrapper {
    column-count: 4;
    column-width: 25%;
  }
}
</style>
