import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config(); 

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: 'React-Praktika12' })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const app = express();


app.use(cors());
app.use(express.json());

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Item = mongoose.model('Item', itemSchema);

// Routes
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    console.error('Error fetching item:', err);
    res.status(500).json({ error: 'Error fetching items' });
  }
});

app.post('/items', async (req, res) => {
  try {
    console.log('Received Data:', req.body);

    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }

    const newItem = new Item({ name, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error('Error adding item:', err);
    res.status(500).json({ error: 'Error adding item' });
  }
});

app.delete('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Item.findByIdAndDelete(id);
    res.status(200).json({ message: 'Item deleted' });
  } catch (err) {
    console.error('Error deleting item:', err);
    res.status(500).json({ error: 'Error deleting item' });
  }
});

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
