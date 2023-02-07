import bella from "../images/Bella2.jpg";
import cv from "../documents/CV_Bella_Garcia_Villegas_web_developer__.pdf";

function About() {
  return (
    <section className="aboutSection" id="about-section">
      <img className="aboutSection__image" src={bella} alt="Foto de Bella" />
      <article className="aboutSection__article">
        <h3 className="aboutSection__article--title">Sobre mi</h3>
        <p className="aboutSection__article--text">
        Madre, reinventada, trabajadora y organizada. La experiencia me ha dado la posibilidad de elegir mi camino y hacer este cambio tan radical. Al inicio de mi carrera profesional me guie por una trayectoria con salidas, pero los años me han ayudado a decantarme por algo que realmente me gusta, me apasiona y me da alas para seguir creciendo. Necesitaba un sector donde desarrollar mis capacidades, donde, tanto la empresa donde vaya a trabajar como yo podamos beneficiarnos. Tengo gran capacidad de organización, planificación, y priorización de tareas. Me gusta la eficiencia y el trabajo bien hecho.  Busco una empresa que confié en mí, y me acompañe en el camino de la formación y el aprendizaje.         </p>
        <p className="aboutSection__article--text">
        Soy una persona muy proactiva que esta buscando trabajo en el mundo de la programación después de ser autonoma y trabajar de freelance en la creacion y mantenimiento de una web con WordPress he querido serguir formandome y hacer un bootcamp de programación web muy intenso donde he aprendido mucho más de lo que llegue a imaginar,y esto de aprender es adictivo y quiero seguir formándome para dar mi mejor versión. Quiero afianzar mis conocimientos y elegir la rama en la que me quiero seguir formando, lo que si tengo claro es que me fascinan las bases de datos y todo lo que se puede hacer con su gestión. Las APIS, y el lado backend de la programación es el que me parece más interesante, porsupuesto sin quitarle valor a la parte frontend. 
        </p>
       
        <a href={cv} download="CV_Bella_Garcia_Villegas_web_developer__.pdf">
          <button className="aboutSection__article--button">
            Descargar CV
          </button>
        </a>
      </article>
      
    </section>
    
  );
}

export default About;