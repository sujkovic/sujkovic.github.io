const Project = ({ text, vid, link, title }) => {
  return (
    <div className="Project">
      <div className="project-info-wrapper">
        <div className="project-title">{title}</div>
        <div className="project-text">{text}</div>
      </div>
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <video className="project-video" autoPlay muted loop>
          <source src={vid} type="video/mp4"></source>
        </video>
      </a>
    </div>
  );
};

export default Project;
