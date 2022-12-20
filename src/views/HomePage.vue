<template>
  <div id="app">
    <div class="container">
      <input type="text" v-model="search">
      <div class="card-list">
        <CardItem v-for="news in filteredPosts" :key="news.id"
          :cardID = "news.id"
          :cardTitle="news.name"
          :cardImage="`${news.thumbnail.path}.${news.thumbnail.extension}`"
          >
        </CardItem>
      </div>
    </div>
  </div>
</template>
<!-- :cardContent="news.description" -->
<script>
import CardItem from '../components/CardItem.vue';

export default {
  name: 'HomePage',
  components: {
    CardItem
  },
  data() {
    return {
      newsList: [],
      search: ''
    }
  },
  methods : {
    fetchNews() {
      fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d2ca9edd4af913f574f7106d3938aa10&hash=39c369c7ffefca54e9133674f8be9e84&limit=45&offset=291')
      .then(response => response.json())
      .then((result) => {
                result.data.results.forEach((item)=>{
                    this.newsList.push(item)
                })
            })
    }
  },
  computed : {
filteredPosts() {
  return this.newsList.filter(news => news.name.toLowerCase().includes(this.search.toLowerCase()))
}
  },
  mounted() {
    this.fetchNews();
  }
}
</script>

<style>
  .card-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  img {
    object-fit:  cover !important;
  }
</style>
