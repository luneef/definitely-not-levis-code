import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import "../styles/clothing/clothing.css";

const MenClothing = ({ viewCart }) => {
  const [categoryID, setCategoryID] = useState("");
  const [clotheType, setClotheType] = useState([]);
  const [menClothes, setMenClothes] = useState([]);
  const [jackets, setJackets] = useState([]);
  const [sleeves, setSleeves] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [pants, setPants] = useState([]);
  const [shorts, setShorts] = useState([]);
  const [headwear, setHeadwear] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    setMenClothes(JSON.parse(localStorage.getItem("menClothes")));
    setJackets(JSON.parse(localStorage.getItem("menJackets")));
    setSleeves(JSON.parse(localStorage.getItem("menSleeves")));
    setShirts(JSON.parse(localStorage.getItem("menShirts")));
    setPants(JSON.parse(localStorage.getItem("menPants")));
    setShorts(JSON.parse(localStorage.getItem("menShorts")));
    setHeadwear(JSON.parse(localStorage.getItem("menHeadwear")));

    setCategoryID(id);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (id === "all") {
      setClotheType(menClothes);
    } else if (id === "jackets") {
      setClotheType(jackets);
    } else if (id === "sleeves") {
      setClotheType(sleeves);
    } else if (id === "shirts") {
      setClotheType(shirts);
    } else if (id === "pants") {
      setClotheType(pants);
    } else if (id === "shorts") {
      setClotheType(shorts);
    } else if (id === "headwear") {
      setClotheType(headwear);
    } else {
      setClotheType(menClothes);
    }

    // eslint-disable-next-line
  }, [headwear]);

  useEffect(() => {
    if (id === "all") {
      setClotheType(menClothes);
    } else if (id === "jackets") {
      setClotheType(jackets);
    } else if (id === "sleeves") {
      setClotheType(sleeves);
    } else if (id === "shirts") {
      setClotheType(shirts);
    } else if (id === "pants") {
      setClotheType(pants);
    } else if (id === "shorts") {
      setClotheType(shorts);
    } else if (id === "headwear") {
      setClotheType(headwear);
    } else {
      setClotheType(menClothes);
    }

    setCategoryID(id);

    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryID]);

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
          style={
            categoryID === "all" ? { backgroundSize: "100% 3px, auto" } : {}
          }
          onClick={() => {
            setClotheType(menClothes);
            setCategoryID("all");
          }}
        >
          All
        </button>

        <button
          style={
            categoryID === "jackets" ? { backgroundSize: "100% 3px, auto" } : {}
          }
          onClick={() => {
            setClotheType(jackets);
            setCategoryID("jackets");
          }}
        >
          Jackets
        </button>

        <button
          style={
            categoryID === "sleeves" ? { backgroundSize: "100% 3px, auto" } : {}
          }
          onClick={() => {
            setClotheType(sleeves);
            setCategoryID("sleeves");
          }}
        >
          Sleeves
        </button>

        <button
          style={
            categoryID === "shirts" ? { backgroundSize: "100% 3px, auto" } : {}
          }
          onClick={() => {
            setClotheType(shirts);
            setCategoryID("shirts");
          }}
        >
          T-Shirts
        </button>

        <button
          style={
            categoryID === "pants" ? { backgroundSize: "100% 3px, auto" } : {}
          }
          onClick={() => {
            setClotheType(pants);
            setCategoryID("pants");
          }}
        >
          Pants
        </button>

        <button
          style={
            categoryID === "shorts" ? { backgroundSize: "100% 3px, auto" } : {}
          }
          onClick={() => {
            setClotheType(shorts);
            setCategoryID("shorts");
          }}
        >
          Shorts
        </button>

        <button
          style={
            categoryID === "headwear"
              ? { backgroundSize: "100% 3px, auto" }
              : {}
          }
          onClick={() => {
            setClotheType(headwear);
            setCategoryID("headwear");
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
                <Link className="clothingitem-name" to={`/men/item/${item.id}`}>
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

export default MenClothing;
