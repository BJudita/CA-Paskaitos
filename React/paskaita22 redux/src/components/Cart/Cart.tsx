import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { cartSelector, removeFromCart } from "../../store/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => cartSelector(state));

  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} (${item.price.toFixed(2)}) × {item.quantity}
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total Items: {totalItems}</p>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
