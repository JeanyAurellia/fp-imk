<script setup>
// Impor logo yang dibutuhkan oleh navbar
import logo from '../assets/gambar/logo-item.png'
</script>

<template>
  <nav class="p-6 text-gray-800">
    <div class="max-w-screen-xl mx-auto flex items-center justify-between">
      
      <div class="flex flex-col items-center">
        <img :src="logo" alt="Divine Logo" class="h-12 w-auto" />
      </div>
      
      <div class="flex items-center gap-x-30">
        
        <div class="hidden md:flex items-center space-x-30">
          <router-link to="/" class="font-semibold" style="color: var(--c-dark-purple);">Home</router-link>
          <router-link to="/collection" class="font-semibold" style="color: var(--c-dark-purple);">Collection</router-link>
        </div>

        <div class="flex items-center space-x-4">
          <div class="relative hidden sm:block w-80">
            <input type="text" placeholder="What are you looking for?" class="w-full px-4 py-2 rounded-md bg-white border-transparent focus:outline-none focus:border-purple-400" />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          <button class="p-2" style="color: var(--c-very-dark-purple);">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </button>
          <router-link to="/profile">
  <button class="p-2" style="color: var(--c-very-dark-purple);">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  </button>
</router-link>
        </div>
      </div>

    </div>
  </nav>
</template>