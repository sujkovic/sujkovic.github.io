import Nav from "./components/Nav";
import Mode from "./components/Mode";
import codeIcon from "./assets/codeIcon.png";
import scrollFunc from "./functions/scrollFunc";

const Header = ({ onNavClick, onModeClick }) => {
  return (
    <header>
      <div className="header-name-wrapper">
        <img src={codeIcon} alt="< >" className="header-logo"></img>
        <div className="header-name" onClick={() => scrollFunc("header")}>
          Adrian Sujkovic
        </div>
      </div>
      <div className="nav-mode-wrapper">
        <Nav onNavClick={onNavClick} onModeClick={onModeClick} />
        <div className="mode-wrapper">
          <Mode />
        </div>
      </div>
    </header>
  );
};

export default Header;
