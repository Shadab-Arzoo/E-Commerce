const mongoose = require('mongoose');
const axios = require('axios');
const Product = require('./models/Products'); // adjust path if different

const MONGO_URI = 'mongodb://127.0.0.1:27017/E-Commerce';

async function seedDatabase() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing products (optional)
    await Product.deleteMany({});

    // Fetch from Fake Store API
    const { data } = await axios.get('https://fakestoreapi.com/products');

    // Insert into MongoDB
    await Product.insertMany(data);

    console.log('Database seeded successfully!');
    process.exit(); // Exit the script
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seedDatabase();
