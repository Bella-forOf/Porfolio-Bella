// Fichero src/components/App.js
import "../styles/App.scss";
import "../styles/components/Header.scss";
import "../styles/components/About.scss";
import "../styles/components/Projects.scss";
import "../styles/components/Contact.scss";
import "../styles/components/Footer.scss";

//import { Link, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Cards from "./Cards";
import ProjectsInd from "./ProjectsInd";
import ProjectsTeam from "./ProjectsTeam";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <header >
        <Header />
      </header>
      <main>
        <Routes>
<Route path="/" element={
<>
<Cards/>
<About />
<Projects />

</>
}
>
</Route>
<Route path="/projects-individual" element={

  <ProjectsInd/>
}>

</Route>
<Route path="/projects-teams" element={

  <ProjectsTeam/>
}>
  
</Route>
<Route path="/about" element={

<About/>
}>

</Route>
<Route path="/Projects" element={

<Projects/>
}>

</Route>
<Route path="/contact" element={

<Cards/>
}>

</Route>
        </Routes>
       
      </main>
      <footer>
        <Contact/>
        <Footer />
      </footer>
    </>
  );
};

export default App;