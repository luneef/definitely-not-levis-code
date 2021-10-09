import { useState, useEffect } from "react";
import "../styles/footer/footer.css";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";
import chat from "../assets/images/chat.png";
import { BsX } from "react-icons/bs";

const Footer = ({ viewCart }) => {
  const [cookieWarn, setCookieWarn] = useState(false);
  const [cookieSlide, setCookieSlide] = useState(false);
  const [contact, setContact] = useState(false);
  const [contactIcon, setContactIcon] = useState(true);

  const handleContactForm = () => {
    setContact(false);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cookiesWarn")) === "Accepted") {
      console.log("%cAlready warned about cookies.", "color: cyan");
    } else {
      localStorage.setItem("cookiesWarn", JSON.stringify("Warned"));

      setCookieWarn(true);
      const timer = setTimeout(() => {
        setCookieSlide(true);
      }, 4000);

      return () => clearTimeout(timer);
    }

    // eslint-disable-next-line
  }, []);

  return (
    <footer
      style={viewCart ? { marginRight: "270px" } : {}}
      className="footer-main"
    >
      {cookieWarn ? (
        <section
          style={
            viewCart
              ? cookieSlide
                ? { top: "81%", marginRight: "270px" }
                : { marginRight: "270px" }
              : cookieSlide
              ? { top: "81%" }
              : {}
          }
          className="cookie-warning"
        >
          <p>
            We use cookies to give you better <br /> online shopping experience.
          </p>
          <div>
            <button
              onClick={() => {
                setCookieWarn(false);
                localStorage.setItem("cookiesWarn", JSON.stringify("Accepted"));
              }}
            >
              OK
            </button>
            <Link className="privacy-warn" to="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
        </section>
      ) : (
        ""
      )}

      {contactIcon ? (
        <div className="contact-side">
          <button title="Close" onClick={() => setContactIcon(false)}>
            <BsX className="contactclose-icon" />
          </button>
          <button onClick={() => setContact(true)} className="contact-icon">
            <img src={chat} alt="Chat icon" />
          </button>
        </div>
      ) : (
        ""
      )}

      {contact ? <ContactUs handleContactForm={handleContactForm} /> : ""}

      <div className="flinks-container">
        <Link className="footer-links" to="/about">
          ABOUT
        </Link>

        <Link
          style={{ marginLeft: "3em" }}
          className="footer-links"
          to="/privacy-policy"
        >
          PRIVACY POLICY
        </Link>

        <button
          style={{ marginLeft: "3em" }}
          className="footer-links"
          onClick={() => setContact(true)}
        >
          CONTACT US
        </button>
      </div>
      <div className="footer-copyright">
        <p>© Copyright 2021 Definitely Not Levi's</p>
        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
