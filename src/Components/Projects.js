import React from "react";
import github from "../assets/Icons/akar-icons_github-fill.jpg";
import link from "../assets/Icons/link.jpg";

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>

      <p className="stack-text">Things I've built so far</p>

      <div className="project-card">
        <h2>Project Title</h2>

        <p>Project Description</p>

        <p>Tech Stack</p>

        <div className="project-links">
          <p>
            <img src={link} alt="" />
            <a href="">Live Preview</a>
          </p>

          <p className="github-link">
            <img src={github} alt="" />
            <a href="">View Code</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
