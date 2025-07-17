// ProductList.jsx
import React from "react";
import ProductItem from "./ProductItem";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/cartSlice";


function ProductList() {
  const { products, error } = useFetchProducts();
  const searchQuery = useSelector(state => state.cart.searchQuery);
  const dispatch = useDispatch();

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list-container">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="search-input"
      />

      {error && <p>{error}</p>}

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
