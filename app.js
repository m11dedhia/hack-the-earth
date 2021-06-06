const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const connectDB = require('./dbConnection');

const bodyParser=require('body-parser')
app.use(express.json())

const users = require('./routes/users');
app.use('/api/v1/users/', users);

connectDB();


app.listen(3000, (err) => {
  console.log('Server listening on port 3000');
  if(err) {
    console.log(err);
  }
});
