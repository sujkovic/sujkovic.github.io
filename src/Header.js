import Nav from "./components/Nav";

const Header = ({ onNavClick }) => {
  return (
    <header>
      <div className="header-name-wrapper">
        <div className="header-logo"></div>
        <div className="header-name">Adrian Sujkovic</div>
      </div>
      <Nav onNavClick={onNavClick} />
    </header>
  );
};

export default Header;
