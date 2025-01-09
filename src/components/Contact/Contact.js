import { useRef } from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing Font Awesome icons
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qwhuz8h", "template_l6tajd3", form.current, {
        publicKey: "2KundOAbJzBT_6tnl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email Sent Successfully");
          form.current.reset();
          navigate("/");
          setTimeout(() => {
            scroll.scrollToTop({
              duration: 500,
              smooth: true,
              offset: -100,
            });
          }, 100);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Have a project in mind? Feel free to reach out to me.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            className="contactInput"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Email"
            className="contactInput"
            required
          />
          <textarea
            placeholder="Message"
            name="message"
            rows="3"
            className="contactInput"
            required
          />
          <br/>
          <button type="submit" name="Send" className="contactBtn">
            Send
          </button>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/chethankacham/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://github.com/ChethanKacham/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <FaGithub className="icon" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
