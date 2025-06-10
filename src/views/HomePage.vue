<script setup>
import products from '../data/product.js'
import ProductCard from '../components/AssetsProduct.vue'
import { ref } from 'vue'

// Mengambil 3 produk pertama untuk ditampilkan sebagai 'Best Selling'
const bestSellingProducts = ref(products.slice(0, 3));

// Menggunakan gambar dari data produk untuk hero section
const heroImage = ref(products[1].image); // [PRE-ORDER] ODYSSEY AIRPORT JACKET
</script>

<template>
  <div class="w-full" style="background-color: var(--c-cream);">
    <nav class="flex items-center justify-between p-6 text-gray-800">
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 mr-2" style="color: var(--c-very-dark-purple);"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
        <span class="text-2xl font-bold" style="color: var(--c-very-dark-purple);">Divine</span>
      </div>
      <div class="hidden md:flex items-center space-x-8">
        <router-link to="/" class="font-semibold" style="color: var(--c-dark-purple);">Home</router-link>
        <router-link to="/collection" class="font-semibold" style="color: var(--c-dark-purple);">Collection</router-link>
      </div>
      <div class="flex items-center space-x-4">
        <div class="relative hidden sm:block">
          <input type="text" placeholder="What are you looking for?" class="px-4 py-2 rounded-md border-2 border-transparent focus:outline-none focus:border-purple-400" style="background-color: #ECE7D9; color: var(--c-dark-purple);" />
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <button class="p-2" style="color: var(--c-very-dark-purple);">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        </button>
        <button class="p-2" style="color: var(--c-very-dark-purple);">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </button>
      </div>
    </nav>

    <header class="relative m-6 rounded-3xl overflow-hidden text-white" style="background-color: var(--c-light-purple);">
      <div class="flex flex-col md:flex-row items-center justify-between p-12 md:p-24">
        <div class="z-10 text-center md:text-left">
          <h1 class="text-5xl md:text-7xl font-bold leading-tight">Buy your<br>dream outfits</h1>
          <p class="mt-4 text-lg">Fashion Redefined</p>
        </div>
        <div class="relative mt-8 md:mt-0 w-full md:w-1/2 h-96">
            <img :src="heroImage" alt="Hero Image" class="absolute w-full h-full object-contain object-center md:object-left-bottom">
        </div>
      </div>
    </header>

    <section class="py-16 px-6">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
        <div class="lg:col-span-1 text-center lg:text-left">
          <h2 class="text-4xl font-bold" style="color: var(--c-very-dark-purple);">Best Selling Products</h2>
          <p class="mt-4 text-gray-600">Easiest way to healthy life by buying your favorite outfits.</p>
          <button class="mt-6 px-6 py-3 rounded-lg text-white font-semibold transition hover:opacity-80" style="background-color: var(--c-dark-purple);">
            See more →
          </button>
        </div>
        <div class="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProductCard
            v-for="item in bestSellingProducts"
            :key="item.id"
            :product="item"
          />
        </div>
      </div>
    </section>
  </div>
</template>