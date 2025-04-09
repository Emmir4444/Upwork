import React from 'react';
import { Link } from "react-router-dom";
import { useRef } from "react";
import './Navbar.css';
import menuIcon from '/images/DonnerMen.png'; 
import logo from '/images/marketplace.png';

const NavbarN = () => {
  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo">Upwork!</a>

      <input type="checkbox" id="navbar__toggler" className="navbar__checkbox" />
      <label htmlFor="navbar__toggler" className="navbar__hamburger">
        <img src={menuIcon} alt="menu" className="navbar__icon" />
      </label>

      <div className="navbar__menu">
        <ul className="navbar__list">
          <li className="navbar__item"><a href="/" className="navbar__link">Home</a></li>
          <li className="navbar__item"><a href="/" className="navbar__link">About</a></li>
          <li className="navbar__item"><a href="/register" className="navbar__link">Register</a></li>
          < li className="navbar__item"><a href="/login" className="navbar__link" >Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarN;


