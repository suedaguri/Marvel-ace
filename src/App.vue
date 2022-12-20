<template>
  <div id="app">
    <router-link to="/"> Characters </router-link> |
    <router-link to="/comics" class="comics"> Comics </router-link>
    <router-view/>
  </div>
</template>

<style>
#app {
  padding: 30px;
  padding-top:40px
}


nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
