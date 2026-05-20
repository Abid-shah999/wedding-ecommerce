import React from "react";

function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price} ৳</p>
    </div>
  );
}

export default ProductCard;
