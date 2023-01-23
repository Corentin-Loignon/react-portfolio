import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Ce que je maîtrise</h5>
      <h2>Mes services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Concevoir des solutions digitales</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Analyse des besoins</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Méthodologies agiles (SCRUM)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Gestion des tâches</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Réalisation de maquettes fonctionnelles</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Utilisation d'Adobe XD</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Développer des solutions digitales</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Gestion de projet</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Utiliser un outil de gestion de version de code source (Github)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Créer et développer un site/application web</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Créer et utiliser des bases de données</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Déployer un site/application</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
