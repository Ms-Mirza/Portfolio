
import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#home">
          Salah<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </nav>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${
            theme === "dark" ? "light" : "dark"
          } theme`}
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      <main>
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
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>

          <div className="interests">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Data Science</span>
            <span>AI Agents</span>
          </div>
        </section>

        <section className="content-section" id="about">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Learning by building.</h2>
          <p>
            I'm developing my software engineering
            foundations while exploring how AI can solve
            practical problems. I enjoy learning new
            technologies and turning ideas into useful tools.
          </p>
        </section>

        <section className="content-section" id="projects">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Projects I'm building.</h2>

          <article className="project-card">
            <div className="project-number">01 / PRODUCTIVITY</div>
            <h3>FocusShield</h3>
            <p>
              A Chrome extension designed to reduce
              distractions from YouTube Shorts and Facebook
              Reels through content blocking and user controls.
            </p>
            <div className="project-tags">
              <span>JavaScript</span>
              <span>Chrome Extensions</span>
              <span>Browser Storage</span>
            </div>
            <p className="project-note">
              Add your actual repository and demo links here.
            </p>
          </article>
        </section>
      </main>

      <footer>
        <p>
          Designed and built by Mirza Mohammad Salah Uddin.
        </p>
        <p>Learning, building, and improving.</p>
      </footer>
    </div>
  );
}

export default App;
