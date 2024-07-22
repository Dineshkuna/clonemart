import React from 'react';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';
import CartPage from './CartPage';


function Cart() {
  return (
    <div>
      <Navbar />
      <CartPage/>
      <Footer />
    </div>
  );
}

export default Cart;
