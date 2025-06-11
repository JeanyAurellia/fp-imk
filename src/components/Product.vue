<template>
  <div class="product-page">
    <!-- Product Header -->
    <div class="product-header">
      <h1>[PRE-ORDER] ODYSSEY AIRPORT SKIRT (CARAMEL CUSTARD)</h1>
      <img src="/images/Product1.jpg" alt="`Product view ${index + 1}`" />
    </div>

    <!-- Product Content -->
    <div class="product-container">
      <!-- Left Side - Product Images -->
      <div class="product-images-section">
        <!-- Thumbnail Images -->
        <div class="thumbnail-gallery">
          <div 
            v-for="(image, index) in productImages" 
            :key="index"
            class="thumbnail-item"
            :class="{ active: selectedImageIndex === index }"
            @click="selectImage(index)"
          >
            <img :src="image.thumb" :alt="`Product view ${index + 1}`" />
            <div class="brand-badge">
              <span class="brand-text">Divine</span>
            </div>
          </div>
        </div>

        <!-- Main Product Image -->
        <div class="main-product-image">
          <img :src="selectedImage.main" alt="Odyssey Airport Skirt Main View" />
          <div class="main-brand-badge">
            <span class="main-brand-text">Divine</span>
            <span class="main-brand-subtext">EST</span>
          </div>
        </div>
      </div>

      <!-- Right Side - Product Details -->
      <div class="product-details-section">
        <div class="product-info">
          <h2 class="product-title">[PRE-ORDER] ODYSSEY AIRPORT SKIRT (CARAMEL CUSTARD)</h2>
          
          <p class="product-material">Material: 100% Cotton</p>
          
          <div class="product-price">
            <span class="price-currency">Rp</span>
            <span class="price-amount">299.000,00</span>
          </div>

          <!-- Size Selection -->
          <div class="form-group">
            <label class="form-label">Size:</label>
            <div class="size-selector">
              <button 
                v-for="size in availableSizes" 
                :key="size"
                class="size-button"
                :class="{ active: selectedSize === size }"
                @click="selectSize(size)"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Quantity Selection -->
          <div class="form-group">
            <label class="form-label">Jumlah:</label>
            <div class="quantity-selector">
              <button 
                class="quantity-btn decrease"
                @click="decreaseQuantity"
                :disabled="quantity <= 1"
              >
                -
              </button>
              <input 
                type="number" 
                v-model.number="quantity" 
                min="1" 
                class="quantity-input"
                @input="validateQuantity"
              />
              <button 
                class="quantity-btn increase"
                @click="increaseQuantity"
              >
                +
              </button>
            </div>
          </div>

          <!-- Stock Status -->
          <div class="form-group">
            <label class="form-label">Stock:</label>
            <span class="stock-status out-of-stock">Out of Stock</span>
          </div>

          <!-- Action Buttons -->
          <div class="action-buttons">
            <button class="btn-add-to-cart" :disabled="!inStock">
              {{ inStock ? 'Add to Cart' : 'Out of Stock' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      selectedImageIndex: 0,
      selectedSize: 'S',
      quantity: 1,
      inStock: false,
      availableSizes: ['S', 'M', 'L', 'XL'],
      productImages: []
    }
  },
  
  created() {
    // Load images dinamically
    this.loadImages();
  },
  computed: {
    selectedImage() {
      return this.productImages[this.selectedImageIndex];
    }
  },
  methods: {
    loadImages() {
      try {
        // Method 1: Menggunakan dynamic import
        // const imageUrl = require('10ssets/gambar/Product1.jpg');
        this.productImages = [
          {
            thumb: imageUrl,
            main: imageUrl
          },
          {
            thumb: imageUrl,
            main: imageUrl
          },
          {
            thumb: imageUrl,
            main: imageUrl
          }
        ];
      } catch (error) {
        console.error('Error loading images:', error);
        // Fallback: jika require gagal, coba dari public folder
        this.productImages = [
          {
            thumb: '/images/Product1.jpg',
            main: '/images/Product1.jpg'
          },
          {
            thumb: '/assets/gambar/Product1.jpg',
            main: '/assets/gambar/Product1.jpg'
          },
          {
            thumb: '/assets/gambar/Product1.jpg',
            main: '/assets/gambar/Product1.jpg'
          }
        ];
      }
    },
    selectImage(index) {
      this.selectedImageIndex = index;
    },
    selectSize(size) {
      this.selectedSize = size;
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    validateQuantity(event) {
      const value = parseInt(event.target.value);
      if (value < 1 || isNaN(value)) {
        this.quantity = 1;
      }
    }
  }
}
</script>

<style scoped>
.product-page {
  background-color: #f8f8f8;
  min-height: 100vh;
}

/* Product Header */
.product-header {
  background-color: #6b5b73;
  color: white;
  padding: 20px 0;
  text-align: center;
}

.product-header h1 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Product Container */
.product-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  display: flex;
  gap: 40px;
  background-color: white;
  border-radius: 0 0 10px 10px;
}

/* Left Side - Product Images */
.product-images-section {
  flex: 1;
  display: flex;
  gap: 20px;
}

.thumbnail-gallery {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 120px;
}

.thumbnail-item {
  position: relative;
  width: 120px;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 0.3s ease;
  background: linear-gradient(45deg, #d4a574, #b8956d);
}

.thumbnail-item:hover {
  border-color: #6b5b73;
  transform: translateY(-2px);
}

.thumbnail-item.active {
  border-color: #6b5b73;
  box-shadow: 0 4px 12px rgba(107, 91, 115, 0.3);
}

.thumbnail-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.brand-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 4px 8px;
  border-radius: 6px;
  backdrop-filter: blur(5px);
}

.brand-text {
  font-size: 10px;
  font-weight: 600;
  color: #6b5b73;
}

.main-product-image {
  flex: 1;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  background: linear-gradient(45deg, #d4a574, #b8956d);
  height: 500px;
}

.main-product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-brand-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 12px 16px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  text-align: center;
}

.main-brand-text {
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: #6b5b73;
  line-height: 1;
}

.main-brand-subtext {
  display: block;
  font-size: 10px;
  font-weight: 400;
  color: #6b5b73;
  opacity: 0.7;
  margin-top: 2px;
}

/* Right Side - Product Details */
.product-details-section {
  flex: 1;
  padding: 0 20px;
}

.product-info {
  max-width: 500px;
}

.product-title {
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin: 0 0 15px 0;
  line-height: 1.3;
}

.product-material {
  color: #666;
  font-size: 14px;
  margin-bottom: 25px;
}

.product-price {
  font-size: 36px;
  font-weight: 800;
  color: #333;
  margin-bottom: 35px;
}

.price-currency {
  font-size: 24px;
  margin-right: 2px;
}

.form-group {
  margin-bottom: 25px;
}

.form-label {
  display: block;
  font-weight: 600;
  font-size: 16px;
  color: #333;
  margin-bottom: 12px;
}

/* Size Selector */
.size-selector {
  display: flex;
  gap: 12px;
}

.size-button {
  width: 50px;
  height: 50px;
  border: 2px solid #e0e0e0;
  background-color: white;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}

.size-button:hover {
  border-color: #6b5b73;
  color: #6b5b73;
}

.size-button.active {
  background-color: #6b5b73;
  border-color: #6b5b73;
  color: white;
}

/* Quantity Selector */
.quantity-selector {
  display: flex;
  align-items: center;
  gap: 0;
  width: fit-content;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.quantity-btn {
  width: 45px;
  height: 45px;
  border: none;
  background-color: white;
  font-size: 20px;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity-btn:hover:not(:disabled) {
  background-color: #6b5b73;
  color: white;
}

.quantity-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.quantity-input {
  width: 60px;
  height: 45px;
  border: none;
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  background-color: white;
}

.quantity-input:focus {
  outline: none;
}

/* Stock Status */
.stock-status {
  font-weight: 600;
  font-size: 16px;
}

.out-of-stock {
  color: #e74c3c;
}

/* Action Buttons */
.action-buttons {
  margin-top: 35px;
}

.btn-add-to-cart {
  width: 100%;
  max-width: 300px;
  padding: 16px 24px;
  background-color: #6b5b73;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-add-to-cart:hover:not(:disabled) {
  background-color: #5a4a5f;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(107, 91, 115, 0.3);
}

.btn-add-to-cart:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .product-container {
    flex-direction: column;
    padding: 20px;
    gap: 30px;
  }
  
  .product-images-section {
    flex-direction: column;
  }
  
  .thumbnail-gallery {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    order: 2;
  }
  
  .main-product-image {
    order: 1;
    height: 400px;
  }
  
  .thumbnail-item {
    width: 80px;
    height: 100px;
  }
  
  .product-title {
    font-size: 22px;
  }
  
  .product-price {
    font-size: 28px;
  }
  
  .product-header h1 {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .main-product-image {
    height: 350px;
  }
  
  .thumbnail-item {
    width: 70px;
    height: 90px;
  }
  
  .size-selector {
    flex-wrap: wrap;
  }
  
  .btn-add-to-cart {
    max-width: 100%;
  }
}
</style>