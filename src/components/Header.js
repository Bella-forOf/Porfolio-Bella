// import linkedIn from "../images/linkedIn_icon.jpg";

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section className="headerr">
       
        
        <nav className="headerr__nav">
        <Link className="headerr__nav--link" to="/">
            Inicio 
          </Link>
          <Link className="headerr__nav--link" to="/about">
            Sobre mi  
          </Link>
         
          <Link className="headerr__nav--link" to="/Projects">
            Proyectos 
          </Link>
          
         
        </nav>
        </section>
      
      
</>
  );
}

export default Header;
