import { useState, useEffect } from "react";
import "../styles/footer/footer.css";
import { Link } from "react-router-dom";

const Footer = ({ viewCart }) => {
  const [cookieWarn, setCookieWarn] = useState(false);
  const [cookieSlide, setCookieSlide] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cookiesWarn"))) {
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
            <button onClick={() => setCookieWarn(false)}>OK</button>
            <Link className="privacy-warn" to="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
        </section>
      ) : (
        ""
      )}
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
      </div>
      <div className="footer-copyright">
        <p>© Copyright 2021 Definitely Not Levi's</p>
        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
