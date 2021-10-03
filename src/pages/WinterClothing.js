import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import "../styles/clothing/clothing.css";
import snowflake from "../assets/images/snowflake.png";
import winterbg from "../assets/images/winterbg.png";

const WinterClothing = ({ viewCart }) => {
  const [categoryID, setCategoryID] = useState("");
  const [clotheType, setClotheType] = useState([]);
  const [winterClothes, setWinterClothes] = useState([]);
  const [kidWinter, setKidWinter] = useState([]);
  const [menWinter, setMenWinter] = useState([]);
  const [womenWinter, setWomenWinter] = useState([]);

  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    setWinterClothes(JSON.parse(localStorage.getItem("winterClothes")));
    setKidWinter(JSON.parse(localStorage.getItem("winterKidClothes")));
    setMenWinter(JSON.parse(localStorage.getItem("winterMenClothes")));
    setWomenWinter(JSON.parse(localStorage.getItem("winterWomenClothes")));

    setCategoryID(id);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (id === "all") {
      setClotheType(winterClothes);
    } else if (id === "kids") {
      setClotheType(kidWinter);
    } else if (id === "men") {
      setClotheType(menWinter);
    } else if (id === "women") {
      setClotheType(womenWinter);
    } else {
      setClotheType(winterClothes);
    }

    // eslint-disable-next-line
  }, [womenWinter]);

  useEffect(() => {
    if (id === "all") {
      setClotheType(winterClothes);
    } else if (id === "kids") {
      setClotheType(kidWinter);
    } else if (id === "men") {
      setClotheType(menWinter);
    } else if (id === "women") {
      setClotheType(womenWinter);
    } else {
      setClotheType(winterClothes);
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
      style={
        viewCart
          ? {
              marginRight: "270px",
              backgroundImage: `url(${winterbg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
          : {
              backgroundImage: `url(${winterbg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
      }
      className="clothing-main"
    >
      <section className="category-list">
        <button
          style={
            categoryID === "all" ? { backgroundSize: "100% 3px, auto" } : {}
          }
          onClick={() => {
            setClotheType(winterClothes);
            setCategoryID("all");
          }}
        >
          All
        </button>

        <button
          style={
            categoryID === "kids" ? { backgroundSize: "100% 3px, auto" } : {}
          }
          onClick={() => {
            setClotheType(kidWinter);
            setCategoryID("kids");
          }}
        >
          Kids
        </button>

        <button
          style={
            categoryID === "men" ? { backgroundSize: "100% 3px, auto" } : {}
          }
          onClick={() => {
            setClotheType(menWinter);
            setCategoryID("men");
          }}
        >
          Men
        </button>

        <button
          style={
            categoryID === "women" ? { backgroundSize: "100% 3px, auto" } : {}
          }
          onClick={() => {
            setClotheType(womenWinter);
            setCategoryID("women");
          }}
        >
          Women
        </button>
      </section>

      <section className="clothing-display">
        {clotheType.map((item) => {
          return (
            <div className="clothing-item" key={item.id}>
              <button
                onClick={() =>
                  history.push(`/winter-collection/item/${item.id}`)
                }
              >
                <img src={item.media.source} alt={item.name} />

                <p style={{ color: "rgb(20, 140, 238)" }}>
                  Winter Collection
                  <img
                    style={{
                      width: "15px",
                      height: "15px",
                      marginLeft: "0.1em",
                    }}
                    src={snowflake}
                    alt="snowflake"
                  />
                </p>
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

export default WinterClothing;
