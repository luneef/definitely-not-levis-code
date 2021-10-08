import { useState, useEffect } from "react";
import "../styles/loading/loading.css";
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
      <img src={loadingLogo} alt="Not Levi's Logo" />
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
