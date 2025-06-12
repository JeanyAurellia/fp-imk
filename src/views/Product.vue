<template>
  <div class="product-page">
    <Navbar />

    <div class="product-header">
      <h1>{{ product.name }}</h1>
    </div>

    <div class="product-container">
      <div class="product-images-section">
        <div class="thumbnail-gallery">
          <div
            v-for="(image, index) in product.images"
            :key="index"
            class="thumbnail-item"
            :class="{ active: selectedImageIndex === index }"
            @click="selectImage(index)"
          >
            <img :src="image.thumb" :alt="`Product view ${index + 1}`" />
          </div>
        </div>

        <div class="main-product-image">
          <img :src="selectedImage.main" :alt="product.name" />
        </div>
      </div>

      <div class="product-details-section">
        <div class="product-info">
          <h2 class="product-title">{{ product.name }}</h2>
          <p class="product-material">Material: {{ product.material }}</p>

          <div class="product-price">
            <span class="price-currency">Rp</span>
            <span class="price-amount">{{ formattedPrice }}</span>
          </div>

          <div class="form-group form-group-horizontal">
            <label class="form-label">Size:</label>
            <div class="size-selector">
              <button
                v-for="size in product.availableSizes"
                :key="size"
                class="size-button"
                :class="{ active: selectedSize === size }"
                @click="selectSize(size)"
                :disabled="!isSizeAvailable(size)"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <div class="form-group form-group-horizontal">
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
                :max="maxQuantity"
                class="quantity-input"
                @input="validateQuantity"
              />
              <button
                class="quantity-btn increase"
                @click="increaseQuantity"
                :disabled="quantity >= maxQuantity"
              >
                +
              </button>
            </div>
          </div>

          <div class="form-group form-group-horizontal">
            <label class="form-label">Stock:</label>
            <span :class="stockStatusClass">{{ stockStatusText }}</span>
          </div>

          <div class="action-buttons">
            <button
              class="btn-add-to-cart"
              :disabled="!inStock"
              @click="addToCart"
            >
              {{ inStock ? 'Add to Cart' : 'Out of Stock' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import { products } from '../data/productData'
import cart from '@/utils/CartManager.js'

export default {
  name: 'Product',
  components: {
    Navbar,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      product: null,
      selectedImageIndex: 0,
      selectedSize: '',
      quantity: 1,
    }
  },
  created() {
    this.loadProductData()
  },
  watch: {
    '$route.params.id': 'loadProductData',
  },
  computed: {
    selectedImage() {
      return this.product && this.product.images[this.selectedImageIndex]
        ? this.product.images[this.selectedImageIndex]
        : { thumb: '', main: '' }
    },
    formattedPrice() {
      return this.product ? this.product.price.toLocaleString('id-ID') : '0'
    },
    currentStock() {
      return this.product && this.product.stock[this.selectedSize] !== undefined
        ? this.product.stock[this.selectedSize]
        : 0
    },
    inStock() {
      return this.currentStock > 0
    },
    stockStatusText() {
      return this.inStock ? `In Stock (${this.currentStock})` : 'Out of Stock'
    },
    stockStatusClass() {
      return {
        'in-stock': this.inStock,
        'out-of-stock': !this.inStock,
      }
    },
    maxQuantity() {
      return this.currentStock
    },
  },
  methods: {
    loadProductData() {
      const foundProduct = products.find(p => p.id === this.id)

      if (foundProduct) {
        this.product = foundProduct

        if (this.product.availableSizes.length > 0) {
          this.selectedSize = this.product.availableSizes.find(size => this.isSizeAvailable(size)) || ''
        }

        this.selectedImageIndex = 0
        this.quantity = 1
      } else {
        console.error('Product not found for ID:', this.id)
      }
    },
    selectImage(index) {
      this.selectedImageIndex = index
    },
    selectSize(size) {
      this.selectedSize = size
    },
    isSizeAvailable(size) {
      return this.product && this.product.stock[size] > 0
    },
    increaseQuantity() {
      if (this.quantity < this.maxQuantity) {
        this.quantity++
      }
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    validateQuantity(event) {
      let value = parseInt(event.target.value)
      if (isNaN(value) || value < 1) {
        this.quantity = 1
      } else if (value > this.maxQuantity) {
        this.quantity = this.maxQuantity
      } else {
        this.quantity = value
      }
    },
    addToCart() {
      if (!this.inStock || !this.selectedSize || !this.product) return

      const selectedProduct = {
        id: `${this.product.id}-${this.selectedSize}`, // Unik berdasarkan ID + size
        name: this.product.name,
        price: this.product.price,
        image: this.product.images[0].main,
        size: this.selectedSize,
        quantity: this.quantity,
      }

      cart.addToCart(selectedProduct)
      alert('Produk ditambahkan ke keranjang!')
    },
  },
}
</script>

<style scoped>
.product-page {
  background-color: #F4EEE0;
  min-height: 100vh;
}

/* Product Header */
.product-header {
  background-color: #6b5b73;
  color: white;
  padding: 20px 0;
  text-align: center;
  width: 100%;
}

.product-header h1 {
  margin: 0;
  font-size: 42px;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 0 40px;
}

/* Product Container */
.product-container {
  width: 100%;
  margin: 0;
  padding: 30px 40px;
  display: flex;
  gap: 40px;
  background-color: #F4EEE0;
  border-radius: 0;
  min-height: calc(100vh - 200px);
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
  gap: 26px;
  width: 160px;
}

.thumbnail-item {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 0.3s ease;
  /* background: linear-gradient(45deg, #d4a574, #b8956d); */
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
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(45deg, #d4a574, #b8956d);
  height: 500px;
  width: 500px;
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
  margin: 0 0 10px 0;
  line-height: 1.3;
}

.product-material {
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
}

.product-price {
  font-size: 36px;
  font-weight: 800;
  color: #333;
  margin-bottom: 15px;
}

.price-currency {
  font-size: 24px;
  margin-right: 2px;
}

.form-group {
  margin-bottom: 15px;
}

/* Horizontal alignment for form groups */
.form-group-horizontal {
  display: flex;
  align-items: center;
  gap: 20px;
}

.form-label {
  font-weight: 600;
  font-size: 16px;
  color: #333;
  margin-bottom: 0;
  min-width: 80px;
  flex-shrink: 0;
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
  background-color: #F4EEE0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}

.size-button:hover:not(:disabled) {
  border-color: #6b5b73;
  color: #6b5b73;
}

.size-button.active {
  background-color: #6b5b73;
  border-color: #6b5b73;
  color: #F4EEE0;
}

.size-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #F4EEE0;
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
  background-color: #F4EEE0;
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
  color: #F4EEE0;
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
  background-color: #F4EEE0;
}

.quantity-input:focus {
  outline: none;
}

/* Stock Status */
.stock-status {
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.out-of-stock {
  color: #e74c3c;
}

.in-stock {
  color: #27ae60;
}

/* Action Buttons */
.action-buttons {
  margin-top: 15px;
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
    min-height: auto;
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
    padding: 0 20px;
  }

  /* Mobile responsive for horizontal form groups */
  .form-group-horizontal {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .form-label {
    min-width: auto;
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