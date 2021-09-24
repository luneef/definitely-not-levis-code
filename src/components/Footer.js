import "../styles/footer/footer.css";
import { Link } from "react-router-dom";

const Footer = ({ viewCart }) => {
  return (
    <footer
      style={viewCart ? { marginRight: "270px" } : {}}
      className="footer-main"
    >
      <Link className="about-link" to="/about">
        ABOUT - DEFINITELY NOT LEVI'S
      </Link>

      <div className="footer-copyright">
        <p>© Copyright 2021 Definitely Not Levi's</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
