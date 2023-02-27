import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Navbr.css';
import lemon from './Logo.svg';
export default function Navbar(props) {
    return (
        <nav className="navbar">
        <div className="navbar-logo">
          <img src={lemon} alt="Logo" />
        </div>
        <ul className="navbar-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">LogIn</a></li>
        </ul>
        <div className="navbar-hamburger">
          <button className="hamburger-button">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string
};
Navbar.defaultProps = { title: "set title here" };