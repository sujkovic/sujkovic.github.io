import resumeBuilder from "./assets/resumeBuilder.mp4";
import memCard from "./assets/memCard.mp4";
import Project from "./components/Project";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="projects-title">Projects</div>
      <Project
        vid={resumeBuilder}
        text="While looking for internships I realized I was going to need to fix up my resume. I knew it would take a while so I figured, huh, let's see if flexbox can expedite the process. It didn't. But I learned react!"
        link="https://github.com/sujkovic/resume-maker"
        title="Resume Builder"
      />
      <div className="Project  reverse-project">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/sujkovic/memory-card-game"
        >
          <video className="project-video abstract" autoPlay muted loop>
            <source src={memCard} type="video/mp4"></source>
          </video>
        </a>
        <div className="project-info-wrapper">
          <div className="project-title">Memory Game</div>
          <div className="project-text">
            I made this app with the intentions of building up my react
            foundations and learning hooks. It worked really well and I got a
            cool little game out of it!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
