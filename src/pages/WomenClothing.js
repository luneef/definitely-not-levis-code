import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "../styles/clothing/clothing.css";
import emptybox from "../assets/images/emptybox.png";

const WomenClothing = ({ viewCart }) => {
  const [clotheType, setClotheType] = useState([]);
  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    document.title = `Definitely Not Levi's - Women - ${
      id.charAt(0).toUpperCase() + id.substring(1)
    }`;

    window.scrollTo(0, 0);

    if (id === "all") {
      if (JSON.parse(localStorage.getItem("womenClothes"))) {
        setClotheType(JSON.parse(localStorage.getItem("womenClothes")));
      }
    } else if (id === "jackets") {
      if (JSON.parse(localStorage.getItem("womenJackets"))) {
        setClotheType(JSON.parse(localStorage.getItem("womenJackets")));
      }
    } else if (id === "tops") {
      if (JSON.parse(localStorage.getItem("womenTops"))) {
        setClotheType(JSON.parse(localStorage.getItem("womenTops")));
      }
    } else if (id === "shorts") {
      if (JSON.parse(localStorage.getItem("womenShorts"))) {
        setClotheType(JSON.parse(localStorage.getItem("womenShorts")));
      }
    } else if (id === "dresses") {
      if (JSON.parse(localStorage.getItem("womenDresses"))) {
        setClotheType(JSON.parse(localStorage.getItem("womenDresses")));
      }
    } else if (id === "shirts") {
      if (JSON.parse(localStorage.getItem("womenShirts"))) {
        setClotheType(JSON.parse(localStorage.getItem("womenShirts")));
      }
    } else if (id === "pants") {
      if (JSON.parse(localStorage.getItem("womenPants"))) {
        setClotheType(JSON.parse(localStorage.getItem("womenPants")));
      }
    } else if (id === "sweatshirts") {
      if (JSON.parse(localStorage.getItem("womenSweatshirts"))) {
        setClotheType(JSON.parse(localStorage.getItem("womenSweatshirts")));
      }
    } else if (id === "headwear") {
      if (JSON.parse(localStorage.getItem("womenHeadwear"))) {
        setClotheType(JSON.parse(localStorage.getItem("womenHeadwear")));
      }
    } else {
      console.log("%cInvalid category", "color: red");
    }

    // eslint-disable-next-line
  }, [id]);

  return (
    <main
      style={viewCart ? { marginRight: "270px" } : {}}
      className="clothing-main"
    >
      <section className="category-list">
        <button
          style={id === "all" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/women/all");
          }}
        >
          All
        </button>

        <button
          style={id === "dresses" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/women/dresses");
          }}
        >
          Dresses
        </button>

        <button
          style={id === "jackets" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/women/jackets");
          }}
        >
          Jackets
        </button>

        <button
          style={
            id === "sweatshirts" ? { backgroundSize: "100% 3px, auto" } : {}
          }
          onClick={() => {
            history.push("/women/sweatshirts");
          }}
        >
          Sweatshirts
        </button>

        <button
          style={id === "shirts" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/women/shirts");
          }}
        >
          T-Shirts
        </button>

        <button
          style={id === "tops" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/women/tops");
          }}
        >
          Tops
        </button>

        <button
          style={id === "pants" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/women/pants");
          }}
        >
          Pants
        </button>

        <button
          style={id === "shorts" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/women/shorts");
          }}
        >
          Shorts
        </button>

        <button
          style={id === "headwear" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/women/headwear");
          }}
        >
          Headwear
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
                      to={`/women/item/${item.id}`}
                    >
                      <img src={item.media.source} alt={item.name} />
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
            <p>Please try going back or</p>
            <p>reloading the page.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default WomenClothing;
