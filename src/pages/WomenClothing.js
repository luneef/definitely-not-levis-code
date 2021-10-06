import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import "../styles/clothing/clothing.css";

const WomenClothing = ({ viewCart }) => {
  const [clotheType, setClotheType] = useState([]);
  const [womenClothes, setWomenClothes] = useState([]);
  const [jackets, setJackets] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [sweatshirts, setSweatshirts] = useState([]);
  const [pants, setPants] = useState([]);
  const [shorts, setShorts] = useState([]);
  const [tops, setTops] = useState([]);
  const [dresses, setDresses] = useState([]);
  const [headwear, setHeadwear] = useState([]);

  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    setWomenClothes(JSON.parse(localStorage.getItem("womenClothes")));
    setJackets(JSON.parse(localStorage.getItem("womenJackets")));
    setShirts(JSON.parse(localStorage.getItem("womenShirts")));
    setTops(JSON.parse(localStorage.getItem("womenTops")));
    setPants(JSON.parse(localStorage.getItem("womenPants")));
    setShorts(JSON.parse(localStorage.getItem("womenShorts")));
    setSweatshirts(JSON.parse(localStorage.getItem("womenSweatshirts")));
    setDresses(JSON.parse(localStorage.getItem("womenDresses")));
    setHeadwear(JSON.parse(localStorage.getItem("womenHeadwear")));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (id === "all") {
      setClotheType(womenClothes);
    } else if (id === "jackets") {
      setClotheType(jackets);
    } else if (id === "tops") {
      setClotheType(tops);
    } else if (id === "shorts") {
      setClotheType(shorts);
    } else if (id === "dresses") {
      setClotheType(dresses);
    } else if (id === "shirts") {
      setClotheType(shirts);
    } else if (id === "pants") {
      setClotheType(pants);
    } else if (id === "sweatshirts") {
      setClotheType(sweatshirts);
    } else if (id === "headwear") {
      setClotheType(headwear);
    } else {
      setClotheType(womenClothes);
    }

    // eslint-disable-next-line
  }, [headwear]);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (id === "all") {
      setClotheType(womenClothes);
    } else if (id === "jackets") {
      setClotheType(jackets);
    } else if (id === "tops") {
      setClotheType(tops);
    } else if (id === "shorts") {
      setClotheType(shorts);
    } else if (id === "dresses") {
      setClotheType(dresses);
    } else if (id === "shirts") {
      setClotheType(shirts);
    } else if (id === "pants") {
      setClotheType(pants);
    } else if (id === "sweatshirts") {
      setClotheType(sweatshirts);
    } else if (id === "headwear") {
      setClotheType(headwear);
    } else {
      setClotheType(womenClothes);
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
            setClotheType(womenClothes);
            history.push("/women/all");
          }}
        >
          All
        </button>

        <button
          style={id === "dresses" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(dresses);
            history.push("/women/dresses");
          }}
        >
          Dresses
        </button>

        <button
          style={id === "jackets" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(jackets);
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
            setClotheType(sweatshirts);
            history.push("/women/sweatshirts");
          }}
        >
          Sweatshirts
        </button>

        <button
          style={id === "shirts" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(shirts);
            history.push("/women/shirts");
          }}
        >
          T-Shirts
        </button>

        <button
          style={id === "tops" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(tops);
            history.push("/women/tops");
          }}
        >
          Tops
        </button>

        <button
          style={id === "pants" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(pants);
            history.push("/women/pants");
          }}
        >
          Pants
        </button>

        <button
          style={id === "shorts" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(shorts);
            history.push("/women/shorts");
          }}
        >
          Shorts
        </button>

        <button
          style={id === "headwear" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(headwear);
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
      </section>
    </main>
  );
};

export default WomenClothing;
