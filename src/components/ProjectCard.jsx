
function ProjectCard({ project }) {
  const isBuilt = project.status === "Built";

  return (
    <article className="project-card">

      <div className="project-card-top">

        <span className="project-number">
          {project.number} / {project.category}
        </span>

        <span
          className={`project-status ${
            isBuilt ? "built" : "planned"
          }`}
        >
          <span className="status-indicator" />
          {project.status}
        </span>

      </div>

      <div className="project-card-body">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        {project.highlights?.length > 0 && (
          <ul className="project-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}

        <div className="project-tags">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

      </div>

      <div className="project-card-bottom">

        <span className="project-type">
          {isBuilt ? "Completed Project" : "On my roadmap"}
        </span>

        <div className="project-links">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo ↗
            </a>
          )}

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;
