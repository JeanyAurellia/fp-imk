<template>
  <div class="flex flex-wrap gap-3">
    <ProductCard
      v-for="item in products"
      :key="item.id"
      :product="item"
    />
  </div>
</template>

<script setup>
import products from '../data/product.js'
import ProductCard from '../components/AssetsProduct.vue'
</script>
