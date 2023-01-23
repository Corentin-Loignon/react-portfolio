import React from "react";
import "./About.css";
import ME from '../../assets/me-about.png'
import {TbCertificate} from 'react-icons/tb'

const About = () => {
  return (
    <section id="about">
      <h5>Ce qu'il faut savoir</h5>
      <h2>A propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbCertificate className="about__icon"/>
              <h5>Diplôme</h5>
              <small>Titre RNCP «Concepteur Développeur de solutions digitales»</small>
            </article>

            <article className="about__card">
              <TbCertificate className="about__icon"/>
              <h5>Diplôme</h5>
              <small>Diplôme de Comptabilité et de Gestion (DCG)</small>
            </article>

            <article className="about__card">
              <TbCertificate className="about__icon"/>
              <h5>Diplôme</h5>
              <small>Certification Professionnelle de l’ENOES «Responsable de gestion comptable numérique»</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quae quis cum aspernatur commodi ipsam est, vero alias, officia sed blanditiis dolores autem natus doloribus repudiandae quia voluptate quasi aut.</p>

          <a href="#contact" className="btn btn-primary">Me contacter</a>
        </div>
      </div>
    </section>
  );
};

export default About;
