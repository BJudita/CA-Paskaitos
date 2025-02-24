import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ProductForm.module.css";

function ProductEdit() {
    const { _id } = useParams();
    const [product, setProduct] = useState(null);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState(null); // Handle errors
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`http://localhost:5002/products-list/${_id}`);
                
                if (!res.ok) {
                    throw new Error(`Product not found (status: ${res.status})`);
                }
    
                const data = await res.json();
                setProduct(data);
                setTitle(data.title);
                setPrice(data.price);
                setImageUrl(data.imageUrl);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };
    
        fetchProduct();
    }, [_id]);

    const handleEdit = async (e) => {
        e.preventDefault();

        const updatedProduct = { title, price, imageUrl };

        try {
            const res = await fetch(`http://localhost:5002/products-list/${_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedProduct),
            });

            if (!res.ok) {
                throw new Error("Failed to update product");
            }

            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    if (error) {
        return <p style={{ color: "red" }}>Error: {error}</p>;
    }

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.formContainer}>
            <h1>Edit Product</h1>
            <form onSubmit={handleEdit}>
                <label htmlFor="title">Pavadinimas: </label>
                <input 
                    id="title"
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <br />

                <label htmlFor="price">Kaina: </label>
                <input 
                    id="price"
                    type="number" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                />
                <br />

                <label htmlFor="img">Paveikslėlis: </label>
                <input 
                    id="img"
                    type="text" 
                    value={imageUrl} 
                    onChange={(e) => setImageUrl(e.target.value)} 
                />
                <br />

                <button type="submit" className={styles.btnAdd}>Save Changes</button>
            </form>
        </div>
    );
}

export default ProductEdit;
