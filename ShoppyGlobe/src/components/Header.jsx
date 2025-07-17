import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartCount = useSelector((state) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="header">
      <nav className="nav">
        {/* Make ShoppyGlobe a home link */}
        <Link to="/" className="logo">
          ShoppyGlobe
        </Link>

        <div className="nav-links">
          <Link to="/cart" className="cart-link">
            🛒 Cart ({cartCount})
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
