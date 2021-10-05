import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/landing/landing.css";
import winterHero from "../assets/images/winterheroimg.jpg";
import headwearHero from "../assets/images/headwearheroimg.jpg";
import storyimg1 from "../assets/images/storypic1.jpg";
import storyimg2 from "../assets/images/storypic2.jpg";
import { FaGenderless } from "react-icons/fa";

const Landing = ({ viewCart }) => {
  const [hero, setHero] = useState("");
  const [allClothes, setAllClothes] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    setHero(winterHero);

    setAllClothes(JSON.parse(localStorage.getItem("allClothes")));

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
      {allClothes ? (
        <div className="all-image">
          {allClothes.map((item) => (
            <img key={item.id} src={item.media.source} alt="Item Cache" />
          ))}
        </div>
      ) : (
        ""
      )}

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
              <h1 style={{ marginTop: "1.5em" }}>NEW-FASHIONED HATS</h1>
              <h1 style={{ marginBottom: "0.5em" }}>{"&"} CAPS</h1>
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
        <div style={{ marginBottom: "8em" }} className="featured-item">
          {allClothes.length ? (
            <img
              src={allClothes[147].media.source}
              alt="Grace Ultra Dark Jacket"
            />
          ) : (
            ""
          )}

          <div
            style={viewCart ? { marginLeft: "7em" } : { marginLeft: "10em" }}
            className="ftrd-text"
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

        <div className="featured-item">
          <div
            style={viewCart ? { marginRight: "7em" } : { marginRight: "10em" }}
            className="ftrd-text"
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

          {allClothes.length ? (
            <img src={allClothes[120].media.source} alt=" Harlem NYC T-Shirt" />
          ) : (
            ""
          )}
        </div>
      </section>

      <section
        style={viewCart ? { padding: "4em 3em" } : {}}
        className="genderland-container"
      >
        <div>
          <Link to="/men/all">
            {allClothes.length ? (
              <img src={allClothes[21].media.source} alt="Men" />
            ) : (
              ""
            )}

            <h1>
              <span style={{ fontWeight: "100" }}>Shop / </span>MEN
            </h1>
          </Link>
        </div>

        <div>
          <Link to="/women/all">
            {allClothes.length ? (
              <img src={allClothes[103].media.source} alt="Women" />
            ) : (
              ""
            )}

            <h1>
              <span style={{ fontWeight: "100" }}>Shop / </span>WOMEN
            </h1>
          </Link>
        </div>

        <div>
          <Link to="/unisex/all">
            {allClothes.length ? (
              <img src={allClothes[153].media.source} alt="Unisex" />
            ) : (
              ""
            )}

            <h1>
              <span style={{ fontWeight: "100" }}>Shop / </span>UNISEX
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
          <div className="story">
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
