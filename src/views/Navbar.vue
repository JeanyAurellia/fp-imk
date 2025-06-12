<script setup>
// Impor logo yang dibutuhkan oleh navbar
import logo from '../assets/gambar/logo-item.png'
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">

      <div class="logo-container">
        <img :src="logo" alt="Divine Logo" class="logo" />
      </div>

      <div class="nav-content">
        <div class="nav-links">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/collection" class="nav-link">Collection</router-link>
        </div>

        <div class="nav-actions">
          <div class="search-container">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              class="search-input"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="search-icon">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          <!-- Tombol Keranjang -->
          <router-link to="/cart" class="action-button" title="Lihat Keranjang">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </router-link>

          <!-- Tombol Profile -->
          <router-link to="/profile">
            <button class="p-2" style="color: var(--c-very-dark-purple);">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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

<style scoped>
.navbar {
  padding: 1.5rem;
  color: #374151;
}

.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  height: 4rem;
  width: auto;
}

.nav-content {
  display: flex;
  align-items: center;
  gap: 7.5rem;
}

.nav-links {
  display: none;
  align-items: center;
  gap: 7.5rem;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
}

.nav-link {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--c-dark-purple);
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.nav-link:hover {
  transform: translateY(-2px);
  color: var(--c-very-dark-purple);
  background-color: rgba(168, 85, 247, 0.1);
  box-shadow: 0 4px 12px rgba(168, 85, 247, 0.2);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--c-dark-purple), var(--c-very-dark-purple));
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-container {
  position: relative;
  display: none;
  width: 20rem;
}

@media (min-width: 640px) {
  .search-container {
    display: block;
  }
}

.search-input {
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: white;
  border: 1px solid transparent;
  outline: none;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-input:focus {
  border-color: #a855f7;
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(168, 85, 247, 0.2);
}

.search-input:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.search-input::placeholder {
  color: #9ca3af;
}

.search-icon {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  height: 1.25rem;
  width: 1.25rem;
  color: #6b7280;
  transition: all 0.3s ease;
}

.search-container:hover .search-icon {
  color: #a855f7;
  transform: translateY(-50%) scale(1.1);
}

.action-button {
  padding: 0.5rem;
  color: var(--c-very-dark-purple);
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.action-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%);
  transition: all 0.4s ease;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.action-button:hover {
  background-color: rgba(168, 85, 247, 0.1);
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 4px 12px rgba(168, 85, 247, 0.2);
}

.action-button:hover::before {
  width: 100px;
  height: 100px;
}

.action-button:active {
  transform: translateY(0) scale(0.95);
}
</style>
