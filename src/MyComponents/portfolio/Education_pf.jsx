import "./Education.css";

function Education_pf() {
  const education = [
    {
      degree: "B.Tech in Mechanical Engineering",
      institute: "Avanthi St. Theresa Institute of Engineering & Technology",

      year: "2015 – 2019",
    },
    {
      degree: "Intermediate (M.P.C)",
      institute: "B.V.K Junior College",

      year: "2013 – 2015",
    },
    {
      degree: "SSC",
      institute: "Z.P.G. High School",

      year: "2011 – 2012",
    },
  ];

  return (
    <section id="education" className="edu-section ">
      <h2 className="edu-title mt-4"> Education</h2>

      <div className="edu-grid">
        {education.map((edu, i) => (
          <div key={i} className="edu-card" data-aos="fade-up">
            <div className="edu-header">
              <span className="edu-badge">{edu.year}</span>
            </div>
            <div className="edu-body">
              <h3>{edu.degree}</h3>
              <p className="institute">{edu.institute}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education_pf;
