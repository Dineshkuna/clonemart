import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3 className="footer-logo">🛍 Mart</h3>
        <p className="footer-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
        </p>
      </div>
      
      <div className="footer-column">
        <h4>About Us</h4>
        <ul>
          <li>Careers</li>
          <li>Our Stores</li>
          <li>Our Cares</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      
      <div className="footer-column">
        <h4>Customer Care</h4>
        <ul>
          <li>Help Center</li>
          <li>How to Buy</li>
          <li>Track Your Order</li>
          <li>Corporate & Bulk Purchasing</li>
          <li>Returns & Refunds</li>
        </ul>
      </div>
      
      <div className="footer-column">
        <h4>Contact Us</h4>
        <p>70 Washington Square South, New York, NY 10012, United States</p>
        <p>Email: example@gmail.com</p>
        <p>Phone: +1 1123 456 780</p>
      </div>
    </footer>
  );
};

export default Footer;