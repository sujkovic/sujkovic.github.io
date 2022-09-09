import "./style.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import LandingPage from "./LandingPage";
import About from "./About";
import Projects from "./Projects";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.querySelector(".nav-projects").style.display = "block";
      document.querySelector(".nav-contact").style.display = "block";
      document.querySelector(".nav-mode").style.display = "block";
    } else {
      document.querySelector(".nav-projects").style.display = "none";
      document.querySelector(".nav-contact").style.display = "none";
      document.querySelector(".nav-mode").style.display = "none";
    }
  }, [navOpen]);

  const onNavClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="App">
      <Header onNavClick={onNavClick} />
      <LandingPage />
      <About />
      <Projects />
    </div>
  );
}

export default App;
