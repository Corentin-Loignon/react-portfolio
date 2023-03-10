import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Application web React Randonnées Quad",
    github: "https://github.com/Corentin-Loignon/react-portfolio",
    demo: "https://quad-loisirs.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Portfolio React",
    github: "https://github.com/Corentin-Loignon/react-portfolio",
    demo: "https://portfolio-corentin-loignon.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "App mobile React Native Assurance",
    github: "https://github.com/Corentin-Loignon/InsuranceApp",
    demo: "https://imgur.com/a/AZaZF1q",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mes derniers projets</h5>
      <h2>Mon portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
