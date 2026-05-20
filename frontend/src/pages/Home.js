import React, { useEffect, useState } from "react";
import API from "../api";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Wedding Products</h1>
      {products.map(p => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
}

export default Home;
