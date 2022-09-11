import Project from "./components/Project";
import leagueManager from "./assets/leagueManager.mp4";
import abstract from "./assets/abstract.png";

const Projects2 = () => {
  return (
    <div className="Projects2">
      <Project
        vid={leagueManager}
        text="In my data structures and algorithms class, I was tasked with making a sports league managing software in C++. But there was a twist - the arrays had to be dynamic. The app compiles on linux machines with make"
        link="https://github.com/sujkovic/sports-league-manager"
        title="Sports League Manager"
      />
      <div className="Project">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/sujkovic/technical-research-paper"
        >
          <img
            src={abstract}
            alt="abstract"
            className="project-video abstract"
          ></img>
        </a>
        <div class="project-info-wrapper">
          <div className="project-title">Technical Research Paper</div>
          <div className="project-text">
            In my CS ethics class, I was given the task of writing a technical
            research paper on any computing topic. I chose deep learning and got
            a chance to dive into the inner workings of convolutional neural
            networks and real world applications of them.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects2;
