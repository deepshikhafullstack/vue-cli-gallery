<template>
  <div>
    <Header :title="title" />
    <b-container>
      <b-row class="py-3">
        <b-col
          sm="3"
          class="text-center"
          v-for="(album, index) in albums"
          :key="index"
        >
          <BaseCard :title="album.title" image="album.png" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import BaseCard from "../components/BaseCard.vue";

export default {
  name: "GalleryListing",
  props: {},
  components: {
    Header,
    BaseCard
  },
  data: function() {
    return {
      title: 'abc',
      albums: [
        {
          userId: 2,
          id: 11,
          title: "quam nostrum impedit mollitia quod et dolor"
        },
        {
          userId: 2,
          id: 12,
          title: "consequatur autem doloribus natus consectetur"
        }
      ]
    };
  },
  mounted: function() {
        this.title = this.$route.params.name
        
    },
};
</script>

<style></style>
