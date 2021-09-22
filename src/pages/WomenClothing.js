import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";
import "../styles/clothing/clothing.css";

const WomenClothing = ({ viewCart, setItemPath }) => {
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

  const selectedItem = (item) => {
    localStorage.setItem("item", JSON.stringify(item));

    localStorage.setItem("itemPath", JSON.stringify(`/women/item/${item.id}`));

    setItemPath(`/women/item/${item.id}`);

    history.push(`/women/item/${item.id}`);
  };

  useEffect(() => {
    setClotheType(JSON.parse(localStorage.getItem("womenClothes")));
    setWomenClothes(JSON.parse(localStorage.getItem("womenClothes")));
    setJackets(JSON.parse(localStorage.getItem("womenJackets")));
    setShirts(JSON.parse(localStorage.getItem("womenShirts")));
    setPants(JSON.parse(localStorage.getItem("womenPants")));
    // setShorts(JSON.parse(localStorage.getItem("womenShorts")));
    setSweatshirts(JSON.parse(localStorage.getItem("womenSweatshirts")));
    setDresses(JSON.parse(localStorage.getItem("womenDresses")));
    setHeadwear(JSON.parse(localStorage.getItem("womenHeadwear")));

    // eslint-disable-next-line
  }, []);

  if (!clotheType.length) {
    return <Loading />;
  }

  return (
    <main
      style={viewCart ? { marginRight: "250px" } : {}}
      className="clothing-main"
    >
      <h1>WOMEN CLOTHING</h1>
      <section>
        <button onClick={() => setClotheType(womenClothes)}>All</button>
        <button onClick={() => setClotheType(dresses)}>Dresses</button>
        <button onClick={() => setClotheType(jackets)}>Jackets</button>
        <button onClick={() => setClotheType(shirts)}>T-Shirts</button>
        <button onClick={() => setClotheType(sweatshirts)}>Sweatshirts</button>
        <button onClick={() => setClotheType(pants)}>Pants</button>
        {/* <button onClick={() => setClotheType(shorts)}>Shorts</button> */}
        <button onClick={() => setClotheType(headwear)}>Headwear</button>
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

export default WomenClothing;
