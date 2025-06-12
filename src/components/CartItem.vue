<template>
  <div class="cart-item">
    <img :src="product.image" alt="Product Image" class="product-image" />

    <div class="details">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-size">Size: {{ product.size }}</p>
      <p class="product-price">IDR {{ product.price.toLocaleString('id-ID') }}</p>

      <div class="quantity-control">
        <button
          @click="$emit('decrease')"
          :disabled="product.quantity <= 1"
          title="Kurangi jumlah"
        >
          −
        </button>
        <span>{{ product.quantity }}</span>
        <button
          @click="$emit('increase')"
          title="Tambah jumlah"
        >
          +
        </button>
      </div>
    </div>

    <button class="remove-btn" @click="$emit('remove')" title="Hapus dari keranjang">
      🗑️
    </button>
  </div>
</template>

<script setup>
defineProps(['product'])
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-card, #F4EEE0);
  padding: 16px;
  border: 1px solid var(--color-border, #ccc);
  border-radius: 10px;
  margin-bottom: 16px;
  gap: 16px;
  flex-wrap: wrap;
}

.product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 200px;
}

.product-name {
  font-weight: bold;
  font-size: 16px;
  color: var(--color-heading, #333);
}

.product-size {
  font-size: 14px;
  color: var(--color-text, #666);
}

.product-price {
  font-weight: bold;
  margin-top: 4px;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.quantity-control button {
  background: var(--c-light-purple);
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;
}

.quantity-control button:disabled {
  background: #bbb;
  cursor: not-allowed;
}

.remove-btn {
  background: none;
  border: none;
  font-size: 20px;
  color: rgb(255, 0, 0);
  cursor: pointer;
}
</style>
