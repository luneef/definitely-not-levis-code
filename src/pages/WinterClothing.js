import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import "../styles/clothing/clothing.css";
import snowflake from "../assets/images/snowflake.png";
import winterbg from "../assets/images/winterbg.png";

const WinterClothing = ({ viewCart }) => {
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
    document.title = `Definitely Not Levi's - Winter Collection - ${
      id.charAt(0).toUpperCase() + id.substring(1)
    }`;

    window.scrollTo(0, 0);

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
  }, [id]);

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
          style={id === "all" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(winterClothes);
            history.push("/winter-collection/all");
          }}
        >
          All
        </button>

        <button
          style={id === "kids" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(kidWinter);
            history.push("/winter-collection/kids");
          }}
        >
          Kids
        </button>

        <button
          style={id === "men" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(menWinter);
            history.push("/winter-collection/men");
          }}
        >
          Men
        </button>

        <button
          style={id === "women" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(womenWinter);
            history.push("/winter-collection/women");
          }}
        >
          Women
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
                  to={`/winter-collection/item/${item.id}`}
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

export default WinterClothing;
