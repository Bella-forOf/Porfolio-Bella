
import bella from "../images/bella.png";
import linkedIn from "../images/linkedin.png";
import gitHub from "../images/github.png";
import email from "../images/email.png";

function Cards() {
    return (
<div className="header1">
      <section className="profile-card">
            <div className="header2">
              
             <a target="_blank" href="#">
                <img img className="hoverZoomLink" src={bella} alt="foto de Bella" />
              </a> 
              <h1>
                      Bella García Villegas
                    </h1>
          
              
              <h2>
                     Junior Web Developer
                    </h2>
          
            </div>
          
           
            <div className="profile-bio">
          
              <p>
              Destinada a reinventarme y descubir mi pasión por la programción. Este camino me permite dar lo mejor de mi sin ponerme limites. Siempre dispuesta a seguir ampliando conocimientos.
              </p>
          <p>&lt; &gt;  "Primero resuelve el problema. Entonces, escribe el codigo"</p>
          <p>John Johnson &lt;/ &gt;</p>
            </div>
          
            
            <ul className="profile-social-links">
              <li>
              <a href="mailto:bellagarcia1985@gmail.com">
          <img className="" src={email} alt="email icon" />
        </a>
              </li>
              <li>
              <a href="https://github.com/Bella-forOf">
          <img className="" src={gitHub} alt="gitHub icon" />
        </a>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/bella-garcia-villegas-web-developer/">
          <img className="" src={linkedIn} alt="linkedIn icon" />
        </a>
              </li>
              <li>
                {/* <a target="_blank" href="x"
                // "https://thedistractedengineer.000webhostapp.com/"
                >
                 
                  <i className="fa fa-desktop"></i>
                </a> */}
              </li>
            </ul>
          </section>
</div>
    );
            }
export default Cards;