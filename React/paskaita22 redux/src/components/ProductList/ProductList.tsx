import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addToCart } from "../../store/slices/cartSlice";


const products = [
  { id: 1, name: "Apple", price: 1.0 },
  { id: 2, name: "Banana", price: 0.5 },
  { id: 3, name: "Orange", price: 0.8 },
];

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = (product: typeof products[0]) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          {product.name} - ${product.price.toFixed(2)}
          <button onClick={() => handleAdd(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
