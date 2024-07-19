import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🛍️ MART</div>
      <div className="nav-items">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/cart">Cart</a>
        <a href="/profile">👤</a>
        <div className="cart-icon">
          🛒
          <span className="cart-count">0</span>
        </div>
      </div>
    </nav>
    // <div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to='/'>Home</Link>
    //       </li>
    //       <li>
    //         <Link to='/'>Shop</Link>
    //       </li>
    //       <li>
    //         <Link to='/'>Cart</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
  );
};

export default Navbar;
