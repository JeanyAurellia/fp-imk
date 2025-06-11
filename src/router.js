import { createRouter, createWebHistory } from 'vue-router'
import Navbar from './views/Navbar.vue'
import HomePage from './views/HomePage.vue' 
import CollectionPage from './views/CollectionPage.vue'
import ProductPage from './views/Product.vue'

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
  },
  {
    path: '/product/:id', // Dynamic route dengan parameter :id
    name: 'Product',
    component: ProductPage,
    props: true // Mengaktifkan props dari route params
  }
  //   {
  //   path: '/product', 
  //   name: 'Product',
  //   component: ProductPage
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
