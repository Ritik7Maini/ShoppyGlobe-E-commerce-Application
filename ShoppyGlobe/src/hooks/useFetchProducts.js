// hooks/useFetchProducts.js
import { useState, useEffect } from "react";

export function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        setError("Failed to load products.");
      }
    }
    fetchData();
  }, []);

  return { products, error };
}
