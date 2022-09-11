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
      />
      <div className="Project">
        <video src={memCard} className="project-video abstract"></video>
        <div className="project-text">
          I made this app with the intentions of adding up my react foundations
          and learning hooks. It worked really well and I got a cool little game
          out of it!
        </div>
      </div>
    </div>
  );
};

export default Projects;
