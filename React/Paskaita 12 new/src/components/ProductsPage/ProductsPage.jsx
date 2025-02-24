import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ProductsPage.module.css";

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('http://localhost:5002/products-list');
            const data = await res.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const handleDelete = async (_id) => {
        try {
            const res = await fetch(`http://localhost:5002/products-list/${_id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw new Error("Failed to delete product");
            }

            const data = await res.json();
            console.log("Delete response:", data);

            setProducts(products.filter(product => product._id !== _id));
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleEdit = async (_id) => {
        navigate(`/edit-product/${_id}`);
    };

    return (
        <div>
            {products.length === 0 ? (
                <p>Loading products...</p>
            ) : (
                <>
                    <h1 className={styles.title}>Products:</h1>
                    <div className={styles.add}><Link to="/add-product">
                            <button className={styles.btnAdd}>Add Product</button>
                        </Link></div>
                    <div className={styles.container}>
                        {products.map((product) => (
                            <div key={product._id} className={styles.box}>
                                <span className={styles.numberSpan}></span>
                                 {product.imageUrl && (
                                    <img 
                                        src={product.imageUrl} 
                                        alt={product.title} 
                                        className={styles.productImage} 
                                    />
                                )}
                                <p>{product.title}</p>
                                <p className={styles.price}>{product.price} €</p>
                               
                                <button onClick={() => handleDelete(product._id)}  className={styles.btnDelete}>Ištrinti</button>
                                <button onClick={() => handleEdit(product._id)} className={styles.btnEdit}>Edit</button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default ProductsPage;