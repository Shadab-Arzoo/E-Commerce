const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
app.get('/', (req, res) => {
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})

app.listen(5000,()=>{
    console.log("User Hit The server at 5000");
})