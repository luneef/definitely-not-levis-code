import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import "../styles/clothing/clothing.css";

const UnisexClothing = ({ viewCart }) => {
  const [clotheType, setClotheType] = useState([]);
  const [unisexClothes, setUnisexClothes] = useState([]);
  const [jackets, setJackets] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [pants, setPants] = useState([]);
  const [sweatshirts, setSweatshirts] = useState([]);
  const [headwear, setHeadwear] = useState([]);

  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    setUnisexClothes(JSON.parse(localStorage.getItem("unisexClothes")));
    setJackets(JSON.parse(localStorage.getItem("unisexJackets")));
    setShirts(JSON.parse(localStorage.getItem("unisexShirts")));
    setPants(JSON.parse(localStorage.getItem("unisexPants")));
    setSweatshirts(JSON.parse(localStorage.getItem("unisexSweatshirts")));
    setHeadwear(JSON.parse(localStorage.getItem("unisexHeadwear")));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (id === "all") {
      setClotheType(unisexClothes);
    } else if (id === "jackets") {
      setClotheType(jackets);
    } else if (id === "sweatshirts") {
      setClotheType(sweatshirts);
    } else if (id === "pants") {
      setClotheType(pants);
    } else if (id === "shirts") {
      setClotheType(shirts);
    } else if (id === "headwear") {
      setClotheType(headwear);
    } else {
      setClotheType(unisexClothes);
    }

    // eslint-disable-next-line
  }, [headwear]);

  useEffect(() => {
    document.title = `Definitely Not Levi's - Unisex - ${
      id.charAt(0).toUpperCase() + id.substring(1)
    }`;

    window.scrollTo(0, 0);

    if (id === "all") {
      setClotheType(unisexClothes);
    } else if (id === "jackets") {
      setClotheType(jackets);
    } else if (id === "sweatshirts") {
      setClotheType(sweatshirts);
    } else if (id === "pants") {
      setClotheType(pants);
    } else if (id === "shirts") {
      setClotheType(shirts);
    } else if (id === "headwear") {
      setClotheType(headwear);
    } else {
      setClotheType(unisexClothes);
    }

    // eslint-disable-next-line
  }, [id]);

  if (!clotheType.length) {
    return <Loading />;
  }
  return (
    <main
      style={viewCart ? { marginRight: "270px" } : {}}
      className="clothing-main"
    >
      <section className="category-list">
        <button
          style={id === "all" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(unisexClothes);
            history.push("/unisex/all");
          }}
        >
          All
        </button>

        <button
          style={id === "jackets" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(jackets);
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
            setClotheType(sweatshirts);
            history.push("/unisex/sweatshirts");
          }}
        >
          Sweatshirts
        </button>

        <button
          style={id === "shirts" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(shirts);
            history.push("/unisex/shirts");
          }}
        >
          T-Shirts
        </button>

        <button
          style={id === "pants" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(pants);
            history.push("/unisex/pants");
          }}
        >
          Pants
        </button>

        <button
          style={id === "headwear" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(headwear);
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
      </section>
    </main>
  );
};

export default UnisexClothing;
