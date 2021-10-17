import { useEffect } from "react";
import "../styles/pagenotfound/pagenotfound.css";
import pagenotfoundimgwebp from "../assets/images/webpimages/pnfimg.webp";
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
      <picture>
        <source type="image/webp" srcset={pagenotfoundimgwebp} />
        <img
          className="pnfsticker"
          src={pagenotfoundimg}
          alt="Page Not Found"
        />
      </picture>

      <img className="oops" src={oops} alt="Oops" />

      <p>Looks like the page or item doesn't exist.</p>
      <div>Try going back or reloading.</div>
    </main>
  );
};

export default PageNotFound;
