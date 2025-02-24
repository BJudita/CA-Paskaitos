import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Connection Error:", err));

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    imageUrl: String
});

const Product = mongoose.model("Product", productSchema);

// Routes
app.get("/products-list", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/products-list", async (req, res) => {
    console.log("New Product Data:", req.body);

    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.json(newProduct);
    } catch (err) {
        console.log("Error creating product:", err);
        res.status(500).json({ error: err.message });
    }
});

app.delete("/products-list/:_id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params._id);
        res.json({ message: "Product deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.get("/products-list/:_id", async (req, res) => {
    try {
        const product = await Product.findById(req.params._id);
        if (!product) {
            console.log(`Product not found for _id: ${req.params._id}`); // Log the error
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (err) {
        console.log(`Error fetching product with _id: ${req.params._id}`); // Log the error
        res.status(500).json({ error: err.message });
    }
});
app.put("/products-list/:_id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params._id, req.body, { new: true });
    
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));