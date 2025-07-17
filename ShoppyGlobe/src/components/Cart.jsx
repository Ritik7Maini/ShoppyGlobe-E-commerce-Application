import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {/* Clear Cart Button */}
          <button onClick={handleClearCart} className="clear-cart-btn">
            🗑️ Clear Cart
          </button>

          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="cart-total">
            <h3>Grand Total: ₹{totalPrice}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
