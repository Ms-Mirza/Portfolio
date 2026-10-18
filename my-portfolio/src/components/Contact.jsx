import { profile } from "../data/profile";

function Contact() {
  return (
    <section className="content-section" id="contact">
      <p className="eyebrow">GET IN TOUCH</p>
      <h2>Let's connect.</h2>

      <p>
        I'm interested in connecting with developers, learning from the tech
        community, and discussing software engineering, data science, and AI.
      </p>

      <div className="hero-actions">
        <a
          className="button primary"
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Email Me ↗
        </a>

        <a
          className="button secondary"
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>

      <div className="contact-links">
        <a href={profile.links.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>

        <a href={profile.links.leetcode} target="_blank" rel="noreferrer">
          LeetCode ↗
        </a>
      </div>
    </section>
  );
}

export default Contact;
