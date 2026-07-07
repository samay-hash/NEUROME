import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/neurome';
    
    await mongoose.connect(mongoURI);
    
    console.log(`[MongoDB] Database connected successfully: ${mongoURI}`);
  } catch (error) {
    console.error(`[MongoDB] Connection error:`, error);
    process.exit(1);
  }
};
