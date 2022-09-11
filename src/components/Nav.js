import React from "react";
import menuIcon from "../assets/menuIcon.png";
import scrollFunc from "../functions/scrollFunc";

const Nav = ({ onNavClick }) => {
  return (
    <nav>
      <img
        src={menuIcon}
        alt="Menu"
        className="nav-child nav-main"
        onClick={onNavClick}
      ></img>
      <div
        className="nav-child nav-contact"
        onClick={() => scrollFunc("contact")}
      >
        Contact
      </div>
      <div
        className="nav-child nav-projects"
        onClick={() => scrollFunc("projects")}
      >
        Projects
      </div>
      <div className="nav-child nav-about" onClick={() => scrollFunc("about")}>
        About
      </div>
    </nav>
  );
};

export default Nav;
