import Nav from "./components/Nav";
import Mode from "./components/Mode";
import codeIcon from "./assets/codeIcon.png";

const Header = ({ onNavClick, onModeClick }) => {
  const onLogoClick = () => {
    let height = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.html.offsetHeight,
      document.html.scrollHeight,
      document.html.offsetHeight
    );
    console.log(height);
    window.scrollTo();
  };

  return (
    <header>
      <div className="header-name-wrapper">
        <img src={codeIcon} alt="< >" className="header-logo"></img>
        <div className="header-name" onClick={onLogoClick}>
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
