<template>
  <div class="flex flex-col min-h-screen" style="background-color: var(--c-cream);">
    <Navbar />

    <main class="flex-grow flex items-center justify-center py-8 px-4 md:px-8">
      <div class="w-full max-w-4xl" style="color: var(--c-dark-purple);">
        <h1 class="text-3xl font-bold mb-8">Edit Your Profile</h1>

        <div class="space-y-6">
          <!-- Profile Info -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label for="firstName" class="block text-sm font-semibold mb-2">First Name</label>
              <input type="text" id="firstName" v-model="firstName"
                class="w-full p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
            </div>
            <div>
              <label for="lastName" class="block text-sm font-semibold mb-2">Last Name</label>
              <input type="text" id="lastName" v-model="lastName"
                class="w-full p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
            </div>
            <div>
              <label for="email" class="block text-sm font-semibold mb-2">Email</label>
              <input type="email" id="email" v-model="email"
                class="w-full p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
            </div>
            <div>
              <label for="address" class="block text-sm font-semibold mb-2">Address</label>
              <input type="text" id="address" v-model="address"
                class="w-full p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
            </div>
          </div>

          <!-- Password Section -->
          <div>
            <h2 class="text-xl font-bold mb-4">Password Changes</h2>
            <div class="space-y-4">
              <div>
                <input type="password" placeholder="Current Password" v-model="currentPassword"
                  class="w-full p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
              </div>
              <div>
                <input type="password" placeholder="New Password" v-model="newPassword"
                  class="w-full p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
              </div>
              <div>
                <input type="password" placeholder="Confirm New Password" v-model="confirmNewPassword"
                  class="w-full p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
              </div>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex justify-end items-center gap-4 mt-8">
            <button class="py-2 px-4 rounded-md hover:bg-gray-200 transition-colors font-semibold"
              style="color: var(--c-dark-purple);">
              Cancel
            </button>
            <button @click="saveChanges"
              class="text-white py-3 px-6 rounded-md font-semibold transition hover:opacity-80"
              style="background-color: var(--c-dark-purple);">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from '../views/Navbar.vue'
import { ref, onMounted } from 'vue'

// State form
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const address = ref('')
const currentPassword = ref('')
const newPassword = ref('')
const confirmNewPassword = ref('')

// Simulasi data profil dari API / Local Storage
const userProfile = {
  firstName: 'IMK A',
  lastName: 'Kelompok 3',
  email: 'clara@email.com',
  address: 'Jl. IT ITS',
  // currentPassword tidak disimpan
}

// Auto-set data saat komponen dimount
onMounted(() => {
  firstName.value = userProfile.firstName
  lastName.value = userProfile.lastName
  email.value = userProfile.email
  address.value = userProfile.address
})

// Validasi dan Simpan
const saveChanges = () => {
  if (
    !firstName.value.trim() ||
    !lastName.value.trim() ||
    !email.value.trim() ||
    !address.value.trim() ||
    !currentPassword.value.trim() ||
    !newPassword.value.trim() ||
    !confirmNewPassword.value.trim()
  ) {
    alert('Semua field harus diisi sebelum menyimpan perubahan.')
    return
  }

  if (newPassword.value !== confirmNewPassword.value) {
    alert('Password baru dan konfirmasi tidak cocok.')
    return
  }

  // Simulasi simpan ke backend
  console.log('Data disimpan:', {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    address: address.value,
    newPassword: newPassword.value
  })

  alert('Perubahan profil berhasil disimpan!')
}
</script>
