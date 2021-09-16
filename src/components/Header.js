import { Link } from "react-router-dom";
import "../styles/header/header.css";

const Header = ({ cartcount }) => {
  return (
    <header className="shop-header">
      <Link to="/">Home</Link>
      <Link to="/about">About Page</Link>
      <Link to="/cart">Cart ({cartcount})</Link>
    </header>
  );
};

export default Header;
