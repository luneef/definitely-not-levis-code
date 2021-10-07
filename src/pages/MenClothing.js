import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "../styles/clothing/clothing.css";
import emptybox from "../assets/images/emptybox.png";

const MenClothing = ({ viewCart }) => {
  const [clotheType, setClotheType] = useState([]);
  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    document.title = `Definitely Not Levi's - Men - ${
      id.charAt(0).toUpperCase() + id.substring(1)
    }`;

    window.scrollTo(0, 0);

    if (id === "all") {
      if (JSON.parse(localStorage.getItem("menClothes"))) {
        setClotheType(JSON.parse(localStorage.getItem("menClothes")));
      }
    } else if (id === "jackets") {
      if (JSON.parse(localStorage.getItem("menJackets"))) {
        setClotheType(JSON.parse(localStorage.getItem("menJackets")));
      }
    } else if (id === "sleeves") {
      if (JSON.parse(localStorage.getItem("menSleeves"))) {
        setClotheType(JSON.parse(localStorage.getItem("menSleeves")));
      }
    } else if (id === "shirts") {
      if (JSON.parse(localStorage.getItem("menShirts"))) {
        setClotheType(JSON.parse(localStorage.getItem("menShirts")));
      }
    } else if (id === "pants") {
      if (JSON.parse(localStorage.getItem("menPants"))) {
        setClotheType(JSON.parse(localStorage.getItem("menPants")));
      }
    } else if (id === "shorts") {
      if (JSON.parse(localStorage.getItem("menShorts"))) {
        setClotheType(JSON.parse(localStorage.getItem("menShorts")));
      }
    } else if (id === "headwear") {
      if (JSON.parse(localStorage.getItem("menHeadwear"))) {
        setClotheType(JSON.parse(localStorage.getItem("menHeadwear")));
      }
    } else {
      history.push("/notfound");
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
            history.push("/men/all");
          }}
        >
          All
        </button>

        <button
          style={id === "jackets" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/men/jackets");
          }}
        >
          Jackets
        </button>

        <button
          style={id === "sleeves" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/men/sleeves");
          }}
        >
          Sleeves
        </button>

        <button
          style={id === "shirts" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/men/shirts");
          }}
        >
          T-Shirts
        </button>

        <button
          style={id === "pants" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/men/pants");
          }}
        >
          Pants
        </button>

        <button
          style={id === "shorts" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/men/shorts");
          }}
        >
          Shorts
        </button>

        <button
          style={id === "headwear" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            history.push("/men/headwear");
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
                      to={`/men/item/${item.id}`}
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
            <p>Please try reloading</p>
            <p>the page.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default MenClothing;
