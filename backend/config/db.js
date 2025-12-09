import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = process.env.MONGO_URI || process.env.DB_URI;
  if (!uri) {
    throw new Error('MONGO_URI (or DB_URI) not set in environment');
  }

  try {
    await mongoose.connect(uri); 
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
};

export default connectDB;