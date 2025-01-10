import { useState } from "react";
import "./Skills.css";
import skillData from "./skillsData";

const Skills = () => {
  const [selectedOption, setSelectedOption] = useState("skillCategories");
  const [selectedCategory, setSelectedCategory] = useState(
    skillData.skillCategories.categories[0] // Default to the first category
  );

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setSelectedCategory(skillData[option]?.categories[0]); // Default to the first category for the selected option
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    // Scroll to details only on click (for smaller screens)
    if (window.innerWidth < 700) {
      const detailsElement = document.querySelector(".skills-details");
      if (detailsElement) {
        detailsElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const currentData = skillData[selectedOption];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2 className="skills-heading">MY SKILLS</h2>
        <p className="skills-overview">
          Explore my expertise across various domains, including frontend and backend development,
          frameworks, cloud services, and DevOps tools.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="skills-toggle">
        <button
          className={`toggle-button ${
            selectedOption === "skillCategories" ? "active" : ""
          }`}
          onClick={() => handleOptionChange("skillCategories")}
        >
          Skill Categories
        </button>
        <button
          className={`toggle-button ${
            selectedOption === "techStack" ? "active" : ""
          }`}
          onClick={() => handleOptionChange("techStack")}
        >
          Technology Stack
        </button>
      </div>

      {/* Skills Content */}
      <div className="skills-content">
        {/* Left Side */}
        <div className="skills-left">
          {currentData.categories.map((category) => (
            <div
              key={category}
              className={`category-card ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <h3 className="category-title">{category}</h3>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="skills-details">
          <h3 className="details-heading">{selectedCategory}</h3>
          {selectedOption === "skillCategories" || selectedOption === "techStack" ? (
            selectedCategory === "Certifications" ? (
              <div className="certifications-container">
                {currentData.details[selectedCategory].map((cert, index) => (
                  <div key={index} className="certification-card">
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certification-link"
                      >
                        {cert.name}
                      </a>
                    ) : (
                      <span className="certification-name">{cert.name}</span>
                    )}
                  </div>
                ))}
              </div>
            ) : selectedOption === "skillCategories" ? (
              <div className="progress-bars">
                {currentData.details[selectedCategory].map((item) => (
                  <div key={item.name} className="progress-bar">
                    <span className="progress-name">{item.name}</span>
                    <div className="progress">
                      <div
                        className="progress-filled"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="tech-grid">
                {currentData.details[selectedCategory].map((tech, index) => (
                  <div key={index} className="tech-item">
                    {tech}
                  </div>
                ))}
              </div>
            )
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Skills;
