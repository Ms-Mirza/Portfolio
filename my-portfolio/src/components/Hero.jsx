
function Hero() {
  return (
    <section className="hero" id="home">
      <p className="eyebrow">
        SOFTWARE ENGINEERING STUDENT
      </p>

      <h1>
        Building intelligent solutions
        <br />
        to <span>real-world problems.</span>
      </h1>

      <p className="intro">
        I'm Mirza Mohammad Salah Uddin, a Software
        Engineering student at Daffodil International
        University, exploring Machine Learning, Data
        Science, AI Agents, and Automation.
      </p>

      <div className="hero-actions">
        <a className="button primary" href="#projects">
          Explore Projects ↗
        </a>

        <a
          className="button secondary"
          href="#contact"
        >
          Get in Touch ↗
        </a>
      </div>

      <div className="interests">
        <span>Python</span>
        <span>Machine Learning</span>
        <span>Data Science</span>
        <span>AI Agents</span>
      </div>
    </section>
  );
}

export default Hero;
