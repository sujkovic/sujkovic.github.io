import Nav from "./components/Nav";
import Mode from "./components/Mode";

const Header = ({ onNavClick, onModeClick }) => {
  return (
    <header>
      <div className="header-name-wrapper">
        <div className="header-logo"></div>
        <div className="header-name">Adrian Sujkovic</div>
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
