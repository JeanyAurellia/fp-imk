import { createRouter, createWebHistory } from 'vue-router'
import Navbar from './views/Navbar.vue'
import HomePage from './views/HomePage.vue' 
import CollectionPage from './views/CollectionPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/collection',
    name: 'Collection',
    component: CollectionPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
