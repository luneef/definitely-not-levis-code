import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import "../styles/clothing/clothing.css";

const WomenClothing = ({ viewCart, setItemPath }) => {
  const [categoryID, setCategoryID] = useState("");
  const [clotheType, setClotheType] = useState([]);
  const [womenClothes, setWomenClothes] = useState([]);
  const [jackets, setJackets] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [sweatshirts, setSweatshirts] = useState([]);
  const [pants, setPants] = useState([]);
  // const [shorts, setShorts] = useState([]);
  const [dresses, setDresses] = useState([]);
  const [headwear, setHeadwear] = useState([]);

  const history = useHistory();
  let { id } = useParams();

  const selectedItem = (item) => {
    localStorage.setItem("item", JSON.stringify(item));

    localStorage.setItem(
      "itemPath",
      JSON.stringify(`/women/${categoryID}/item/${item.id}`)
    );

    setItemPath(`/women/${categoryID}/item/${item.id}`);

    history.push(`/women/${categoryID}/item/${item.id}`);
  };

  useEffect(() => {
    setWomenClothes(JSON.parse(localStorage.getItem("womenClothes")));
    setJackets(JSON.parse(localStorage.getItem("womenJackets")));
    setShirts(JSON.parse(localStorage.getItem("womenShirts")));
    setPants(JSON.parse(localStorage.getItem("womenPants")));
    // setShorts(JSON.parse(localStorage.getItem("womenShorts")));
    setSweatshirts(JSON.parse(localStorage.getItem("womenSweatshirts")));
    setDresses(JSON.parse(localStorage.getItem("womenDresses")));
    setHeadwear(JSON.parse(localStorage.getItem("womenHeadwear")));

    setCategoryID(id);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (id === "all") {
      setClotheType(womenClothes);
    } else if (id === "jackets") {
      setClotheType(jackets);
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
    if (id === "all") {
      setClotheType(womenClothes);
    } else if (id === "jackets") {
      setClotheType(jackets);
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
            setClotheType(womenClothes);
            setCategoryID("all");
          }}
        >
          All
        </button>

        <button
          style={
            categoryID === "dresses" ? { backgroundSize: "100% 3px, auto" } : {}
          }
          onClick={() => {
            setClotheType(dresses);
            setCategoryID("dresses");
          }}
        >
          Dresses
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
            categoryID === "sweatshirts"
              ? { backgroundSize: "100% 3px, auto" }
              : {}
          }
          onClick={() => {
            setClotheType(sweatshirts);
            setCategoryID("sweatshirts");
          }}
        >
          Sweatshirts
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

        {/* <button onClick={() => setClotheType(shorts)}>Shorts</button> */}

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

      <section className="clothing-display">
        {clotheType.map((item) => {
          return (
            <div className="clothing-item" key={item.id}>
              <button onClick={() => selectedItem(item)}>
                <img src={item.media.source} alt={item.name} />
                <p>{item.name}</p>
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
