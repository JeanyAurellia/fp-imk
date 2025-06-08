<template>
  <div class="w-40 bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
    <!-- Gambar Persegi -->
    <div class="w-full aspect-square">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Detail Produk -->
    <div class="p-2 text-center flex flex-col items-center gap-1" style="background-color: var(--c-very-dark-purple);">
      <!-- Nama Produk -->
        <h2 class="text-purple-300 text-xs font-bold font-sans break-words text-center" style="font-weight: 700 !important">
        {{ product.name }}
        </h2>

      <!-- Harga Produk -->
      <p class="text-white text-xs">
        Rp {{ product.price.toLocaleString() }}
      </p>

      <!-- Status Stok -->
        <template v-if="!product.inStock">
            <p class="text-gray-300 text-xs flex items-center justify-center gap-1">
            Out of Stock
            </p>

        </template>
        <template v-if="product.inStock">
        <p class="text-purple-300 text-xs flex items-center justify-center gap-1">
            In Stock
        </p>
        </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
