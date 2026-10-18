
import { areasOfInterest } from "../data/skills";

function Interests() {
  return (
    <section className="content-section" id="interests">
      <p className="eyebrow">WHAT I'M EXPLORING</p>
      <h2>My AI/ML direction.</h2>

      <p>
        I'm working toward AI engineering by strengthening
        my programming foundations and exploring data-driven
        systems, machine learning, and intelligent automation.
      </p>

      <div className="interests">
        {areasOfInterest.map((interest) => (
          <span key={interest}>{interest}</span>
        ))}
      </div>
    </section>
  );
}

export default Interests;
