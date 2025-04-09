import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import { DiGithubBadge } from 'react-icons/di';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section footer__section--about">
          <h2 className="footer__title">UpWork</h2>
          <p className="footer__text">Conectate con miles de empresas y personas alrededor del mundo</p>
        </div>

        <div className="footer__section footer__section--links">
          <h3 className="footer__subtitle">Enlaces rápidos</h3>
          <ul className="footer__list">
            <li className="footer__item"><a href="/" className="footer__link">Inicio</a></li>
            <li className="footer__item"><a href="/about" className="footer__link">Acerca</a></li>
            <li className="footer__item"><a href="/services" className="footer__link">Servicios</a></li>
            <li className="footer__item"><a href="/contact" className="footer__link">Contacto</a></li>
          </ul>
        </div>

        <div className="footer__section footer__section--social">
          <h3 className="footer__subtitle">Síguenos</h3>
          <div className="footer__social-icons">
            <a href="#" className="footer__icon">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="footer__icon">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="footer__icon">
              <FaInstagram size={24} /> 
            </a>
            <a href="#" className="footer__icon">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="footer__icon" style={{ marginTop: '-5px' }}>
  <DiGithubBadge size={34} />
</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Upwor. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;