import React from "react";

const Nav = ({ onNavClick }) => {
  return (
    <nav>
      <div className="nav-child menu" onClick={onNavClick}>
        Menu
      </div>
      <div className="nav-child nav-projects">Projects</div>
      <div className="nav-child nav-contact">Contact</div>
      <div className="nav-child nav-mode">Dark Mode</div>
    </nav>
  );
};

export default Nav;
