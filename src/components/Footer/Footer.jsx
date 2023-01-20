import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        CORENTIN LOIGNON
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#about">A propos</a>
        </li>
        <li>
          <a href="#experience">Mon expérience</a>
        </li>
        <li>
          <a href="#services">Mes services</a>
        </li>
        <li>
          <a href="#portfolio">Mon portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/corentin-loignon/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Corentin-Loignon" target="_blank">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2023 Corentin Loignon. Tous droits réservés.</small>
      </div>
    </footer>
  );
};

export default Footer;
