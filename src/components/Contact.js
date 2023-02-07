import linkedIn from "../images/linkedIn_icon.jpg";
import gitHub from "../images/GitHub-Mark.png";
import email from "../images/email_icon.png";

function Contact() {
  return (
    <section className="contact" id="contact-section">
      {/* <h3 className="contact__title">contacto</h3> */}

      <div className="links-container">
        <a href="mailto:bellagarcia1985@gmail.com">
          <img className="contact__icon" src={email} alt="email icon" />
        </a>
        <a href="https://github.com/Bella-forOf">
          <img className="contact__icon" src={gitHub} alt="gitHub icon" />
        </a>
        <a href="https://www.linkedin.com/in/bella-garcia-villegas-web-developer/">
          <img className="contact__icon" src={linkedIn} alt="linkedIn icon" />
        </a>
      
      </div>
    </section>
  );
}

export default Contact;