import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config({ path: '.env' });

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use('/api/auth', authRoutes);
// simple health route
app.get('/', (req, res) => res.send('API running'));

// start server after DB connected
const start = async () => {
  try {
    await connectDB(); // wait for mongoose connection
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

start();