
import ahorcado from "../images/ahorcado.jpg";
import leap from "../images/leap.jpg";
import duquesas from "../images/duquesas.jpg";
import spotify from "../images/spotify.jpg";
function ProjectsTeam() {
    return (
        <section className="projects" id="projects-section">
      <h3 className="projects__title">proyectos</h3>
      
      <div className="containerArticle">
        
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={leap}
            alt="Imagen del proyecto Anime Series"
          />
          <h4 className="projects__article--name">Leap of faith</h4>
          <p className="projects__article--description">
            Primer proyecto en equipo donde nos damos a conocer con nuestras fortalezas y debilidades. 
          </p>
          <p> Tecnologias aplicadas: || HTML-CSS - SASS || Git - Github || Agile - Scrum ||</p>
          <a href="https://begodpo.github.io/anime-series/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Begodpo/anime-series">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={spotify}
            alt="Imagen del proyecto Awesome Profile-Cards"
          />
          <h4 className="projects__article--name">spotify</h4>
          <p className="projects__article--description">
            Proyecto en equipo. Web para crear tarjetas de visita
            personalizadas, con HTML, SASS y JavaScript.
          </p>
          <p> Tecnologias aplicadas: || HTML-CSS - SASS ||  </p>
          <a href="http://beta.adalab.es/project-promo-o-module-2-team-5/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Begodpo/awesome-profile-cards">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={ahorcado}
            alt="Imagen del proyecto Rock, Paper & Scissors"
          />
          <h4 className="projects__article--name">ahoracado</h4>
          <p className="projects__article--description">
            Proyecto individual. Juego de Piedra, Papel y Tijeras, creado con
            HTML, CSS y JavaScript.
          </p>
          <p> Tecnologias aplicadas: || HTML-CSS - SASS || JavaScript - React || </p>
          <a href="https://begodpo.github.io/rock-paper-scissors/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Begodpo/rock-paper-scissors">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={duquesas}
            alt="Imagen del proyecto Web Colaborativa"
          />
          <h4 className="projects__article--name">
            Las duquesas
          </h4>
          <p className="projects__article--description">
            Proyecto en equipo. Web colaborativa creada con HTML, CSS y SASS.
            Responsive.
          </p>
          <p> Tecnologias aplicadas: || HTML-CSS - SASS || JavaScript - React || Node JS - Express || SQlite || </p>
          <a href="http://beta.adalab.es/project-promo-o-module-1-team-7/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Begodpo/web-colaborativa-adalabers">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
       
      </div>
    </section>
  );
}
export default ProjectsTeam;