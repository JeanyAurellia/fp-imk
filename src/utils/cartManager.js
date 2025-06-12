import { reactive, watch } from 'vue'

const cart = reactive({
  items: JSON.parse(localStorage.getItem('cart') || '[]'),

  addToCart(product) {
    const existing = cart.items.find((item) => item.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      cart.items.push({ ...product, quantity: 1 })
    }
  },

  removeFromCart(id) {
    cart.items = cart.items.filter(item => item.id !== id)
  },

  updateQuantity(id, qty) {
    const item = cart.items.find((item) => item.id === id)
    if (item) item.quantity = qty
  },

  get subtotal() {
    return cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },

  get totalItems() {
    return cart.items.reduce((sum, item) => sum + item.quantity, 0)
  }
})

// Simpan ke localStorage setiap perubahan
watch(() => cart.items, (newItems) => {
  localStorage.setItem('cart', JSON.stringify(newItems))
}, { deep: true })

export default cart
