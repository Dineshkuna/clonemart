import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <div className="discount-tag">{product.discount}</div>
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <div className="product-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <div className="product-price">${product.price}</div>
      <button className="add-to-cart" onClick={() => addToCart(product)}>
        +
      </button>
    </div>
  );
};

export default ProductCard;
