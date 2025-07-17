import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    if (quantity >= 1) {
      dispatch(updateQuantity({ id: item.id, quantity }));
    }
  };

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="cart-item-img" />

      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>Price: ₹{item.price}</p>
        <p>Total: ₹{item.price * item.quantity}</p>

        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="cart-item-qty"
        />

        <button onClick={handleRemove} className="remove-btn">
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
