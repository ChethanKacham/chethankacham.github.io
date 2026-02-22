import "./Timeline.css";

const timelineData = [
  {
    date: "JAN 2026 - PRESENT",
    title: "Production Support Engineer III",
    company: "AT TRUIST FINANCIAL CORPORATION",
    employmentType: "Full-time",
    employmentTypeStyle: "fulltime",
    description: `Automated SSL certificate renewals, configured Pega App deployments via GitLab CI/CD in OpenShift, engineered DB2 to PostgreSQL migrations, and remediated enterprise Linux vulnerabilities through Qualys-driven security hardening.`,
  },
  {
    date: "FEB 2025 - DEC 2025",
    title: "DevOps Engineer",
    company: "AT TRUIST FINANCIAL CORPORATION",
    employmentType: "Contract",
    employmentTypeStyle: "contract",
    description: `Managed OpenShift clusters and GitLab CI/CD pipelines, automated infrastructure with Terraform and Ansible, built Dynatrace dashboards for real-time observability, and managed reliability for applications hosted in AWS & on-premises by diagnosing incidents and performing RCAs, and driving timely resolutions.`,
  },
  {
    date: "AUG 2024 - FEB 2025",
    title: "Full Stack Developer / DevOps Engineer",
    company: "AT DREAMSTUDIO",
    employmentType: "Full-time",
    employmentTypeStyle: "fulltime",
    description: `Developed modular and scalable ReactJS components for the Feed Player application. Designed and implemented APIs to dynamically fetch and display images. Automated deployment workflows for NextJS applications.`,
  },
  {
    date: "JUN 2019 - AUG 2024",
    title: "Project Engineer",
    company: "AT WIPRO LIMITED",
    employmentType: "Full-time",
    employmentTypeStyle: "fulltime",
    description: `Designed and developed scalable user interfaces and backend APIs for enterprise-grade applications. Built and automated CI/CD pipelines to ensure seamless deployments across multi-cloud environments.`,
  },
  {
    date: "MAY 2018 - JULY 2018",
    title: "Software Developer Intern",
    company: "AT NUCLEAR FUEL COMPLEX",
    employmentType: "Internship",
    employmentTypeStyle: "fulltime",
    description: `Designed and developed the UI for the Study, Analysis, and Simulation of the control mechanism of the Vacuum Arc Melting Furnace.`,
  },
  {
    date: "AUG 2022 - MAY 2024",
    title: "Master of Science in Computer Science",
    company: "AT UNIVERSITY OF CENTRAL MISSOURI",
    employmentType: "GPA: 4.0",
    employmentTypeStyle: "education",
    description: `Topper of the University. Focused on advanced algorithms, cloud computing, and full-stack development.`,
  },
  {
    date: "AUG 2015 - MAY 2019",
    title: "B.Tech in Electronics & Communication Engineering",
    company: "AT JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY",
    employmentType: "Education",
    employmentTypeStyle: "education",
    description: `Focused on engineering principles, programming, and algorithms with a strong foundation in electronics and communication systems.`,
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
            <span className={`timeline-employment-badge ${item.employmentTypeStyle}`}>
              {item.employmentType}
            </span>
            <p className="timeline-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Timeline;