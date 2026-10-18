
import { skillGroups } from "../data/skills";

function Skills() {
  return (
    <section className="content-section" id="skills">
      <p className="eyebrow">MY TOOLKIT</p>
      <h2>Skills & technologies.</h2>

      <p>
        Technologies I've learned or am currently
        exploring as I develop my engineering skills.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>

            <div className="project-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
