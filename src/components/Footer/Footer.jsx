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
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
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
