<template>
  <body>
    <article class="single-article">
      <div class="container">
        <div class="app">
        <div class="header-title header-title--margin">Super<span class="header-orange">Comic.</span></div>
        <div class="border">
        <div v-for="news in marvelCharacter" :key="news.title">
          <div class="columns">
          <div class="column is-half">
          <img :src="`${news.thumbnail.path}/${format}`" alt="">
          </div>
          <div class="column is-half">
         <div class="header-title">{{ news.title }}</div>
          <hr class="pink-line"/>
          <div class="content">
          <div class="margin-text"><span class="gray-text">Description: </span>{{ news.description }}</div>
          <div class="margin-text"><span class="gray-text">Format: </span>{{news.format}}</div>
          <div class="margin-text-last"><span class="gray-text">Number of Pages: </span>{{news.pageCount}}</div>
          <a target="_blank" class="button is-link alignment" :href="news.urls[0].url">More about me</a>
        </div>
      </div>
    </div>
    <div class="content2">
      <div class="header-title">MY COMICS</div>
      <div></div>
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
    name: 'SingleComics',
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
        fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=d2ca9edd4af913f574f7106d3938aa10&hash=39c369c7ffefca54e9133674f8be9e84&limit=1`)
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
    color: white;
    padding-top: 60px;
    padding-bottom: 60px;
    text-align: left;
  }
  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .border {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid rgba(255,255,255, 0.1);
    border-radius: 2px;
    padding-bottom: 2.6rem;
    margin: .4rem 0;
  }

  .app {
  background-color: #0a0a0a;
  margin-top: 2rem;
  margin-left: 9rem;
  margin-right: 9rem ;
  margin-bottom: 10rem;
  padding: 4rem 6rem;
  border-radius: 6px;
  color: #fff;
  box-shadow: 0px 5px 11px 0px rgba(0, 0, 0, 0.5);
  }
  .header-orange {
    color: #f64445;
  }
  .header-title{
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1.7rem;
  }

  .header-title--margin {
    margin-bottom: 2rem;
  }

  .column.is-half:first-child{
    width: 39%;
  }
  .column.is-half:nth-child(2){
   width: 60%;
  }
  hr.pink-line {
    background: #f64445;
    margin-top: .5rem;
    height: 1.5px;
    margin-bottom: 2rem;
  }

  .content {
    font-family: "Poppins";
  }

  .gray-text {
    color: gray;
  }
  .margin-text{
    padding-bottom: .5rem;
  }
  .alignment {
    float: right;
  }
  </style>