import React from "react";
import menuIcon from "../assets/menuIcon.png";

const Nav = ({ onNavClick }) => {
  return (
    <nav>
      <img
        src={menuIcon}
        alt="Menu"
        className="nav-child nav-main"
        onClick={onNavClick}
      ></img>
      <div className="nav-child nav-projects">Projects</div>
      <div className="nav-child nav-contact">Contact</div>
      <div className="nav-child nav-mode">Dark Mode</div>
    </nav>
  );
};

export default Nav;
