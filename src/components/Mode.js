import React from "react";
import { useEffect } from "react";
import useLocalStorage from "use-local-storage";
import darkModeIcon from "../assets/darkModeIcon.png";
import lightModeIcon from "../assets/lightModeIcon.png";
import githubIcon from "../assets/githubIcon.png";
import githubIconDark from "../assets/githubIconDark.png";

const DarkMode = () => {
  const defaultLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultLight ? "light" : "dark"
  );

  const onModeClick = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      document.querySelector(".github-icon").src = githubIconDark;
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      document.querySelector(".github-icon").src = githubIcon;
    }
  }, [theme]);

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
  return (
    <>
      {theme === "light" ? (
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
