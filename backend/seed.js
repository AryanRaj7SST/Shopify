const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/product.model");

const products = [
  // Electronics
  { name: "Noise Cancelling Headphones", description: "Wireless over-ear headphones with active noise cancellation.", price: 4999, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", stock: 25 },
  { name: "Mechanical Keyboard", description: "RGB mechanical keyboard with blue switches.", price: 2999, category: "Electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500", stock: 10 },
  { name: "Wireless Mouse", description: "Ergonomic wireless mouse with silent clicks.", price: 799, category: "Electronics", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500", stock: 40 },
  { name: "Smart Watch", description: "Fitness tracking smartwatch with heart-rate monitor.", price: 6499, category: "Electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", stock: 0 },
  { name: "Portable Bluetooth Speaker", description: "Compact speaker with 12-hour battery life.", price: 1999, category: "Electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500", stock: 18 },

  // Fashion
  { name: "Running Shoes", description: "Lightweight breathable running shoes.", price: 3499, category: "Fashion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", stock: 15 },
  { name: "Denim Jacket", description: "Classic fit denim jacket.", price: 2499, category: "Fashion", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500", stock: 8 },
  { name: "Leather Wallet", description: "Slim genuine leather wallet with card slots.", price: 899, category: "Fashion", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500", stock: 22 },
  { name: "Sunglasses", description: "UV-protected polarized sunglasses.", price: 1299, category: "Fashion", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500", stock: 30 },

  // Books
  { name: "Clean Code", description: "A handbook of agile software craftsmanship.", price: 899, category: "Books", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500", stock: 20 },
  { name: "Atomic Habits", description: "An easy and proven way to build good habits.", price: 499, category: "Books", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500", stock: 35 },
  { name: "Sapiens", description: "A brief history of humankind.", price: 599, category: "Books", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500", stock: 12 },

  // Home
  { name: "Ceramic Mug Set", description: "Set of 4 handcrafted ceramic mugs.", price: 799, category: "Home", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500", stock: 30 },
  { name: "Scented Candle", description: "Soy wax candle with a lavender fragrance.", price: 449, category: "Home", image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8a1?w=500", stock: 50 },
  { name: "Table Lamp", description: "Minimalist wooden-base table lamp.", price: 1599, category: "Home", image: "https://images.unsplash.com/photo-1543198126-b7cd7fd0f7c3?w=500", stock: 14 },
  { name: "Cotton Bedsheet Set", description: "100% cotton bedsheet with two pillow covers.", price: 1199, category: "Home", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500", stock: 20 },
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log(`Seeded ${products.length} products`);
    process.exit(0);
  })
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  });