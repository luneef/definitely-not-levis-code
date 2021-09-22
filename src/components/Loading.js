import "../styles/loading/loading.css";
import loadingLogo from "../assets/images/transparentlogo.png";

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={loadingLogo} alt="Not Levi's Logo" />
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h3>Getting things ready for you...</h3>
    </div>
  );
};

export default Loading;
