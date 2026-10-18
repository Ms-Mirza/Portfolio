
import { profile } from "../data/profile";

function Hero() {
  return (
    <section className="hero hero-layout" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          SOFTWARE ENGINEERING STUDENT
        </p>

        <h1>
          {profile.headlineStart}
          <br />
          <span>{profile.headlineEnd}</span>
        </h1>

        <p className="intro">{profile.introduction}</p>

        <div className="hero-actions">
          <a className="button primary" href="#projects">
            Explore Projects ↗
          </a>

          <a
            className="button secondary"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>

        <div className="interests">
          {profile.interests.map((interest) => (
            <span key={interest}>{interest}</span>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-label="Illustration of an AI and data workflow">
        <div className="visual-glow" />

        <div className="visual-window">
          <div className="visual-window-header">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
            <span>learning_lab.py</span>
          </div>

          <div className="visual-code">
            <p><span>01</span> <b>focus</b> = "AI Engineering"</p>
            <p><span>02</span> <b>learn</b>("Machine Learning")</p>
            <p><span>03</span> <b>build</b>("Useful Solutions")</p>
            <p><span>04</span> <b>improve</b>(every_day=True)</p>
          </div>

          <div className="visual-divider" />

          <div className="visual-status">
            <span className="status-dot" />
            <span>Learning · Building · Improving</span>
          </div>
        </div>

        <div className="floating-chip chip-top">
          <span>∑</span> Data Science
        </div>

        <div className="floating-chip chip-bottom">
          <span>✳</span> AI & Automation
        </div>
      </div>
    </section>
  );
}

export default Hero;
