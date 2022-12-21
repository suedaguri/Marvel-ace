<template>
  <div id="app">
    <nav class="navbar is-warning">
    <router-link to="/"><img src="./assets/marvel.png" alt="" style="width:80px; height:80px;"></router-link>
    <div class="navbar-list">
    <div class="firstchild">
    <router-link to="/"> Characters </router-link> 
    </div>
    <router-link to="/comics" class="comics"> Comics  </router-link>
    </div>
  </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  padding: 0px;
  padding-top:0px
}


nav a {
  font-weight: bold;
  color: #131b23;
}

nav a.router-link-exact-active {
  color: #d93d27;
}

.navbar-list {
display: flex;
justify-content: space-between;
align-items: center;  
text-transform: uppercase;
font-family: 'Poppins';
}
.firstchild {
  padding-right: 20px;
}
.textbox {
  display: flex;
  justify-content: space-around;
}
</style>
