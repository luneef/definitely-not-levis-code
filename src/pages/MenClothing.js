import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import "../styles/clothing/clothing.css";

const MenClothing = ({ viewCart }) => {
  const [clotheType, setClotheType] = useState([]);
  const [menClothes, setMenClothes] = useState([]);
  const [jackets, setJackets] = useState([]);
  const [sleeves, setSleeves] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [pants, setPants] = useState([]);
  const [shorts, setShorts] = useState([]);
  const [headwear, setHeadwear] = useState([]);

  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    setMenClothes(JSON.parse(localStorage.getItem("menClothes")));
    setJackets(JSON.parse(localStorage.getItem("menJackets")));
    setSleeves(JSON.parse(localStorage.getItem("menSleeves")));
    setShirts(JSON.parse(localStorage.getItem("menShirts")));
    setPants(JSON.parse(localStorage.getItem("menPants")));
    setShorts(JSON.parse(localStorage.getItem("menShorts")));
    setHeadwear(JSON.parse(localStorage.getItem("menHeadwear")));

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
    document.title = `Definitely Not Levi's - Men - ${
      id.charAt(0).toUpperCase() + id.substring(1)
    }`;

    window.scrollTo(0, 0);

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
            setClotheType(menClothes);
            history.push("/men/all");
          }}
        >
          All
        </button>

        <button
          style={id === "jackets" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(jackets);
            history.push("/men/jackets");
          }}
        >
          Jackets
        </button>

        <button
          style={id === "sleeves" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(sleeves);
            history.push("/men/sleeves");
          }}
        >
          Sleeves
        </button>

        <button
          style={id === "shirts" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(shirts);
            history.push("/men/shirts");
          }}
        >
          T-Shirts
        </button>

        <button
          style={id === "pants" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(pants);
            history.push("/men/pants");
          }}
        >
          Pants
        </button>

        <button
          style={id === "shorts" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(shorts);
            history.push("/men/shorts");
          }}
        >
          Shorts
        </button>

        <button
          style={id === "headwear" ? { backgroundSize: "100% 3px, auto" } : {}}
          onClick={() => {
            setClotheType(headwear);
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
