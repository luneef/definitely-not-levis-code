import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import "../styles/clothing/clothing.css";

const UnisexClothing = ({ viewCart, setItemPath }) => {
  const [categoryID, setCategoryID] = useState("");
  const [clotheType, setClotheType] = useState([]);
  const [unisexClothes, setUnisexClothes] = useState([]);
  const [jackets, setJackets] = useState([]);
  const [shirts, setShirts] = useState([]);
  // const [pants, setPants] = useState([]);
  // const [shorts, setShorts] = useState([]);
  const [headwear, setHeadwear] = useState([]);

  const history = useHistory();
  let { id } = useParams();

  const selectedItem = (item) => {
    localStorage.setItem("item", JSON.stringify(item));

    localStorage.setItem(
      "itemPath",
      JSON.stringify(`/unisex/${categoryID}/item/${item.id}`)
    );

    setItemPath(`/unisex/${categoryID}/item/${item.id}`);

    history.push(`/unisex/${categoryID}/item/${item.id}`);
  };

  useEffect(() => {
    setUnisexClothes(JSON.parse(localStorage.getItem("unisexClothes")));
    setJackets(JSON.parse(localStorage.getItem("unisexJackets")));
    setShirts(JSON.parse(localStorage.getItem("unisexShirts")));
    // setPants(JSON.parse(localStorage.getItem("menPants")));
    //setShorts(JSON.parse(localStorage.getItem("menShorts")));
    setHeadwear(JSON.parse(localStorage.getItem("unisexHeadwear")));

    setCategoryID(id);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (id === "all") {
      setClotheType(unisexClothes);
    } else if (id === "jackets") {
      setClotheType(jackets);
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
    if (id === "all") {
      setClotheType(unisexClothes);
    } else if (id === "jackets") {
      setClotheType(jackets);
    } else if (id === "shirts") {
      setClotheType(shirts);
    } else if (id === "headwear") {
      setClotheType(headwear);
    } else {
      setClotheType(unisexClothes);
    }

    setCategoryID(id);

    // eslint-disable-next-line
  }, [id]);

  if (!clotheType.length) {
    return <Loading />;
  }
  return (
    <main
      style={viewCart ? { marginRight: "250px" } : {}}
      className="clothing-main"
    >
      <h1>UNISEX TIME</h1>

      <section>
        <button
          onClick={() => {
            setClotheType(unisexClothes);
            setCategoryID("all");
          }}
        >
          All
        </button>

        <button
          onClick={() => {
            setClotheType(jackets);
            setCategoryID("jackets");
          }}
        >
          Jackets
        </button>

        <button
          onClick={() => {
            setClotheType(shirts);
            setCategoryID("shirts");
          }}
        >
          T-Shirts
        </button>

        {/* <button onClick={() => setClotheType(pants)}>Pants</button> */}
        {/* <button onClick={() => setClotheType(shorts)}>Shorts</button> */}
        <button
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
              </button>
              <p>{item.name}</p>
              <p>{item.price.formatted_with_symbol}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default UnisexClothing;
