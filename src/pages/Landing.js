import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/landing/landing.css";
import winterHero from "../assets/images/winterheroimg.jpg";
import headwearHero from "../assets/images/headwearheroimg.jpg";
import storyimg1 from "../assets/images/storypic1.jpg";
import storyimg2 from "../assets/images/storypic2.jpg";
import ftr1img from "../assets/images/landingproducts/darkgraceimg.jpg";
import ftr2img from "../assets/images/landingproducts/harlemimg.jpg";
import menimg from "../assets/images/landingproducts/levishirtimg.jpg";
import womenimg from "../assets/images/landingproducts/blackjackimg.jpg";
import uniseximg from "../assets/images/landingproducts/koleidimg.jpg";
import { FaGenderless } from "react-icons/fa";

const Landing = ({ viewCart }) => {
  const [hero, setHero] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = `Definitely Not Levi's - Home`;

    setHero(winterHero);

    const timer = setTimeout(() => {
      setHero(headwearHero);
    }, 6000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);

  return (
    <main
      style={viewCart ? { marginRight: "270px" } : {}}
      className="landing-main"
    >
      <section
        className="hero-container"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="hero-product">
          {hero === winterHero ? (
            <div className="winterprods-hero">
              <h1>WINTER COLLECTION</h1>
              <h1 style={{ marginBottom: "0.5em" }}>SPECIAL</h1>
              <Link className="winterlink-hero" to="/winter-collection/all">
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="headwearprods-hero">
              <h1>NEW-FASHIONED HATS {"&"} CAPS</h1>

              <Link className="headwearlink-hero" to="/unisex/headwear">
                Choose Hat
              </Link>
            </div>
          )}
        </div>

        <div className="herobtn-container">
          <button onClick={() => setHero(winterHero)}>
            <FaGenderless
              title="Winter Collection Banner"
              style={hero === winterHero ? { color: "white" } : {}}
              className="winter-ring"
            />
          </button>

          <button onClick={() => setHero(headwearHero)}>
            <FaGenderless
              title="Headwear Collection Banner"
              style={hero === headwearHero ? { color: "white" } : {}}
              className="winter-ring"
            />
          </button>
        </div>
      </section>

      <section className="featured-container">
        <div
          style={{ marginBottom: "8em" }}
          className="featured-item ftrd-item1"
        >
          <img src={ftr1img} alt="Grace Ultra Dark Jacket" />

          <div
            style={viewCart ? { marginLeft: "7em" } : {}}
            className="ftrd-text ftrd1"
          >
            <h2>It's Not About Brand. It's About Style</h2>
            <p>
              Style has become very important, the whole idea of style, what
              your personal style is. It’s your identity. Real style is never
              right or wrong. It’s a matter of being yourself on purpose.
            </p>

            <Link className="first-link" to="/unisex/item/prod_O3bR5XB9KQwnzd">
              Check Grace Ultra Dark Jacket
            </Link>
          </div>
        </div>

        <div className="featured-item ftrd-item2">
          <div
            style={viewCart ? { marginRight: "7em" } : {}}
            className="ftrd-text ftrd2"
          >
            <h2>Clothes Mean Nothing Until Someone Lives In Them</h2>
            <p>
              Fashion is part of the daily air and it changes all the time, with
              all the events. You can even see the approaching of a revolution
              in clothes. You can see and feel everything in clothes.
              <br />
              <span style={{ fontStyle: "italic" }}>- Diana Vreeland</span>
            </p>

            <Link className="second-link" to="/women/item/prod_VPvL5z30LOlAQk">
              Check Harlem NYC T-Shirt
            </Link>
          </div>

          <img src={ftr2img} alt="Harlem NYC T-Shirt" />
        </div>
      </section>

      <section
        style={viewCart ? { padding: "4em 3em" } : {}}
        className="genderland-container"
      >
        <div className="genderland-men">
          <Link to="/men/all">
            <img src={menimg} alt="Men" />

            <h1>
              <span>Shop / </span>MEN
            </h1>
          </Link>
        </div>

        <div className="genderland-women">
          <Link to="/women/all">
            <img src={womenimg} alt="Women" />

            <h1>
              <span>Shop / </span>WOMEN
            </h1>
          </Link>
        </div>

        <div className="genderland-unisex">
          <Link to="/unisex/all">
            <img src={uniseximg} alt="Unisex" />

            <h1>
              <span>Shop / </span>UNISEX
            </h1>
          </Link>
        </div>
      </section>

      <section className="stories-container">
        <h1>#LeviStories</h1>

        <div className="story">
          <img src={storyimg1} alt="Levi's Story" />

          <div className="story1-text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              nostrum ab exercitationem eos quidem cumque alias! Perspiciatis
              totam dignissimos illum laborum molestias amet, numquam a commodi
              minus, culpa suscipit exercitationem.
            </p>
            <h3>Maggie Mendell</h3>
            <p style={{ fontStyle: "normal" }}>Fashion Model</p>
          </div>
        </div>

        <section>
          <div className="story story2">
            <div className="story2-text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis nostrum ab exercitationem eos quidem cumque alias!
                Perspiciatis totam dignissimos illum laborum molestias amet,
                numquam a commodi minus, culpa suscipit exercitationem. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo
                possimus similique voluptatum quos quis doloremque assumenda.
              </p>
              <h3>Jane Doe</h3>
              <p style={{ fontStyle: "normal" }}>Social Media Influencer</p>
            </div>
            <img src={storyimg2} alt="Levi's Story" />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Landing;
