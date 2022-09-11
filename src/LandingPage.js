import downArrowIcon from "./assets/downArrowIcon.png";
import scrollFunc from "./functions/scrollFunc";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="landingpage-title">Adrian Sujković</div>
      <div className="landingpage-subtitle">Software Developer</div>
      <img
        src={downArrowIcon}
        alt="v"
        className="down-arrow"
        onClick={() => scrollFunc("about")}
      ></img>
    </div>
  );
};

export default LandingPage;
