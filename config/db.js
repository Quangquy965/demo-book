const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Kết nối với MongoDB, lấy thông tin từ biến môi trường
    // await mongoose.connect(`mongodb://${process.env.DB_MONGO_HOST}:${process.env.DB_MONGO_PORT}/bags-ecommerce?authSource=admin`, {
    await mongoose.connect(`mongodb://${process.env.DB_MONGO_HOST}:${process.env.DB_MONGO_PORT}/bags-ecommerce?authSource=admin`, {
      // user: process.env.DB_MONGO_USERNAME,
      // pass: process.env.DB_MONGO_PASSWORD,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Thoát chương trình nếu kết nối thất bại
  }
};

module.exports = connectDB;
