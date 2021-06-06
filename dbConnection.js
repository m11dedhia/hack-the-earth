const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URI,{ useNewUrlParser:true, useUnifiedTopology:true });
    if (db) {
      console.log('Database connected');
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;