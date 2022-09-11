import React from "react";

const Project = ({ text, vid }) => {
  return (
    <div className="Project">
      <div className="project-text">{text}</div>
      <video src={vid} className="project-video"></video>
    </div>
  );
};

export default Project;
