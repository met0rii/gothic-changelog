
<template>
  <iframe :src="data.installation.url"
            class="mod-video"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
</template>

<script>


export default {
  name: "ModVideo",
  props: {
    data: { type: Object, required: true },
  },
  components: {},
};
</script>
<style scoped>
.mod-video
{
  width: 100%;
  height: 75vh;
}
</style>