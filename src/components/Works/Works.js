import "./Works.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Works = () => {
    const projects = [
        {
            id: 1,
            name: "Stock Prediction",
            description: "A machine learning-based project predicting stock prices using regression models with S&P500 data.",
            technologies: ["Python", "Machine Learning", "Jupyter Notebook"],
            github: "https://github.com/ChethanKacham/StockPrediction",
        },
        {
            id: 2,
            name: "Products Inventory Application",
            description: "A user-friendly inventory management system with Firebase Authentication, dynamic charts, and role-based access.",
            technologies: ["ReactJS", "Firebase", "NodeJS", "ChartJS", "CSS"],
            github: "https://github.com/ChethanKacham/ProductsInventory",
        },
        {
            id: 3,
            name: "Online Assessment",
            description: "A web-based quiz application for Spring/Hibernate technology with instant results and embedded database.",
            technologies: ["Java", "Spring Boot", "JSP", "H2 Database"],
            github: "https://github.com/ChethanKacham/OnlineAssessment",
        },
        {
            id: 4,
            name: "Student Course Management System",
            description: "A Windows application built with C# .NET for managing students, teachers, and courses with database integration.",
            technologies: ["C#", ".NET Framework", "SQL Server"],
            github: "https://github.com/ChethanKacham/StudentCourseManagement",
        },
        {
            id: 5,
            name: "Book Store Application",
            description: "A CRUD application built using React.js for managing books stored in an in-memory JSON file.",
            technologies: ["ReactJS", "NodeJS", "JSON Server", "JavaScript", "CSS"],
            github: "https://github.com/ChethanKacham/BookStoreApp",
        },
        {
            id: 6,
            name: "Best Choice Cars",
            description: "A Spring Boot application for filtering and selecting cars by price and brand using an in-memory database.",
            technologies: ["Java", "Spring Boot", "JSP", "H2 Database"],
            github: "https://github.com/ChethanKacham/BestChoiceCars",
        },
        {
            id: 7,
            name: "Scheduling Algorithms",
            description: "A Java-based project implementing various CPU scheduling algorithms with CSV input support.",
            technologies: ["Java", "CSV Parsing", "Console Application"],
            github: "https://github.com/ChethanKacham/SchedulingAlgorithms",
        },
    ];

    return (
        <section className="works" id="works">
            <div className="worksContainer">
                <h2 className="worksTitle">My Projects</h2>
                <p className="worksSubtitle">A showcase of my recent projects and technical expertise.</p>
                <div className="worksGrid">
                    {projects.map((project) => (
                        <div className="worksCard" key={project.id}>
                            <div className="cardHeader">
                                <h3 className="projectName">{project.name}</h3>
                            </div>
                            <p className="projectDescription">{project.description}</p>
                            <div className="technologies">
                                {project.technologies.map((tech, index) => (
                                    <span className="techBadge" key={index}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projectButton"
                            >
                                <FontAwesomeIcon icon={faGithub} className="githubIcon" /> View on GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;
