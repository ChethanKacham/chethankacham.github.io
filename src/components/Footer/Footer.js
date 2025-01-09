import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContent">
            <div className="footerLinks">
                    <a
                        href="https://www.linkedin.com/in/chethankacham/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footerIcon"
                        aria-label="LinkedIn"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        href="https://github.com/ChethanKacham/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footerIcon"
                        aria-label="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <p className="footerText">
                    &copy; {new Date().getFullYear()} Chethan Kacham. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
