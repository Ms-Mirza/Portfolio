
function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">
          {project.number} / {project.category}
        </span>

        <span
          className={`project-status ${
            project.status === "Built" ? "built" : "planned"
          }`}
        >
          {project.status}
        </span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="project-tags">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      {(project.github || project.demo) && (
        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
