import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SingleNews from '../views/SingleNews.vue'
import ComicsItem from '../views/Comics.vue'
import SingleComics from '../views/SingleComics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/single-news/:id',
    name: 'single-news',
    component: SingleNews
  },
  {
    path: '/comics',
    name: 'comics',
    component: ComicsItem
  },
  {
    path: '/single-comics/:id',
    name: 'single-comics',
    component: SingleComics
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
