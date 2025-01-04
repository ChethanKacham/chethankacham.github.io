import React, { useRef, useState, useEffect } from "react";
import "./Skills.css";
import skillData from "./skillsData";

const Skills = () => {
  const [selectedOption, setSelectedOption] = useState("skillCategories");
  const [selectedCategory, setSelectedCategory] = useState(
    skillData?.skillCategories?.categories?.[0] || "Default Category"
  );

  const detailsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700 && detailsRef.current) {
        detailsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setSelectedCategory(skillData[option]?.categories?.[0] || "Default Category");
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    // Scroll to the right section on small screens
    if (window.innerWidth < 700 && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentData = skillData[selectedOption];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2 className="skills-heading">Skills</h2>
        <p className="skills-overview">
          Explore my expertise across various domains, from frontend frameworks
          to cloud services and DevOps tools.
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
          {currentData?.categories?.map((category) => (
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
        <div className="skills-details" ref={detailsRef}>
          <h3 className="details-heading">{selectedCategory}</h3>
          {selectedOption === "skillCategories" ? (
            selectedCategory === "Certifications" ? (
              <div className="certifications-container">
                {currentData.details[selectedCategory]?.map((cert, index) => (
                  <div key={index} className="certification-card">
                    <p>{cert}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="progress-bars">
                {currentData?.details[selectedCategory]?.map((item) => (
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
            )
          ) : (
            <div className="tech-grid">
              {currentData?.details[selectedCategory]?.map((tech, index) => (
                <div key={index} className="tech-item">
                  {tech}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
