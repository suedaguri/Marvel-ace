<template>
  <div class="card">
  <router-link :to="'/single-news/'+ cardID" >
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="cardImage" :alt="cardTitle">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{{cardTitle}}</p>
      </div>
    </div>

    <div class="content">
      <div>{{ cardContent }}</div>
    </div>
  </div>
</router-link>
</div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    cardID: Number,
    cardTitle: String,
    cardContent: String,
    cardImage: String
  }
}
</script>

<style scoped>

</style>
