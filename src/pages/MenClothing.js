import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";
import "../styles/clothing/clothing.css";

const MenClothing = ({ viewCart, setItemPath }) => {
  const [clotheType, setClotheType] = useState([]);
  const [menClothes, setMenClothes] = useState([]);
  const [jackets, setJackets] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [pants, setPants] = useState([]);
  const [shorts, setShorts] = useState([]);
  const [headwear, setHeadwear] = useState([]);

  const history = useHistory();

  const selectedItem = (item) => {
    localStorage.setItem("item", JSON.stringify(item));

    localStorage.setItem("itemPath", JSON.stringify(`/men/item/${item.id}`));

    setItemPath(`/men/item/${item.id}`);

    history.push(`/men/item/${item.id}`);
  };

  useEffect(() => {
    setClotheType(JSON.parse(localStorage.getItem("menClothes")));
    setMenClothes(JSON.parse(localStorage.getItem("menClothes")));
    setJackets(JSON.parse(localStorage.getItem("menJackets")));
    setShirts(JSON.parse(localStorage.getItem("menShirts")));
    setPants(JSON.parse(localStorage.getItem("menPants")));
    setShorts(JSON.parse(localStorage.getItem("menShorts")));
    setHeadwear(JSON.parse(localStorage.getItem("menHeadwear")));

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
      <h1>Men's Clothes</h1>
      <section>
        <button onClick={() => setClotheType(menClothes)}>All</button>
        <button onClick={() => setClotheType(jackets)}>Jackets</button>
        <button onClick={() => setClotheType(shirts)}>T-Shirts</button>
        <button onClick={() => setClotheType(pants)}>Pants</button>
        <button onClick={() => setClotheType(shorts)}>Shorts</button>
        <button onClick={() => setClotheType(headwear)}>Headwear</button>
      </section>

      <section className="clothing-display">
        {clotheType.map((item) => {
          return (
            <div className="clothing-item" key={item.id}>
              <button onClick={() => selectedItem(item)}>
                <img src={item.media.source} alt={item.name} />
                <p>{item.name}</p>
              </button>

              <p>{item.price.formatted_with_symbol}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default MenClothing;
