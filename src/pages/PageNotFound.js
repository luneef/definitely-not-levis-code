import { useEffect } from "react";
import "../styles/pagenotfound/pagenotfound.css";
import pagenotfoundimg from "../assets/images/pagenotfound.png";
import oops from "../assets/images/ooops.png";

const PageNotFound = ({ viewCart }) => {
  useEffect(() => {
    document.title = `Definitely Not Levi's - Not Found`;

    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      style={viewCart ? { marginRight: "270px" } : {}}
      className="pagenotfound-main"
    >
      <img className="pnfsticker" src={pagenotfoundimg} alt="Page Not Found" />
      <img className="oops" src={oops} alt="Oops" />

      <p>Looks like the page or item doesn't exist.</p>
      <div>Try going back or reloading.</div>
    </main>
  );
};

export default PageNotFound;
