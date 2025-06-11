// src/data/productData.js

export const products = [
  {
    id: '1',
    name: 'ODYSSEY WEAR THE WORLD T-SHIRT (BLACK)',
    material: '100% Cotton',
    price: 250000,
    availableSizes: ['S', 'M', 'L', 'XL'],
    stock: {
      S: 12,
      M: 8,
      L: 3,
      XL: 2,
    },
    images: [
      {
        thumb: '/images/Product2_1.jpg',
        main: '/images/Product2_1.jpg',
      },
      {
        thumb: '/images/Product2_2.jpg',
        main: '/images/Product2_2.jpg',
      },
      // {
      //   thumb: '/images/Product2_3.jpg',
      //   main: '/images/Product2_3.jpg',
      // },
    ],
  },
      {
    id: '2',
    name: '[PRE-ORDER] ODYSSEY AIRPORT JACKET (MIDNIGHT & IVORY)',
    material: '100% Cotton French Terry Fabric',
    price: 600000,
    availableSizes: ['S', 'M', 'L', 'XL'],
    stock: {
      S: 5,
      M: 0, 
      L: 10,
      XL: 2,
    },
    images: [
      {
        thumb: '/images/Product4_1.jpg',
        main: '/images/Product4_1.jpg',
      },
      {
        thumb: '/images/Product4_2.jpg',
        main: '/images/Product4_2.jpg',
      },
      {
        thumb: '/images/Product4_3.jpg',
        main: '/images/Product4_3.jpg',
      },
    ],
  },
        {
    id: '3',
    name: '[CHILLACATION HAWAII SHIRT',
    material: '100% Cotton French Terry Fabric',
    price: 450000,
    availableSizes: ['S', 'M', 'L', 'XL'],
    stock: {
      S: 2,
      M: 7, 
      L: 9,
      XL: 5,
    },
    images: [
      {
        thumb: '/images/Product5_1.jpg',
        main: '/images/Product5_1.jpg',
      },
      {
        thumb: '/images/Product5_2.jpg',
        main: '/images/Product5_2.jpg',
      },
      // {
      //   thumb: '/images/Product4_3.jpg',
      //   main: '/images/Product4_3.jpg',
      // },
    ],
  },
    {
    id: '01',
    name: '[PRE-ORDER] ODYSSEY AIRPORT SKIRT (CARAMEL CUSTARD)',
    material: '100% Cotton',
    price: 299000,
    availableSizes: ['S', 'M', 'L', 'XL'],
    stock: {
      S: 5,
      M: 0, // Example: M is out of stock for this product
      L: 10,
      XL: 2,
    },
    images: [
      {
        thumb: '/images/Product1_1.jpg',
        main: '/images/Product1_1.jpg',
      },
      {
        thumb: '/images/Product1_2.jpg',
        main: '/images/Product1_2.jpg',
      },
      {
        thumb: '/images/Product1_3.jpg',
        main: '/images/Product1_3.jpg',
      },
    ],
  },
  {
    id: '03',
    name: '[PRE-ORDER] ODYSSEY AIRPORT JACKET CROP (CARAMEL CUSTARD)',
    material: '100% Cotton French Terry Fabric',
    price: 380000,
    availableSizes: ['XS', 'S', 'M', 'L'],
    stock: {
      XS: 7,
      S: 4,
      M: 0, // Example: M is out of stock for this product
      L: 9,
    },
    images: [
      {
        thumb: '/images/Product3_1.jpg',
        main: '/images/Product3_1.jpg',
      },
      {
        thumb: '/images/Product3_2.jpg',
        main: '/images/Product3_2.jpg',
      },
      {
        thumb: '/images/Product3_3.jpg',
        main: '/images/Product3_3.jpg',
      },
    ],
  },
];