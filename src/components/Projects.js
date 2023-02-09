
import joya from "../images/joya.jpg";
import dog from "../images/dog.jpg";
import tronos from "../images/juego-tronos.jpg";
import breaking from "../images/breaking.jpg";
import rick from "../images/rick.jpg";
import list from "../images/list-adalabers.jpg";
import event from "../images/event.jpg";
function Projects() {
  return (
    <section className="projects" id="projects-section">
      <h3 className="projects__title">Proyectos</h3>
      
      
      <div className="containerArticle">
      <article className="projects__article">
          <img
            className="projects__article--image"
            src={joya}
            alt="Imagen de ordenador y movil para version responsive"
          />
          <h4 className="projects__article--name">La Joya producciones </h4>
          <p className="projects__article--description">
            Creación y mantenimiento Web (2017 - 2020). 
          </p>
          <p> Tecnologias aplicadas: || WordPress - Vimeo || HTML-CSS  ||  </p>
          <a href="http://lajoyaproducciones.com/">
            <button className="projects__article--button">Demo</button>
          </a>
         
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={dog}
            alt="Imagen de ordenador y movil para version responsive"
          />
          <h4 className="projects__article--name">Adopta un perrito</h4>
          <p className="projects__article--description">
            Diseño de landing para web de adopciones de perro. 
          </p>
         <p> Tecnologias aplicadas: || HTML-CSS - SASS ||  </p>
          <a href="https://bella-forof.github.io/Adopta_un_perrito/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Bella-forOf/Adopta_un_perrito">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={tronos}
            alt="Imagen de ordenador "
          />
          <h4 className="projects__article--name">Juego Fuerzas del Bien - Mal</h4>
          <p className="projects__article--description">
Juego donde eliges con que equipo vas a combatir y al alzar se erigirá el contrincante.
          </p>
         <p> Tecnologías aplicadas: || HTML-CSS - SASS || JavaScript || </p>
          <a href="https://bella-forof.github.io/Juego-fuerzas-JuegoDeTronos/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Bella-forOf/Juego-fuerzas-JuegoDeTronos">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={breaking}
            alt="Imagen de ordenador y movil para version responsive"
          />
          <h4 className="projects__article--name">Breaking Bad</h4>
          <p className="projects__article--description">
            Buscador de personajes, podras buscarlos por nombre y añadirlos a tu lista de favoritos.
          </p>
         <p> Tecnologías aplicadas: || HTML-CSS - SASS || JavaScript || </p>
          <a href="https://bella-forof.github.io/Breaking_Bad_listado_personajes/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Bella-forOf/Breaking_Bad_listado_personajes">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={rick}
            alt="Imagen de ordenador y movil para version responsive"
          />
          <h4 className="projects__article--name">Rick and Morty</h4>
          <p className="projects__article--description">
            Buscador de personajes, por nombre, especie y género. Y detalle de cada personaje
          </p>
         <p> Tecnologías aplicadas: || HTML-CSS - SASS || JavaScript - React || </p>
          <a href="https://bella-forof.github.io/Rick-and-morty-buscador/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Bella-forOf/Rick-and-morty-buscador">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={list}
            alt="Imagen de ordenador y movil para version responsive"
          />
          <h4 className="projects__article--name">Listado de alumnas</h4>
          <p className="projects__article--description">
          Web con opción de mostrar el listado de alumnas y añadir nuevas.
          </p>
         <p> Tecnologías aplicadas: || HTML-CSS - SASS || JavaScript - React || </p>
          <a href="https://bella-forof.github.io/Listado_Alumnas/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Bella-forOf/Listado_Alumnas">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={event}
            alt="Imagen de ordenador y movil para version responsive"
          />
          <h4 className="projects__article--name">Efficient Event</h4>
          <p className="projects__article--description">
          Proyecto personal donde estoy creando una web que ayude a organizar eventos. Esta web esta en desarroyo. 
          </p>
         <p> Tecnologias aplicadas: || HTML-CSS - SASS || JavaScript - React || </p>
        
        </article>
        
      </div>
    </section>
  );
}

export default Projects;