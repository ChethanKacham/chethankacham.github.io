import React, { useState } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const [selectedCategory, setSelectedCategory] = useState('Frontend');

  const skills = {
    Frontend: ['ReactJS', 'NextJS', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    Backend: ['Java', 'Spring Boot', 'NodeJS', 'Python', 'C#', 'Groovy'],
    DevOps: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible', 'OpenShift', 'Git', 'Dynatrace', 'JIRA'],
    Cloud: ['AWS', 'Azure'],
    Databases: ['MySQL', 'MongoDB'],
    Certifications: [
      'AWS Certified Developer Associate',
      'Microsoft Azure Administrator Associate',
      'Java Back End Developer Certified',
      'ReactJS Front End Developer Certified',
      'DevOps Professional Certified',
    ],
  };

  return (
    <div className="about-me-container">
      <h1 className="about-me-heading">About Me</h1>
      <p className="about-me-description">
        I am a Full Stack Developer and DevOps Engineer with expertise in building scalable web applications, automating workflows, and managing cloud infrastructure.
      </p>
      <div className="about-me-content">
        <div className="skills-list">
          {Object.keys(skills).map((category) => (
            <div
              key={category}
              className={`skill-card ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="skills-details">
          <h2>{selectedCategory}</h2>
          <ul>
            {skills[selectedCategory].map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;