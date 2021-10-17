import { useState, useEffect } from "react";
import "../styles/loading/loading.css";
import loadinglogowebp from "../assets/images/webpimages/transparentlogo.webp";
import loadingLogo from "../assets/images/transparentlogo.png";

const Loading = ({ mess }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (mess === "cookiesDisabled") {
      setMessage(
        "Looks like your browser cookies are disabled. Please enable them to get the best shopping experience."
      );
    } else if (mess === "checkoutTime") {
      setMessage("Preparing your item/s for checkout . . .");
    } else {
      setMessage("Preparing the closet for you . . .");
    }
  }, [mess]);

  return (
    <div className="loading-container">
      <picture>
        <source type="image/webp" srcset={loadinglogowebp} />
        <img src={loadingLogo} alt="Not Levi's Logo" />
      </picture>

      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h3>{message}</h3>
    </div>
  );
};

export default Loading;
