<script setup>
import products from '../data/product.js'
import ProductCard from '../components/AssetsProduct.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../views/Navbar.vue'

import heroImagePlants from '../assets/gambar/banner-img-removebg-preview.png';

const bestSellingProducts = ref(products.slice(0, 3));
const heroImage = ref(heroImagePlants);
const router = useRouter();

// Function to handle product click
const goToProduct = (productId) => {
  router.push(`/product/${productId}`);
};
</script>

<template>
  <div class="homepage-container">
    <Navbar />

    <main class="hero-section">
      <div class="hero-card">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">Buy your<br>dream outfits</h1>
            <p class="hero-subtitle">New Collection 2025</p>
          </div>

          <div class="hero-image-wrapper">
            <img :src="heroImage" alt="Hero Image" class="hero-image">
          </div>
        </div>
      </div>
    </main>

    <section class="best-selling-section">
      <div class="best-selling-container">
        <div class="best-selling-header">
          <h2 class="best-selling-title">
            Best Selling Products
          </h2>
          <p class="best-selling-description">
            Easiest way to a happy life by buying your favorite outfits.
          </p>
          <button class="see-more-btn">
            See more →
          </button>
        </div>
        
        <div class="products-wrapper">
          <div class="products-grid">
            <div 
              v-for="item in bestSellingProducts"
              :key="item.id"
              class="product-item-wrapper"
              @click="goToProduct(item.id)"
            >
              <ProductCard :product="item" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Main Container */
.homepage-container {
  width: 100%;
  background-color: var(--c-cream);
}

/* Hero Section */
.hero-section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.hero-card {
  position: relative;
  width: 100%;
  max-width: 72rem;
  border-radius: 1.5rem;
  overflow: hidden;
  color: white;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background-color: var(--c-light-purple);
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
}

.hero-text {
  z-index: 10;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.1;
}

.hero-subtitle {
  margin-top: 1rem;
  font-size: 1.125rem;
  opacity: 0.8;
}

.hero-image-wrapper {
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 24rem;
}

.hero-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

/* Best Selling Section */
.best-selling-section {
  padding: 4rem 1.5rem;
  margin: 2rem 0;
}

.best-selling-container {
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}

.best-selling-header {
  text-align: center;
  padding: 0 1rem;
}

.best-selling-title {
  font-size: 2.25rem;
  font-weight: bold;
  color: var(--c-very-dark-purple);
  margin-bottom: 1rem;
}

.best-selling-description {
  margin-bottom: 2.5rem;
  color: #6b7280;
  font-size: 1.1rem;
  line-height: 1.6;
}

.see-more-btn {
  margin-bottom: 2.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: 600;
  transition: opacity 0.3s ease;
  background-color: var(--c-dark-purple);
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.see-more-btn:hover {
  opacity: 0.8;
}

/* Products Section */
.products-wrapper {
  width: 100%;
  padding: 0 1rem;
}

.products-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 100%;
}

.product-item-wrapper {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  border-radius: 1rem;
  overflow: hidden;
  border: 2px solid var(--c-light-purple);
}

/* Product Image Ratio 1:1 - Preserve existing styles */
.product-item-wrapper :deep(img) {
  aspect-ratio: 1 / 1 !important;
  object-fit: cover !important;
}

.product-item-wrapper :deep(.product-image) {
  aspect-ratio: 1 / 1 !important;
  object-fit: cover !important;
}

.product-item-wrapper :deep(.product-img) {
  aspect-ratio: 1 / 1 !important;
  object-fit: cover !important;
}

.product-item-wrapper :deep(.card-img) {
  aspect-ratio: 1 / 1 !important;
  object-fit: cover !important;
}

.product-item-wrapper :deep(.image-container) {
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.product-item-wrapper:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-color: var(--c-dark-purple);
}

/* Responsive Design */
@media (min-width: 640px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .hero-content {
    flex-direction: row;
    padding: 4rem;
  }
  
  .hero-text {
    text-align: left;
  }
  
  .hero-title {
    font-size: 4.5rem;
  }
  
  .hero-image-wrapper {
    margin-top: 0;
    width: 50%;
  }
  
  .hero-image {
    object-position: right bottom;
  }
  
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .best-selling-section {
    padding: 4rem 3rem;
  }
  
  .best-selling-container {
    flex-direction: row;
    align-items: flex-start;
  }
  
  .best-selling-header {
    width: 25%;
    text-align: left;
    padding: 0;
  }
  
  .products-wrapper {
    width: 75%;
    padding: 0;
  }
}
</style>