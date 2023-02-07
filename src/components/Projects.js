
import personal from "../images/personal-projects.jpg";
import personalTeam from "../images/team-projects.jpg";

import { Link } from 'react-router-dom';
function Projects() {
  return (
    <section className="projects" id="projects-section">
      <h3 className="projects__title">|| proyectos ||</h3>
      <p className="projects__text">
        
      </p>
      <div className="containerArticle">
      <Link to="/projects-individual" className="n">
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={personal}
            alt="Imagen del proyecto Harry Potter"
          />
          
          <p className="projects__article--description">
          || HTML-CSS - SASS || JavaScript – React - APIs || Node JS - Express || SQlite || WorldPress - Vimeo
          </p>
          
        </article>
        </Link>
        <Link to="/projects-teams" className="n">
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={personalTeam}
            alt="Imagen del proyecto Inherite Code"
          />
         
          <p className="projects__article--description">
          || HTML-CSS - SASS || JavaScript – React - APIs || Node JS - Express || SQlite ||
          </p>
         
        </article>
        </Link>
      </div>
    </section>
  );
}

export default Projects;