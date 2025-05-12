import React from "react";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;