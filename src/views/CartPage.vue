<template>
  <div class="cart-page">
    <Navbar />
    <h1>Your Cart</h1>

    <div v-if="cart.items.length > 0">
      <CartItem
        v-for="item in cart.items"
        :key="item.id"
        :product="item"
        @increase="increase(item.id)"
        @decrease="decrease(item.id)"
        @remove="remove(item.id)"
      />

      <div class="summary">
        <div class="summary-row">
          <span>Total Items:</span>
          <span>{{ cart.totalItems }}</span>
        </div>
        <div class="summary-row total">
          <span>Total Price:</span>
          <span>IDR {{ cart.subtotal.toLocaleString('id-ID') }}</span>
        </div>

        <button class="checkout-btn" @click="goToCheckout">
          Go to Checkout →
        </button>
      </div>
    </div>

    <div v-else class="empty-cart">
      <p>Keranjang kosong. Tambahkan produk untuk melanjutkan.</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Navbar from './Navbar.vue'
import CartItem from '@/components/CartItem.vue'
import cart from '@/utils/CartManager.js'

const router = useRouter()

const goToCheckout = () => {
  router.push('/checkout')
}

const increase = (id) => {
  const item = cart.items.find(p => p.id === id)
  if (item) cart.updateQuantity(id, item.quantity + 1)
}

const decrease = (id) => {
  const item = cart.items.find(p => p.id === id)
  if (item?.quantity > 1) cart.updateQuantity(id, item.quantity - 1)
}

const remove = (id) => {
  cart.removeFromCart(id)
}
</script>

<style scoped>
.cart-page {
  background: var(--color-background, #F4EEE0);
  color: var(--color-text, #333);
  padding: 40px 20px;
  min-height: 100vh;
}

h1 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
  color: var(--color-heading, #222);
}

.summary {
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid var(--color-border, #ccc);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.summary-row.total {
  font-weight: bold;
  font-size: 18px;
}

.checkout-btn {
  margin-top: 20px;
  width: 100%;
  max-width: 300px;
  background-color: var(--c-dark-purple);
  color: white;
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

.checkout-btn:hover {
  background-color: var(--c-very-dark-purple);
}

.empty-cart {
  text-align: center;
  color: #F4EEE0;
  margin-top: 40px;
}
</style>
