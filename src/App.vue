<template>
  <div id="app">
    <nav class="navbar is-warning nav-i">
      <div class="logoimg">
    <router-link to="/"><img src="./assets/marvel.png" alt="" style="width:80px; height:80px;"></router-link>
  </div>
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
@media(max-width: 767px){
  .navbar{
    height:12rem;
    justify-content: flex-end;
  }
.navbar-list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 26px;
}
.logoimg{
  display: flex;
  justify-content: center;
}
  }
  @media(min-width: 768px)and (max-width: 1024px){
.nav-i{
  display: flex;
}}
</style>
