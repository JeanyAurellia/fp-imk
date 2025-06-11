import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import CollectionPage from './views/CollectionPage.vue'
import OdysseyPage from './views/OdysseyPage.vue'
import SummerPage from './views/SummerPage.vue'
import PerfectPage from './views/PerfectPage.vue'

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
    path: '/collection/odyssey',
    name: 'Odyssey',
    component: OdysseyPage
  },
  {
    path: '/collection/summer',
    name: 'Summer',
    component: SummerPage
  },
  {
    path: '/collection/perfect',
    name: 'Perfect',
    component: PerfectPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
