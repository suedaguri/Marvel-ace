<template>
    <div id="app">
      <div class="container">
      <h1 class="title format-text">Comics</h1>
      <div class="form-input">
      <input class="input form-size" type="text" v-model="search" placeholder="Search for your comic here...">
      </div>
        <div class="card-list">
          <ComicsItem class="card-list-element" v-for="character in filteredPosts" :key="character.id"
            :cardID = "character.id"
            :cardTitle="character.title"
            :cardImage="`${character.thumbnail.path}.${character.thumbnail.extension}`"
            >
          </ComicsItem>
        </div>
      </div>
    </div>
  </template>
  <script>
  import ComicsItem from '@/components/ComicItem';
  
  export default {
    name: 'comic-Item',
    components: {
      ComicsItem
    },
    data() {
      return {
        characterList: [],
        search: ''
      }
    },
    methods : {
      fetchcharacter() {
        fetch('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=d2ca9edd4af913f574f7106d3938aa10&hash=39c369c7ffefca54e9133674f8be9e84&limit=39&offset=291')
        .then(response => response.json())
        .then((result) => {
                  result.data.results.forEach((item)=>{
                      this.characterList.push(item)
                  })
              })
      }
    },
    computed : {
  filteredPosts() {
    return this.characterList.filter(character => character.title.toLowerCase().includes(this.search.toLowerCase()));
  }
},
    mounted() {
      this.fetchcharacter();
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
    .card-list-element:hover {
      cursor: pointer;
      transform: scale(1.05);
      transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    img {
      object-fit:  cover !important;
    }
    @media (max-width:767px) {
    
    .card-list {
grid-template-columns: 1fr;
padding: 15px;
  }
  .form-size{
    width: 55%;
  }
  .form-input {
    margin-bottom: 45px;
  }
  }
  @media(min-width: 768px)and (max-width: 1024px){
    .card-list {
grid-template-columns: 1fr;
padding: 15px;
  }
  .form-input {
    margin-bottom: 40px;
  }
}
  </style>
  