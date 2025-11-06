import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React, Bootstrap, animations & EmailJS.",
    tech: ["React", "Bootstrap", "CSS","EmailJS"],
    live: "https://atchiyamma-portfolio.netlify.app/",
    github: "https://github.com/arunagitcode/Aruna_portfolio"
  },
  {
    title: "Under Process",
    description: "Live weather visualization with API + animated temperature cards.",
    tech: ["JavaScript", "API", "CSS"],
    live: "#",
    github: "#"
  },
  {
    title: "Under Process",
    description: "Frontend UI clone with hover trailers, categories & dynamic rows.",
    tech: ["React", "Bootstrap", "CSS"],
    live: "#",
    github: "#"
  },
];

function Projects_pf() {
  return (
    <div className="projects-container mt-4" id="projects">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-unique-card" key={index}>
            <div className="project-shine"></div>

            <h2 className="project-name">{project.title}</h2>
            <p className="project-desc">{project.description}</p>

            <div className="tech-box">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.live} target="_blank" className="proj-live">
                Live Demo <FaExternalLinkAlt />
              </a>
              <a href={project.github} target="_blank" className="proj-code">
                View Code <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects_pf;
