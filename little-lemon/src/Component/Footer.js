import React from 'react';
import './Footer.css';
import footerLogo from './Logo.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="Logo" />
      </div>
      <nav className="footer-nav">
        <ul className="footer-nav-list">
          <li className="footer-nav-item"><a href="#">Home</a></li>
          <li className="footer-nav-item"><a href="#">About Us</a></li>
          <li className="footer-nav-item"><a href="#">Products</a></li>
          <li className="footer-nav-item"><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <div className="footer-social">
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
      </div>
      <div className="footer-contact">
        <p>123 Main St. New York, NY 10001</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@example.com</p>
      </div>
      <div className="footer-legal">
        <p>&copy; 2023 Example Company. All rights reserved.</p>
        <p><a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  );
}
