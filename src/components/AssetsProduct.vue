<template>
  <div class="w-full bg-transparent rounded-lg overflow-hidden transition">
    <div class="w-full aspect-[4/5] rounded-xl overflow-hidden">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="p-4 text-center flex flex-col items-start gap-1">
      <h2 class="text-md font-bold text-left break-words" style="color: var(--c-very-dark-purple); font-weight: 700 !important">
        {{ product.name }}
        </h2>

      <p class="text-md" style="color: var(--c-light-purple);">
        IDR {{ product.price.toLocaleString() }}
      </p>

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