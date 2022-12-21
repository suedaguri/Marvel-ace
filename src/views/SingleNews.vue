<template>
    <body>
    <article class="single-article">
      <div class="container">
        <div class="app">
        <div class="header-title header-title--margin">Super<span class="header-orange">Hero.</span></div>
        <div class="border">
        <div v-for="news in marvelCharacter" :key="news.name">
          <div class="columns">
          <div class="column is-half">
          <img :src="`${news.thumbnail.path}/${format}`" alt="">
          </div>
          <div class="column is-half">
         <div class="header-title">{{ news.name }}</div>
          <hr class="pink-line"/>
          <div class="content">
            <div class="margin-text"><span class="header-title gray-text ">ID: </span>{{ news.id }}</div>
          <div class="margin-text"><span class="header-title gray-text ">Description: </span>{{ news.description }}</div>
          <div class="margin-text"><span class="header-title gray-text ">Available comics: </span>{{ news.comics.available}}</div>
          <div class="margin-text"><span class="header-title gray-text ">Available series: </span>{{ news.series.available}}</div>
          <div class="margin-text"><span class="header-title gray-text ">Available stories: </span>{{ news.stories.available}}</div>
          <div class="margin-text"><span class="header-title gray-text ">Date modified: </span>{{ news.modified}}</div>
          <div class="alignment2">
          <a target="_blank" class="button is-link alignment" :href="news.urls[2].url">COMIC LINK</a>
          <a target="_blank" class="button is-link alignment" :href="news.urls[0].url">MORE DETAILS</a>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>
      </div>
    </article>
  </body>
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
.gray-text {
  font-size: 1rem!important;
}
.margin-text-last{
  margin-bottom: 2.6rem;
}
.alignment{
  margin-top: 1.5rem;
  margin-right: .5rem;
}
.alignment2{
  display: flex;
  justify-content: center;
}
</style>