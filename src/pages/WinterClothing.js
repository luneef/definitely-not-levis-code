import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "../styles/clothing/clothing.css";
import snowflake from "../assets/images/snowflake.png";
import winterbg from "../assets/images/winterbg.png";
import emptybox from "../assets/images/emptybox.png";

const WinterClothing = ({ viewCart }) => {
  const [clotheType, setClotheType] = useState([]);
  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    document.title = `Definitely Not Levi's - Winter Collection - ${
      id.charAt(0).toUpperCase() + id.substring(1)
    }`;

    window.scrollTo(0, 0);

    if (id === "all") {
      if (JSON.parse(localStorage.getItem("winterClothes"))) {
        setClotheType(JSON.parse(localStorage.getItem("winterClothes")));
      }
    } else if (id === "kids") {
      if (JSON.parse(localStorage.getItem("winterKidClothes"))) {
        setClotheType(JSON.parse(localStorage.getItem("winterKidClothes")));
      }
    } else if (id === "men") {
      if (JSON.parse(localStorage.getItem("winterMenClothes"))) {
        setClotheType(JSON.parse(localStorage.getItem("winterMenClothes")));
      }
    } else if (id === "women") {
      if (JSON.parse(localStorage.getItem("winterWomenClothes"))) {
        setClotheType(JSON.parse(localStorage.getItem("winterWomenClothes")));
      }
    } else {
      history.push("/notfound");
    }

    // eslint-disable-next-line
  }, [id]);

  return (
    <main
      style={
        viewCart
          ? {
              marginRight: "270px",
              backgroundImage: `url(${winterbg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
          : {
              backgroundImage: `url(${winterbg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
      }
      className="clothing-main"
    >
      <section className="category-list">
        <button
          style={id === "all" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/winter-collection/all");
          }}
        >
          All
        </button>

        <button
          style={id === "kids" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/winter-collection/kids");
          }}
        >
          Kids
        </button>

        <button
          style={id === "men" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/winter-collection/men");
          }}
        >
          Men
        </button>

        <button
          style={id === "women" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/winter-collection/women");
          }}
        >
          Women
        </button>
      </section>

      <section
        style={viewCart ? { marginLeft: "16em" } : {}}
        className="clothing-display"
      >
        {clotheType.length ? (
          <>
            {clotheType.map((item) => {
              return (
                <div className="clothing-item" key={item.id}>
                  <button>
                    <Link
                      className="clothingitem-name"
                      to={`/winter-collection/item/${item.id}`}
                    >
                      <img src={item.media.source} alt={item.name} />

                      <p style={{ color: "rgb(20, 140, 238)" }}>
                        Winter Collection
                        <img
                          style={{
                            width: "15px",
                            height: "15px",
                            marginLeft: "0.1em",
                          }}
                          src={snowflake}
                          alt="snowflake"
                        />
                      </p>
                      <p>{item.name}</p>
                    </Link>
                  </button>

                  <p className="clothingitem-price">
                    {item.price.formatted_with_symbol}
                  </p>
                </div>
              );
            })}
          </>
        ) : (
          <div className="clothing-noitems">
            <img src={emptybox} alt="Empty box" />
            <p style={{ fontWeight: "bold" }}>No Items Found !</p>
            <p>Please try reloading</p>
            <p>the page.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default WinterClothing;
