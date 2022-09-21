import selfie from "./assets/selfie.png";
import cIcon from "./assets/cIcon.png";
import jsIcon from "./assets/jsIcon.png";
import htmlIcon from "./assets/htmlIcon.png";
import cssIcon from "./assets/cssIcon.png";
import reactIcon from "./assets/reactIcon.png";
import webpackIcon from "./assets/webpackIcon.png";
import gitIcon from "./assets/gitIcon.png";
import bashIcon from "./assets/bashIcon.png";
import linuxIcon from "./assets/linuxIcon.png";
import americaIcon from "./assets/americaIcon.png";
import montenegroIcon from "./assets/montenegroIcon.png";
import bosniaIcon from "./assets/bosniaIcon.png";
import serbiaIcon from "./assets/serbiaIcon.png";
import croatiaIcon from "./assets/croatiaIcon.png";
import russiaIcon from "./assets/russiaIcon.png";

const About = () => {
  return (
    <div className="About">
      <div className="about-title">About me</div>
      <div className="about-intro-wrapper">
        <img src={selfie} alt="Me" className="me"></img>
        <div className="about-intro-text">
          Hi I'm Adrian! I'm currently a junior at Binghamton University, NY,
          pursuing a dual bachelors degree in computer science and mathematical
          sciences with a focus on software development.
        </div>
      </div>
      <div className="about-categories">
        <div className="about-languages-wrapper">
          <div className="about-languages-title">Languages</div>
          <div className="about-languages">
            <img src={cIcon} alt="C++"></img>
            <img src={jsIcon} alt="Javascript"></img>
            <img src={htmlIcon} alt="HTML"></img>
            <img src={cssIcon} alt="CSS"></img>
          </div>
        </div>
        <div className="about-spoken-languages-wrapper">
          {/*
          <div className="about-spoken-languages-title">Spoken Languages</div>
          <div className="about-spoken-languages">
            <div className="about-native-wrapper">
              <div className="about-native">Native</div>
              <div className="about-native-flags">
                <img src={americaIcon} alt="English"></img>
              </div>
            </div>
            <div className="about-fluent-wrapper">
              <div className="about-fluent">Fluent</div>
              <div className="about-fluent-flags">
                <img src={montenegroIcon} alt="Montenegrin"></img>
                <img src={bosniaIcon} alt="Bosnian"></img>
                <img src={serbiaIcon} alt="Serbian"></img>
                <img src={croatiaIcon} alt="Croatian"></img>
              </div>
            </div>
            <div className="about-conversational-wrapper">
              <div className="about-conversational">Conversational</div>
              <div className="about-conversational-flags">
                <img src={russiaIcon} alt="Russian"></img>
              </div>
            </div>
          </div>
          */}
          <div className="about-spoken-languages-title">Courses</div>
          <div className="about-courses-wrapper">
            <div className="about-course">Data Structures and Algorithms</div>
            <div className="about-course">
              Design and Analysis of Algorithms
            </div>
            <div className="about-course">Operating Systems</div>
            <div className="about-course">
              Architecture From a Programmer's Perspective
            </div>
            <div className="about-course">
              Ethical, Social, and Global Issues in Computing
            </div>
            <div className="about-course">Linear Algebra</div>
            <div className="about-course">Number Systems</div>
            <div className="about-course">Automata Theory</div>
          </div>
        </div>
        <div className="about-skills-wrapper">
          <div className="about-skills-title">Skills</div>
          <div className="about-skills">
            <img src={reactIcon} alt="React"></img>
            <img src={webpackIcon} alt="Webpack"></img>
            <img src={gitIcon} alt="Git"></img>
            <img src={bashIcon} alt="Bash"></img>
            <img src={linuxIcon} alt="Linux"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
