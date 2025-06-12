<script setup>
import Navbar from './Navbar.vue'
import img1 from '../assets/gambar/odyssey.jpg'
import img2 from '../assets/gambar/odyssey.jpg'

const products = [
  {
    id: 1,
    title: 'ODYSSEY TRAVEL THE WORLD T–SHIRT',
    price: 'IDR 250,000',
    image: img1,
  },
  {
    id: 2,
    title: '[PRE-ORDER] ODYSSEY AIRPORT JACKET',
    price: 'IDR 600,000',
    image: img2,
  },
]
</script>

<template>
  <div style="background-color: var(--c-cream);">
    <Navbar />

    <div class="p-8 max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold mb-6" style="color: var(--c-dark-purple);">Odyssey Collection</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="item in products" :key="item.id" class="bg-white rounded-xl overflow-hidden shadow-md">
          <img :src="item.image" class="w-full h-80 object-cover" />
          <div class="p-4">
            <h2 class="text-lg font-bold">{{ item.title }}</h2>
            <p class="text-gray-600">{{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
