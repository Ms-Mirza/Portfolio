
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="content-section" id="projects">
      <p className="eyebrow">SELECTED WORK</p>
      <h2>Projects & experiments.</h2>

      <p>
        Practical software projects and ideas I'm
        exploring across productivity, data, and AI.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
