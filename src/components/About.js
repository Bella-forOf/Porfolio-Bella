import bella from "../images/bellagarcia.jpg";
import cv from "../documents/CV-Bella-Garcia-Web-Developer.pdf";

function About() {
  return (
    <section className="aboutSection" id="about-section">
      <img className="aboutSection__image" src={bella} alt="Foto de Bella" />
      <article className="aboutSection__article">
        <h3 className="aboutSection__article--title">Sobre mi</h3>
        <p className="aboutSection__article--text">
        Muy proactiva y siempre en constante evolución. Durante 3 años trabajé de freelance en la creación y mantenimiento de una web, después de aquello no podía dejar de aprender y ampliar conocimientos. Me considero una persona extrovertida, resolutiva y muy organizada. Me gusta el trato con las personas, tengo buena gestión del tiempo y capacidad de liderazgo.        </p>
        
       
        <a href={cv} download="CV-Bella-Garcia-Web-Developer.pdf">
          <button className="aboutSection__article--button">
            Descargar CV
          </button>
        </a>
      </article>
      
    </section>
    
  );
}

export default About;