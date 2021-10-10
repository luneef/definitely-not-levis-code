import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "../styles/clothing/clothing.css";
import emptybox from "../assets/images/emptybox.png";

const UnisexClothing = ({ viewCart }) => {
  const [clotheType, setClotheType] = useState([]);
  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    document.title = `Definitely Not Levi's - Unisex - ${
      id.charAt(0).toUpperCase() + id.substring(1)
    }`;

    window.scrollTo(0, 0);

    if (id === "all") {
      if (JSON.parse(localStorage.getItem("unisexClothes"))) {
        setClotheType(JSON.parse(localStorage.getItem("unisexClothes")));
      }
    } else if (id === "jackets") {
      if (JSON.parse(localStorage.getItem("unisexJackets"))) {
        setClotheType(JSON.parse(localStorage.getItem("unisexJackets")));
      }
    } else if (id === "sweatshirts") {
      if (JSON.parse(localStorage.getItem("unisexSweatshirts"))) {
        setClotheType(JSON.parse(localStorage.getItem("unisexSweatshirts")));
      }
    } else if (id === "pants") {
      if (JSON.parse(localStorage.getItem("unisexPants"))) {
        setClotheType(JSON.parse(localStorage.getItem("unisexPants")));
      }
    } else if (id === "shirts") {
      if (JSON.parse(localStorage.getItem("unisexShirts"))) {
        setClotheType(JSON.parse(localStorage.getItem("unisexShirts")));
      }
    } else if (id === "headwear") {
      if (JSON.parse(localStorage.getItem("unisexHeadwear"))) {
        setClotheType(JSON.parse(localStorage.getItem("unisexHeadwear")));
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
            history.push("/unisex/all");
          }}
        >
          All
        </button>

        <button
          style={id === "jackets" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/unisex/jackets");
          }}
        >
          Jackets
        </button>

        <button
          style={
            id === "sweatshirts" ? { backgroundSize: "100% 3px, auto" } : {}
          }
          onClick={() => {
            history.push("/unisex/sweatshirts");
          }}
        >
          Sweatshirts
        </button>

        <button
          style={id === "shirts" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/unisex/shirts");
          }}
        >
          T-Shirts
        </button>

        <button
          style={id === "pants" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/unisex/pants");
          }}
        >
          Pants
        </button>

        <button
          style={id === "headwear" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/unisex/headwear");
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
                      to={`/unisex/item/${item.id}`}
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

export default UnisexClothing;
