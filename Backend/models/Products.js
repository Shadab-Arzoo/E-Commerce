const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
});

const Product = mongoose.model('Product', ProductSchema,'Products');

module.exports = Product;
