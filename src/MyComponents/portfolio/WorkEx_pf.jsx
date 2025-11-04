import { motion } from "framer-motion";
import "./Workex.css";

function WorkEx_pf() {
  const experiences = [
    {
      role: "Associate Developer",
      company: "Rajasree Townships",
      duration: "Nov 2024 – Apr 2025",
      client: "In-house Real Estate Platform",
      description: [
        "Designed and implemented mobile-first layouts using Bootstrap and React JS.",
        "Created reusable React components, improving development efficiency and maintainability.",
        "Enhanced UI/UX using AOS animations and dynamic JavaScript interactions.",
        "Performed API testing with Postman and Insomnia to ensure reliable integration.",
        "Collaborated with backend teams for REST API integration and optimized overall UI performance.",
      ],
      tech: "React.js | JavaScript (ES6+) | Bootstrap | Tailwind CSS | AOS",
    },
    {
      role: "Associate Software Developer",
      company: "IQ Gateway Pvt. Ltd.",
      duration: "Sep 2022 – Nov 2023",
      client: "EdTech Product – Learning Management System",
      description: [
        "Developed responsive web pages using HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React JS.",
        "Implemented REST API integration to deliver dynamic and data-driven content.",
        "Collaborated with designers to ensure pixel-perfect and responsive UI/UX implementation.",
        "Participated in code reviews and maintained project quality and performance standards.",
        "Improved page load speed by optimizing components and minimizing re-renders in React.",
        "Assisted in product design validation and cross-functional engineering reviews.",
      ],
      tech: "React.js | JavaScript (ES6+) | Tailwind CSS | Bootstrap | REST APIs",
    },
    {
      role: "Tele Sales Executive — Digital Education Department",
      company: "T.I.M.E (Triumphant Institute of Management Education Pvt. Ltd.)",
      duration: "May 2024 – Nov 2024",
      client: "Educational Product Campaigns",
      description: [
        "Managed client outreach and digital sales campaigns for education solutions.",
        "Maintained accurate client records and achieved set performance targets.",
        "Strengthened communication and customer service skills through consistent interaction.",
      ],
      tech: "CRM Software | MS Excel | Email Communication Tools",
    },
    {
      role: "Associate – Operations",
      company: "WNS Global Services",
      duration: "Apr 2021 – Mar 2022",
      client: "Business Process Management (Operations Division)",
      description: [
        "Managed data analysis and reporting to improve workflow efficiency.",
        "Automated Excel-based dashboards, enhancing reporting accuracy and timeliness.",
        "Supported process documentation and performance tracking initiatives.",
      ],
      tech: "MS Excel | Power BI (Basics) | Data Reporting Tools",
    },
    {
      role: "Design Engineer",
      company: "Sayantrik Engineer India Pvt. Ltd.",
      duration: "Jun 2019 – Nov 2020",
      client: "Mechanical Component Design Projects",
      description: [
        "Created mechanical component models and CAD drawings using AutoCAD and SolidWorks.",
        "Assisted in product validation and ensured adherence to engineering quality standards.",
      ],
      tech: "AutoCAD | SP3D | Cyclon",
    },
  ];

  return (
    <section className="timeline-section mt-4" id="experience">
      <motion.h2
        className="timeline-title text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Professional Experience
      </motion.h2>

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h5>{exp.company}</h5>
              <p className="duration">{exp.duration}</p>
              <p className="client">
                <strong>Client:</strong> {exp.client}
              </p>
              <ul>
                {exp.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <p className="tech">
                <strong>Technologies:</strong> {exp.tech}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WorkEx_pf;
