import "./Timeline.css";

const timelineData = [
  {
    date: "AUG 2024 - PRESENT",
    title: "Full Stack Developer / DevOps Engineer",
    company: "AT DREAMSTUDIO",
    description: `
      Developed modular and scalable ReactJS components for the Feed Player application. Designed and implemented APIs to dynamically fetch and display images. Automated deployment workflows for NextJS applications.
    `,
  },
  {
    date: "AUG 2022 - MAY 2024",
    title: "Student",
    company: "AT UNIVERSITY OF CENTRAL MISSOURI",
    description: `
      Master of Science in Computer Science
      Topper of the Univeristy, GPA: 4.0.
    `,
  },
  {
    date: "JUN 2019 - AUG 2024",
    title: "Senior Project Engineer",
    company: "AT WIPRO LIMITED",
    description: `
      Designed and developed scalable user interfaces and backend APIs for enterprise-grade applications. Built and automated CI/CD pipelines to ensure seamless deployments across multi-cloud environments.
    `,
  },
  {
    date: "AUG 2015 - MAY 2019",
    title: "Student",
    company: "AT JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY",
    description: `
      Bachelor of Technology in Electronics & Communication Engineering 
      Focused on engineering principles, programming, and algorithms.
    `,
  },
  {
    date: "MAY 2018 - JULY 2018",
    title: "Software Developer Intern",
    company: "AT NUCLEAR FUEL COMPLEX",
    description: `
      Designed and developed the UI for the Study, Analysis, and Simulation of the control mechanism of the Vacuum Arc Melting Furnace.
    `,
  },
];

const Timeline = () => (
  <section id="timeline" className="timeline-section">
    <h2 className="timeline-heading">Work Experience & Education</h2>
    <p className="timeline-subheading">
      A comprehensive look at my professional journey and academic background.
    </p>
    <div className="timeline-container">
      {timelineData.map((item, index) => (
        <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
          <div className="timeline-badge">
            <div className="timeline-circle">
              <span className="timeline-date">{item.date}</span>
            </div>
          </div>
          <div className="timeline-card">
            <h3 className="timeline-title">{item.title}</h3>
            <h4 className="timeline-company">{item.company}</h4>
            {item.description
              .trim()
              .split("\n")
              .map((line, i) => (
                <p key={i} className="timeline-description no-spacing">{line.trim()}</p>
              ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Timeline;
