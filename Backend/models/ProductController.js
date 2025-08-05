const Product = require('./Products');

// Get all products from MongoDB
const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

module.exports = { getAllProducts };
