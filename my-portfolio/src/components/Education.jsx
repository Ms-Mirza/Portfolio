
import { profile } from "../data/profile";

const education = [
  {
    qualification: "B.Sc. in Software Engineering",
    institution: "Daffodil International University",
    period: profile.studyPeriod,
    result: `CGPA: ${profile.cgpa}`,
  },
  {
    qualification: "Higher Secondary Certificate (HSC)",
    institution: "Chattogram Board",
    period: "2022",
    result: "GPA: 5.00 / 5.00",
  },
  {
    qualification: "Secondary School Certificate (SSC)",
    institution: "Chattogram Board",
    period: "2020",
    result: "GPA: 5.00 / 5.00",
  },
];

function Education() {
  return (
    <section className="content-section" id="education">
      <p className="eyebrow">ACADEMIC BACKGROUND</p>
      <h2>Education.</h2>

      <div className="education-list">
        {education.map((item) => (
          <article
            className="education-card"
            key={item.qualification}
          >
            <div>
              <h3>{item.qualification}</h3>
              <p>{item.institution}</p>
              <span className="education-period">
                {item.period}
              </span>
            </div>

            <span className="education-result">
              {item.result}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
