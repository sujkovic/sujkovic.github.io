import githubIcon from "./assets/githubIcon.png";
import linkedInIcon from "./assets/linkedInIcon.png";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="contact-title">Contact me!</div>
      <div className="contact-content-wrapper">
        <div className="contact-icons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sujkovic/"
          >
            <img src={githubIcon} alt="github" className="github-icon"></img>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/adrian-sujkovic/"
          >
            <img
              src={linkedInIcon}
              alt="github"
              className="linked-in-icon"
            ></img>
          </a>
        </div>
        <div className="contact-email">adrian@sujkovic.com</div>
        <a
          href="https://github.com/sujkovic/sujkovic.github.io"
          className="contact-source-code"
        >
          website source code
        </a>
      </div>
    </div>
  );
};

export default Contact;
