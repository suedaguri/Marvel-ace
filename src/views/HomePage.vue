<template>
  <div id="app" class="text-alignment">
    <div class="container">
      <h1 class="title format-text">Characters</h1>
      <div class="form-input">
      <input class="input form-size" type="text" v-model="search" placeholder="Search for your superhero here...">
      </div>
      <div class="card-list">
        <CardItem class="card-list-element" v-for="character in filteredPosts" :key="character.id"
          :cardID = "character.id"
          :cardTitle="character.name"
          :cardImage="`${character.thumbnail.path}.${character.thumbnail.extension}`"
          >
        </CardItem>
      </div>
    </div>
  </div>
</template>
<script>
import CardItem from '../components/CardItem.vue';

export default {
  name: 'HomePage',
  components: {
    CardItem
  },
  data() {
    return {
      characterList: [],
      search: ''
    }
  },
  methods : {
    fetchcharacter() {
      fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d2ca9edd4af913f574f7106d3938aa10&hash=39c369c7ffefca54e9133674f8be9e84&limit=39&offset=291')
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
  return this.characterList.filter(character => character.name.toLowerCase().includes(this.search.toLowerCase()))
}
  },
  mounted() {
    this.fetchcharacter();
  }
}
</script>

<style>
html {
  background: #272727;
}
.text-alignment{
  text-align: center;
}
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
  .format-text {
    font-family: helvetica;
    text-transform: uppercase;
    font-size:50px ;
    color:#cc4545;
    text-align: center;
    padding-top: 70px;
  }
  .form-size {
    width:35%;
    background: #b03b3b;
    color: white;
  }
  .form-size::placeholder {
    color: white;
    opacity: .7;
  }
  .form-input {
    padding-top: 20px;
    display: flex;
    justify-content: center;
  }
  .input:focus {
    outline: none !important;
    border:1px solid black;
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
    margin-bottom: 45px;
  }
}
</style>
