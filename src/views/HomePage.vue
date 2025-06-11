<script setup>
import ProductCard from '../components/AssetsProduct.vue'
import Navbar from '../views/Navbar.vue'
import { useHomePage } from '../script/homePage.js';

const { bestSellingProducts, heroImage } = useHomePage();
</script>

<template>
  <div class="w-full" style="background-color: var(--c-cream);">
    <Navbar />

    <main class="w-full flex items-center justify-center px-6 py-8">
      <div class="relative w-full max-w-6xl rounded-3xl overflow-hidden text-white shadow-xl" style="background-color: var(--c-light-purple);">
        <div class="flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
          <div class="z-10 text-center md:text-left">
            <h1 class="text-5xl md:text-7xl font-bold leading-tight">Buy your<br>dream outfits</h1>
            <p class="mt-4 text-lg opacity-80">New Collection 2025</p>
          </div>
          <div class="relative mt-8 md:mt-0 w-full md:w-1/2 h-96">
            <img :src="heroImage" alt="Hero Image" class="absolute w-full h-full object-contain object-center md:object-right-bottom">
          </div>
        </div>
      </div>
    </main>

    <section class="py-16 px-6 lg:px-12">
      <div class="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div class="lg:w-1/4 text-center lg:text-left">
          <h2 class="text-4xl font-bold" style="color: var(--c-very-dark-purple);">
            Best Selling Products
          </h2>
          <p class="mb-10 text-gray-600">
            Easiest way to a happy life by buying your favorite outfits.
          </p>
          <button class="mb-10 px-6 py-3 rounded-lg text-white font-semibold transition hover:opacity-80" style="background-color: var(--c-dark-purple);">
            See more →
          </button>
        </div>
        <div class="lg:w-3/4 w-full">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ProductCard v-for="item in bestSellingProducts" :key="item.id" :product="item" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>