import React, { useState } from 'react';
import NewProductCard from './NewProductCard';
import './ProductList.css';
import phone1 from '../Assets/Images/phone-01.jpg'
import phone2 from '../Assets/Images/phone-02.jpg'
import phone3 from '../Assets/Images/phone-03.png'
import phone4 from '../Assets/Images/phone-04.jpg'
import phone5 from '../Assets/Images/phone-05.jpg'
import phone6 from '../Assets/Images/phone-06.jpg'
import wireless1 from '../Assets/Images/wireless-01.png'
import wireless2 from '../Assets/Images/wireless-02.png'
import wireless3 from '../Assets/Images/wireless-03.png'
import wireless4 from '../Assets/Images/wireless-04.png'



const NewProductList = () => {
  const [cart, setCart] = useState([]);
  const products = [
    {
      name: 'Apple iPhone 12 Pro',
      image: phone1,
      price: 799,
      rating: 5,
    },
    {
      name: 'Apple iPhone 12 Max',
      image: phone2,
      price: 799,
      rating: 4.5,
    },
    {
      name: 'Apple iPhone 13 Pro',
      image: phone3,
      price: 899,
      rating: 4,
    },
    {
      name: 'Samsung Galaxy S22',
      image: phone4,
      price: 699,
      rating: 4.5,
    },
    {
      name: 'Realme 8',
      image: phone5,
      price: 599,
      rating: 4,
    },
    {
      name: 'One Plus Nord',
      image: phone6,
      price: 799,
      rating: 4.5,
    },
    {
      name: 'Beat Studio Wireless',
      image: wireless1,
      price: 199,
      rating: 4.5,
    },
    {
      name: 'Beat EP Headphones',
      image: wireless2,
      price: 199,
      rating: 4.5,
    },
    {
      name: 'Black Headphones',
      image: wireless3,
      price: 169,
      rating: 4.5,
    },
    {
      name: 'Bluetooth Headphones',
      image: wireless4,
      price: 139,
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

export default NewProductList;
