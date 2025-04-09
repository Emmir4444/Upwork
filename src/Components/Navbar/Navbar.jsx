import React from 'react';
import './Navbar.css';
import menuIcon from '/images/DonnerMen.png'; // Asegúrate de que la ruta sea correcta
import logo from '/images/marketplace.png'; // Asegúrate de que la ruta sea correcta

const NavbarN = () => {
  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo">Upwor</a>

      <input type="checkbox" id="navbar__toggler" className="navbar__checkbox" />
      <label htmlFor="navbar__toggler" className="navbar__hamburger">
        <img src={menuIcon} alt="menu" className="navbar__icon" />
      </label>

      <div className="navbar__menu">
        <ul className="navbar__list">
          <li className="navbar__item"><a href="/" className="navbar__link">Home</a></li>
          <li className="navbar__item"><a href="/about" className="navbar__link">About</a></li>
          <li className="navbar__item"><a href="/contact" className="navbar__link">Contact</a></li>
          <li className="navbar__item"><a href="/login" className="navbar__link">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarN;


