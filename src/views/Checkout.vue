<template>
  <div class="checkout-page">
    <Navbar />

    <!-- FORM DAN RINGKASAN ORDER -->
    <div class="checkout-container" v-if="!showInvoice">
      <div class="billing-form">
        <h2>Billing Details</h2>
        <form @submit.prevent="placeOrder">
          <div class="grid">
            <input v-model="billing.name" placeholder="Full Name" disabled />
            <input v-model="billing.email" placeholder="Email" disabled />
          </div>
          <input v-model="billing.address" placeholder="Street address" disabled />
          <input v-model="billing.city" placeholder="Town / City" required />
          <select v-model="billing.province" required>
            <option disabled value="">Pilih Provinsi</option>
            <option v-for="prov in provinces" :key="prov">{{ prov }}</option>
          </select>
          <input v-model="billing.zip" placeholder="ZIP Code" required />
          <input v-model="billing.phone" placeholder="Phone Number" required />
        </form>
      </div>

      <div class="order-summary">
        <h3>Order Summary</h3>
        <ul>
          <li v-for="item in cart.items" :key="item.id">
            <span>{{ item.name }} ({{ item.size }}) × {{ item.quantity }}</span>
            <span>Rp {{ (item.price * item.quantity).toLocaleString('id-ID') }}</span>
          </li>
        </ul>
        <div class="summary-total">
          <span>Total:</span>
          <strong>Rp {{ cart.subtotal.toLocaleString('id-ID') }}</strong>
        </div>

        <div class="payment-methods">
          <h3>Payment Method</h3>
          <label>
            <input type="radio" value="bank" v-model="paymentMethod" />
            Direct Bank Transfer
          </label>
          <label>
            <input type="radio" value="qris" v-model="paymentMethod" />
            QRIS
          </label>
          <label>
            <input type="radio" value="cod" v-model="paymentMethod" />
            Cash on Delivery
          </label>
        </div>

        <button class="place-order-btn" @click="placeOrder">Place Order</button>
      </div>
    </div>

    <!-- INVOICE -->
    <div v-else class="invoice">
      <h2>Invoice</h2>
      <p><strong>Nama:</strong> {{ billing.name }}</p>
      <p><strong>Email:</strong> {{ billing.email }}</p>
      <p><strong>Alamat:</strong> {{ billing.address }}, {{ billing.city }}, {{ billing.province }}, {{ billing.zip }}</p>
      <p><strong>Telepon:</strong> {{ billing.phone }}</p>
      <p><strong>Metode Pembayaran:</strong> {{ paymentMethodLabel }}</p>

      <h3>Produk</h3>
      <ul>
        <li v-for="item in orderedItems" :key="item.id">
          {{ item.name }} ({{ item.size }}) × {{ item.quantity }} = Rp {{ (item.price * item.quantity).toLocaleString('id-ID') }}
        </li>
      </ul>
      <p><strong>Total:</strong> Rp {{ orderedTotal.toLocaleString('id-ID') }}</p>

      <button class="place-order-btn" @click="router.push('/')">Selesai</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import cart from '@/utils/CartManager.js'
import Navbar from '@/views/Navbar.vue'

const userProfile = {
  name: 'IMK A Kelompok 3',
  email: 'kel3@email.com',
  address: 'Jl. IT ITS',
}

const billing = ref({
  name: userProfile.name,
  email: userProfile.email,
  address: userProfile.address,
  city: '',
  province: '',
  zip: '',
  phone: ''
})

const provinces = [
  'Aceh','Sumatera Utara','Sumatera Barat','Riau','Kepulauan Riau','Jambi',
  'Sumatera Selatan','Bangka Belitung','Bengkulu','Lampung',
  'DKI Jakarta','Jawa Barat','Banten','Jawa Tengah','DI Yogyakarta','Jawa Timur',
  'Bali','Nusa Tenggara Barat','Nusa Tenggara Timur',
  'Kalimantan Barat','Kalimantan Tengah','Kalimantan Selatan',
  'Kalimantan Timur','Kalimantan Utara','Sulawesi Utara','Sulawesi Tengah',
  'Sulawesi Selatan','Sulawesi Tenggara','Sulawesi Barat','Gorontalo',
  'Maluku','Maluku Utara','Papua','Papua Barat','Papua Selatan','Papua Tengah',
  'Papua Pegunungan','Papua Barat Daya'
]

const paymentMethod = ref('bank')
const showInvoice = ref(false)
const orderedItems = ref([])
const orderedTotal = ref(0)

const paymentMethodLabel = computed(() => {
  return paymentMethod.value === 'bank'
    ? 'Transfer Bank'
    : paymentMethod.value === 'qris'
    ? 'QRIS'
    : 'Cash on Delivery'
})

const router = useRouter()

const placeOrder = () => {
  const b = billing.value
  if (!b.city || !b.province || !b.zip || !b.phone) {
    alert('Mohon lengkapi data terlebih dahulu.')
    return
  }

  orderedItems.value = [...cart.items]
  orderedTotal.value = cart.subtotal
  showInvoice.value = true
  cart.items = []
}
</script>

<style scoped>
.checkout-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  background: #fdf6ec;
}
.billing-form {
  flex: 1;
  min-width: 300px;
}
.billing-form input,
.billing-form select {
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
}
.grid {
  display: flex;
  gap: 1rem;
}
.order-summary {
  flex: 1;
  min-width: 300px;
  background: #fdf6ec;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  border: 1px solid #eee;
}
.order-summary h3 {
  margin-bottom: 1rem;
}
.order-summary ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}
.order-summary li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.summary-total {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 16px;
  margin-top: 1rem;
}
.payment-methods {
  margin-top: 2rem;
}
.payment-methods label {
  display: block;
  margin-bottom: 0.5rem;
}
.place-order-btn {
  margin-top: 20px;
  width: 100%;
  background-color: var(--c-dark-purple);
  color: white;
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}
.place-order-btn:hover {
  background-color: var(--c-very-dark-purple);
}
.invoice {
  padding: 2rem;
  background: #F4EEE0;
  border-radius: 12px;
  margin: 2rem;
  max-width: 700px;
  margin-inline: auto;
}
.invoice h2 {
  margin-bottom: 1rem;
}
.invoice ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}
</style>