import { ref } from 'vue';
import products from '../data/product.js';
import heroImagePlants from '../assets/gambar/banner-img-removebg-preview.png';

export function useHomePage() {
  const bestSellingProducts = ref(products.slice(0, 3));
  const heroImage = ref(heroImagePlants);

  return {
    bestSellingProducts,
    heroImage,
  };
}