import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routes/product.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/myntra', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Route
app.use('/api/products', productRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
