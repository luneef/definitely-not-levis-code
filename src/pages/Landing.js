import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/landing/landing.css";
import winterHero from "../assets/images/wintersamp.jpg";
import redHero from "../assets/images/redsamp.jpg";

const Landing = ({ viewCart }) => {
  const winterStyle = {
    backgroundImage: `url(${winterHero})`,
  };
  const redStyle = {
    backgroundImage: `url(${redHero})`,
  };

  const [hero, setHero] = useState(winterStyle);
  //const [clothes, setClothes] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setHero(redStyle);
    }, 8000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);

  //console.log(hero);

  return (
    <main
      style={viewCart ? { marginRight: "270px" } : {}}
      className="landing-main"
    >
      <section className="hero-container" style={hero}>
        <div>
          <div className="hero-product">
            <h1>Hero Banner</h1>
          </div>
          <div className="herobtn-container">
            <button
              style={hero === winterStyle ? { backgroundColor: "blue" } : {}}
              onClick={() => setHero(winterStyle)}
            >
              Winter
            </button>

            <button
              style={hero === redStyle ? { backgroundColor: "red" } : {}}
              onClick={() => setHero(redStyle)}
            >
              Red
            </button>
          </div>
        </div>
      </section>

      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>
      <h1>HEY</h1>

      <section className="gender-category">
        <Link to="/men/all">MEN</Link>
        <Link to="/women/all">WOMEN</Link>
        <Link to="/unisex/all">Unisex</Link>
      </section>
    </main>
  );
};

export default Landing;
