<template>
  <b-card
    :title="title"
    :img-src="getImageUrl(image)"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 border-0"
  >
  <router-link :to="'/album/' + id + '/' + pageTitle" variant="primary" block>View</router-link>
  </b-card>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    title: String,
    image: String,
    id: Number,
    pageTitle: String
  },
  methods: {
    getImageUrl: function(img) {
      return require("@/assets/" + img);
    },
    goToAlbum(id = 1) {
      this.$router.push({ name: 'Album', params: { userId: id } })
    }
  }
};
</script>

<style></style>
