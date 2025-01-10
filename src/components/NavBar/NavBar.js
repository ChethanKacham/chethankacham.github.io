import { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/Clogocopy.png"
import contactImg from "../../assets/contact.png";
import { Link as ScrollLink } from "react-scroll";
import burgermenu from "../../assets/menu.png";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="logoContainer">
          <img
            src={logo}
            alt="logo"
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>

        {/* Desktop Menu */}
        <div className="desktopMenu">
          <ScrollLink
            to="intro"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="desktopMenuListItem"
            activeClass="active"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="desktopMenuListItem"
            activeClass="active"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="timeline"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="desktopMenuListItem"
            activeClass="active"
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="works"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="desktopMenuListItem"
            activeClass="active"
          >
            Portfolio
          </ScrollLink>
          <ScrollLink
            to="clients"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="desktopMenuListItem"
            activeClass="active"
          >
            Clients
          </ScrollLink>
        </div>

        {/* Contact Button */}
        <button
          className="desktopMenuBtn"
          onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
        >
          <img src={contactImg} alt="Contact" className="desktopMenuImg" />
          Contact Me
        </button>

        {/* Mobile Menu Icon */}
        <img
          src={burgermenu}
          alt="Menu"
          className="mobileMenu"
          onClick={() => setShowMenu(!showMenu)}
        />

        {/* Overlay */}
        {showMenu && (
          <div
            className="navOverlay show"
            onClick={() => setShowMenu(false)}
          ></div>
        )}

        {/* Mobile Menu */}
        <div className={`navMenu ${showMenu ? "show" : ""}`}>
          <span className="closeMenu" onClick={() => setShowMenu(false)}>
            &times;
          </span>
          <ScrollLink
            to="intro"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="timeline"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="works"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </ScrollLink>
          <ScrollLink
            to="clients"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Clients
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Contact Me
          </ScrollLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
