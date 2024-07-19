import React, { useState } from 'react';
import NewProductCard from './NewProductCard';
import './ProductList.css';
import doublesofa1 from '../Assets/Images/double-sofa-01.png'
import doublesofa2 from '../Assets/Images/double-sofa-02.png'
import doublesofa3 from '../Assets/Images/double-sofa-03.png'
import singlesofa1 from '../Assets/Images/single-sofa-01.jpg'
import singlesofa2 from '../Assets/Images/single-sofa-02.jpg'
import singlesofa3 from '../Assets/Images/single-sofa-03.jpg'
import armchair1 from '../Assets/Images/arm-chair-01.jpg'
import armchair2 from '../Assets/Images/arm-chair-02.jpg'



const BestSaleList = () => {
  const [cart, setCart] = useState([]);
  const products = [
    {
      name: 'Stone and Beam Westview',
      image: doublesofa1,
      price: 193,
      rating: 5,
    },
    {
      name: 'Rivet Bigelow Modern',
      image: doublesofa2,
      price: 253,
      rating: 4.5,
    },
    {
      name: 'Fllufy Sheep Sofa',
      image: doublesofa3,
      price: 899,
      rating: 4,
    },
    {
      name: 'Amazon Brand Modern Sofa',
      image: singlesofa1,
      price: 699,
      rating: 4.5,
    },
    {
      name: 'Faux Velvet Sofa',
      image: singlesofa2,
      price: 599,
      rating: 4,
    },
    {
      name: 'Modern Arm Sofa',
      image: singlesofa3,
      price: 799,
      rating: 4.5,
    },
    {
      name: 'Baltsar Chair',
      image: armchair1,
      price: 199,
      rating: 4.5,
    },
    {
      name: 'Helmar Chair',
      image: armchair2,
      price: 199,
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
          <NewProductCard key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default BestSaleList;
