import { profile } from "../data/profile";

function Hero() {
  return (
    <section className="hero" id="home">
      <p className="eyebrow">SOFTWARE ENGINEERING STUDENT</p>

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

        <a className="button secondary" href="#contact">
          Get in Touch ↗
        </a>

        <a className="button secondary" href="/mirza-resume.pdf" download>
          Download Resume ↓
        </a>
      </div>

      <div className="interests">
        {profile.interests.map((interest) => (
          <span key={interest}>{interest}</span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
