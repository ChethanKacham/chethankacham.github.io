import { useRef, useState } from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const formErrors = {};
    const formData = form.current;

    if (!formData.from_name.value.trim()) {
      formErrors.name = "Name is required.";
    }
    if (
      !formData.from_email.value.trim() ||
      !/\S+@\S+\.\S+/.test(formData.from_email.value)
    ) {
      formErrors.email = "Valid email is required.";
    }
    if (!formData.message.value.trim()) {
      formErrors.message = "Message cannot be empty.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .sendForm("service_qwhuz8h", "template_l6tajd3", form.current, {
        publicKey: "2KundOAbJzBT_6tnl",
      })
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          form.current.reset();
          setErrors({});
        },
        (error) => {
          console.error("Error sending email: ", error);
        }
      );
  };

  return (
    <section id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <div className="contact-container">
        {/* Left Side: Contact Info */}
        <div className="contact-left">
          <p className="contact-desc">
            I’m open to discussing new projects, creative ideas, or
            opportunities to work together.
          </p>
          <h3 className="contact-info-title">Contact Info:</h3>
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <a
                href="mailto:chethankacham06@gmail.com"
                className="info-text"
              >
                chethankacham06@gmail.com
              </a>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <span className="info-text">+1 (816) 256 0861</span>
            </div>
            <div className="info-item">
              <FaLinkedin className="info-icon" />
              <a
                href="https://www.linkedin.com/in/chethankacham/"
                target="_blank"
                rel="noopener noreferrer"
                className="info-text"
              >
                linkedin.com/in/chethankacham
              </a>
            </div>
            <div className="info-item">
              <FaGithub className="info-icon" />
              <a
                href="https://github.com/ChethanKacham"
                target="_blank"
                rel="noopener noreferrer"
                className="info-text"
              >
                github.com/ChethanKacham
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-card">
          <h2 className="form-title">Send Me a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="form-input"
            />
            {errors.name && <span className="error">{errors.name}</span>}
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="form-input"
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="form-input"
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
            <button type="submit" className="form-btn">
              Send Message
            </button>
            {successMessage && <span className="success">{successMessage}</span>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
