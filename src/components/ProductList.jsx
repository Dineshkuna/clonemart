import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';
import sofa1 from '../Assets/Images/double-sofa-01.png'
import sofa2 from '../Assets/Images/double-sofa-02.png'
import chair1 from '../Assets/Images/arm-chair-01.jpg'
import chair2 from '../Assets/Images/arm-chair-02.jpg'
import phone1 from '../Assets/Images/phone-01.jpg'
import phone2 from '../Assets/Images/phone-02.jpg'



const ProductList = () => {
  const [cart, setCart] = useState([]);
  const products = [
    {
      name: 'Stone and Beam Westview',
      image: sofa1,
      price: 193,
      discount: '30% Off',
      rating: 5,
    },
    {
      name: 'Rivet Bigelow Modern',
      image: sofa2,
      price: 253,
      discount: '20% Off',
      rating: 4.5,
    },
    {
      name: 'Baltasar Chair',
      image: chair1,
      price: 89,
      discount: '15% Off',
      rating: 4,
    },
    {
      name: 'Helmar Chair',
      image: chair2,
      price: 112,
      discount: '35% Off',
      rating: 4.5,
    },
    {
      name: 'Realme 8',
      image: phone1,
      price: 599,
      discount: '10% Off',
      rating: 4,
    },
    {
      name: 'One Plus Nord',
      image: phone2,
      price: 799,
      discount: '5% Off',
      rating: 4.5,
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart);
  };

  return (
    <div className="product-list">
      <h2>Big Discount</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
