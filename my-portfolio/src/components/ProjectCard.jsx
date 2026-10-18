
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

        <div className="project-tags">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>

      <div className="project-card-bottom">
        <span className="project-type">
          {isBuilt ? "Project" : "On my roadmap"}
        </span>

        {(project.github || project.demo) && (
          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                Source code ↗
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live demo ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
