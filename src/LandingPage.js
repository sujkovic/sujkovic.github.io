import downArrowIcon from "./assets/downArrowIcon.png";
import scrollFunc from "./functions/scrollFunc";

const LandingPage = ({ mobileCheck }) => {
  return (
    <div className="LandingPage">
      <>
        {mobileCheck() ? (
          <>
            <div className="landingpage-title-mobile">
              <div className="landingpage-title-mobile1">Adrian</div>
              <div className="landingpage-title-mobile2">Sujković</div>
            </div>
            <div className="landingpage-subtitle-mobile">
              Software Developer
            </div>
          </>
        ) : (
          <>
            <div className="landingpage-title">Adrian Sujković</div>
            <div className="landingpage-subtitle">Software Developer</div>
          </>
        )}
      </>

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
