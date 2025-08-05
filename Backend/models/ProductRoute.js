const express = require('express');
const router = express.Router();
const { getAllProducts } = require('./ProductController');

router.route('/').get(getAllProducts);

module.exports = router;
