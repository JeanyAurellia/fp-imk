<script setup>
import Navbar from './Navbar.vue';
import { useProfile } from '../script/profile.js';

const {
  firstName,
  lastName,
  email,
  address,
  currentPassword,
  newPassword,
  confirmNewPassword,
  cancelChanges,
  saveChanges,
  signOut,
} = useProfile();
</script>

<template>
  <div class="flex flex-col min-h-screen" style="background-color: var(--c-cream);">
    <Navbar />

    <main class="flex-grow flex items-center justify-center py-8 px-4 md:px-8">
      <div class="w-full max-w-4xl" style="color: var(--c-dark-purple);">
        <h1 class="text-3xl font-bold mb-8">Edit Your Profile</h1>

        <div class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label for="firstName" class="block text-sm font-semibold mb-2">First Name</label>
              <input type="text" id="firstName" v-model="firstName" class="w-full p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
            </div>
            <div>
              <label for="lastName" class="block text-sm font-semibold mb-2">Last Name</label>
              <input type="text" id="lastName" v-model="lastName" class="w-full p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
            </div>
            <div>
              <label for="email" class="block text-sm font-semibold mb-2">Email</label>
              <input type="email" id="email" v-model="email" class="w-full p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
            </div>
            <div>
              <label for="address" class="block text-sm font-semibold mb-2">Address</label>
              <input type="text" id="address" v-model="address" class="w-full p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
            </div>
          </div>

          <div>
            <h2 class="text-xl font-bold mb-4">Password Changes</h2>
            <div class="grid grid-cols-1 gap-y-6">
              <div>
                <label for="currentPassword" class="block text-sm font-semibold mb-2">Current Password</label>
                <input type="password" id="currentPassword" v-model="currentPassword" class="w-full p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
              </div>
              <div>
                <label for="newPassword" class="block text-sm font-semibold mb-2">New Password</label>
                <input type="password" id="newPassword" v-model="newPassword" class="w-full p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
              </div>
              <div>
                <label for="confirmNewPassword" class="block text-sm font-semibold mb-2">Confirm New Password</label>
                <input type="password" id="confirmNewPassword" v-model="confirmNewPassword" class="w-full p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
              </div>
            </div>
          </div>

          <div class="flex justify-between items-center pt-4">
            <button @click="signOut" class="text-white py-3 px-6 rounded-md font-semibold transition hover:opacity-80" style="background-color: #A34343;">
              Sign Out
            </button>

            <div class="flex items-center gap-4">
              <button @click="cancelChanges" class="py-2 px-4 rounded-md hover:bg-gray-200 transition-colors font-semibold" style="color: var(--c-dark-purple);">
                Cancel
              </button>
              <button @click="saveChanges" class="text-white py-3 px-6 rounded-md font-semibold transition hover:opacity-80" style="background-color: var(--c-dark-purple);">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>