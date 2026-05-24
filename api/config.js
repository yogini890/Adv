const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://localhost:27017/mydb',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log(`MongoDB Connected: ${conn.connection.host} (db: ${conn.connection.name})`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
