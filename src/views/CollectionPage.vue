<script setup>
import Navbar from './Navbar.vue'
import { useRouter } from 'vue-router'
import imgOdyssey from '../assets/gambar/odyssey.jpg'
import imgSummer from '../assets/gambar/summer.jpg'
import imgPerfect from '../assets/gambar/perfect-match.jpg'

const router = useRouter()

const collections = [
  {
    title: 'ODYSSEY',
    image: imgOdyssey,
    route: '/collection/odyssey',
  },
  {
    title: 'SUMMER CHILLCATION',
    image: imgSummer,
    route: '/collection/summer',
  },
  {
    title: 'PERFECT MATCH',
    image: imgPerfect,
    route: '/collection/perfect',
  },
]

function goTo(route) {
  router.push(route)
}
</script>

<template>
  <div style="background-color: var(--c-cream); min-height: 100vh;">
    <Navbar />
    <div class="p-8">
      <h1 class="text-3xl font-bold mb-6" style="color: var(--c-dark-purple);">COLLECTION</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="item in collections"
          :key="item.title"
          @click="goTo(item.route)"
          class="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:scale-105 transition"
        >
          <img :src="item.image" class="w-full h-80 object-cover" />
          <div class="p-4 font-semibold text-center text-lg" style="color: var(--c-dark-purple);">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
