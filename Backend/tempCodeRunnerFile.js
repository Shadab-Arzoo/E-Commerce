const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/E-Commerce');
}
app.use(cors());
app.use(express.json());
app.use('/api/products', require('./models/ProductRoute'));
app.get('/', (req, res) => {
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})
app.listen(5000,()=>{ṇ
    console.log("User Hit The server at 5000");
})