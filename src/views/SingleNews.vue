<template>
  <article class="single-article">
    <div class="container">
      <div v-for="news in marvelCharacter" :key="news.name">
        <div><div>{{ news.name }}</div></div>
      <div class="single-article__content content"><div>{{ news.description }}</div></div>
      <div class="single-article__image">
        <img :src="`${news.thumbnail.path}/${format}`" alt="">
      </div>
    </div>
    </div>
  </article>

</template>

<script>
export default {
  name: 'SingleNews',
  data() {
    return {
      marvelCharacter:[],
      format: 'portrait_uncanny.jpg'
    }
  },
  mounted() {
    this.fetchSingleNews(this.$route.params.id);
  },
  methods: {
    fetchSingleNews(id) {
      fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=d2ca9edd4af913f574f7106d3938aa10&hash=39c369c7ffefca54e9133674f8be9e84&limit=1`)
      .then(response => response.json())
      .then((result) => {
                result.data.results.forEach((item)=>{
                    this.marvelCharacter.push(item)
                })
            })
    }
  }
}
</script>

<style>
.single-article {
  padding-top: 60px;
  padding-bottom: 60px;
  text-align: left;
}
</style>