import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductForm.module.css";

function ProductForm() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newProduct = { title, price, imageUrl };
        try {
            const res = await fetch("http://localhost:5002/products-list", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });
    
            if (!res.ok) {
                throw new Error("Failed to add product");
            }
            navigate("/");
    
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className={styles.formContainer}>
            <h1>Pridėkite produktą</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Pavadinimas: </label>
                <input 
                id="title"
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
                <br /><label htmlFor="price">Kaina: </label>
                <input 
                id="price"
                    type="number" 
                    placeholder="Price (€)" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    required 
                />
                <br /><label htmlFor="img">Paveikslėlis: </label>
                <input 
                id="img"
                    type="text" 
                    placeholder="Image URL" 
                    value={imageUrl} 
                    onChange={(e) => setImageUrl(e.target.value)} 
                />
                <button type="submit" className={styles.btnAdd}>Add Product</button>
            </form>
        </div>
    );
}

export default ProductForm;