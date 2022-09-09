import React from "react";
import { useState } from "react";
import darkModeIcon from "../assets/darkModeIcon.png";
import lightModeIcon from "../assets/lightModeIcon.png";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  const onModeClick = () => {
    setDarkMode(!darkMode);
    /*
    if (darkMode) {
      document
        .querySelector(".dark-mode-icon")
        .classList.remove("icon-animation");
      void document.querySelector(".dark-mode-icon").offsetWidth;
      document.querySelector(".dark-mode-icon").classList.add("icon-animation");
    } else {
      document
        .querySelector(".light-mode-icon")
        .classList.remove("icon-animation");
      void document.querySelector(".light-mode-icon").offsetWidth;
      document
        .querySelector(".light-mode-icon")
        .classList.add("icon-animation");
    }
    */
  };

  return (
    <>
      {darkMode ? (
        <img
          className="icon dark-mode-icon"
          src={darkModeIcon}
          alt="darkmode"
          onClick={onModeClick}
        ></img>
      ) : (
        <img
          className="icon light-mode-icon"
          src={lightModeIcon}
          alt="lightmode"
          onClick={onModeClick}
        ></img>
      )}
    </>
  );
};

export default DarkMode;
