import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/item/item.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import emptybox from "../assets/images/emptybox.png";
import arrow from "../assets/images/arrowup.png";

const RelatedProduct = ({ cartcount, viewCart, addToCart }) => {
  const [item, setItem] = useState(null);
  const [size, setSizes] = useState([]);
  const [sizeID, setSizeID] = useState("");
  const [price, setPrice] = useState("");
  const [photos, setPhotos] = useState([]);
  const [photoSelector, setPhotoSelector] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [loading, setLoading] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  let { id } = useParams();
  const navRef = useRef();

  // Handles the previous image button in item preview
  const prevSelect = () => {
    setPhotoSelector(() => {
      if (photoSelector > 0) {
        return photoSelector - 1;
      } else {
        return photos.length - 1;
      }
    });
  };

  // Handles the next image button in item preview
  const nextSelect = () => {
    setPhotoSelector(() => {
      if (photoSelector < photos.length - 1) {
        return photoSelector + 1;
      } else {
        return 0;
      }
    });
  };

  // Handles the scroll area in the items within related clothing
  const scrollHandler = (scrollOffset) => {
    navRef.current.scrollLeft += scrollOffset;
  };

  // Sets the clothing option pick by the user be it size or color
  const setFinalSize = (id, price) => {
    setSizeID(id);
    setPrice(price);
  };

  // Checks if the item picked is loaded from local storage
  useEffect(() => {
    window.scrollTo(0, 0);

    if (JSON.parse(localStorage.getItem("allClothes"))) {
      const matched = JSON.parse(localStorage.getItem("allClothes")).filter(
        (item) => item.id === id
      );

      if (matched.length) {
        setItem(matched[0]);

        document.title = `${matched[0].name} - Definitely Not Levi's`;
      }
    } else {
      document.title = `Item Not Found - Definitely Not Levi's`;
    }

    if (navRef.current) {
      navRef.current.scrollLeft = 0;
    }

    // eslint-disable-next-line
  }, [id]);

  // Sets the available sizes and images for specific item
  useEffect(() => {
    if (item) {
      const { options } = item.variant_groups[0];
      setSizes(options);
      setSizeID(options[0].id);
      setPrice(options[0].price.formatted_with_symbol);

      const { assets } = item;
      setPhotos(assets);

      setSelectedPhoto(item.assets[0].url);
    }

    // eslint-disable-next-line
  }, [item]);

  // Sets up the image url of the images for an item
  useEffect(() => {
    if (photos.length) {
      const { url } = photos[photoSelector];
      setSelectedPhoto(url);
    }

    // eslint-disable-next-line
  }, [photoSelector]);

  // Sets the scroll of items within related clothing back to beginning
  useEffect(() => {
    if (navRef.current) {
      navRef.current.scrollLeft = 0;
    }

    // eslint-disable-next-line
  }, [navRef.current]);

  // Handles the display of the arrow guide
  useEffect(() => {
    setLoading(false);

    if (window.innerWidth > 850) {
      if (!JSON.parse(localStorage.getItem("arrowShown"))) {
        if (cartcount === 1) {
          if (!viewCart) {
            setShowArrow(true);
            localStorage.setItem("arrowShown", JSON.stringify("Yes"));

            const timer = setTimeout(() => {
              setShowArrow(false);
            }, 3000);

            return () => clearTimeout(timer);
          } else {
            localStorage.setItem("arrowShown", JSON.stringify("Yes"));
          }
        }
      }
    }

    // eslint-disable-next-line
  }, [cartcount]);

  // Displays an empty item context
  if (!item) {
    return (
      <main
        style={viewCart ? { marginRight: "270px" } : {}}
        className="nomain-item"
      >
        <img src={emptybox} alt="Empty box" />
        <p style={{ fontWeight: "bold" }}>Item Not Found !</p>
        <p style={{ marginTop: "0.5em" }}>
          Please try going back or refreshing the page.
        </p>
      </main>
    );
  }

  return (
    <main
      style={viewCart ? { marginRight: "270px" } : {}}
      className="item-main"
    >
      {photos.length ? (
        <div>
          {photos.map(({ url }) => (
            <img key={url} className="image-cache" src={url} alt="cache" />
          ))}
        </div>
      ) : (
        ""
      )}

      <div
        style={showArrow ? { top: "105px", opacity: "1" } : {}}
        className="baggedarrow"
      >
        <img src={arrow} alt="Up Arrow" />
      </div>

      <section className="item-layout">
        <div className="item-gallery">
          <button onClick={() => prevSelect()}>
            <BsChevronCompactLeft />
          </button>
          <img src={selectedPhoto} alt={item.name} />
          <button onClick={() => nextSelect()}>
            <BsChevronCompactRight />
          </button>

          <div className="photo-nav">
            {photos.map((photo) => (
              <p
                key={photo.id}
                style={
                  selectedPhoto === photo.url
                    ? { color: "rgb(75, 73, 73)" }
                    : {}
                }
              >
                _
              </p>
            ))}
          </div>
        </div>

        <div className="item-details">
          <p
            style={
              viewCart
                ? {
                    fontSize: "3.5rem",
                  }
                : {}
            }
            className="itemdetails-name"
          >
            {item.name}
          </p>

          <p className="itemdetails-desc">
            {item.description.replace(/(<([^>]+)>)/gi, "")}
          </p>

          <p className="itemdetails-sizes">
            {`${item.variant_groups[0].name}: (Available ${item.variant_groups[0].name}s)`}
          </p>

          <div className="itemsdetails-sizecont">
            {size.map((size) => {
              return (
                <div key={size.id} className="itemdetails-size">
                  <button
                    style={
                      item.variant_groups[0].name === "Color"
                        ? { backgroundColor: `${size.name}`, padding: "1em" }
                        : size.id === sizeID
                        ? { color: "white", backgroundColor: "gray" }
                        : {}
                    }
                    onClick={() =>
                      setFinalSize(size.id, size.price.formatted_with_symbol)
                    }
                  >
                    {item.variant_groups[0].name === "Color" ? (
                      ""
                    ) : (
                      <p>{size.name}</p>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          <p className="itemdetails-price">{price}</p>

          <button
            className="addtobag-btn"
            onClick={() => {
              setLoading(true);
              addToCart(item.id, 1, item.variant_groups[0].id, sizeID);
            }}
          >
            {loading ? "Bagging It . . ." : "Bag It!"}
          </button>

          <p className="quantity-guide">
            (You can easily update the item quantity in your bag.)
          </p>
        </div>
      </section>

      <section
        style={viewCart ? { paddingLeft: "8em", paddingRight: "8em" } : {}}
        className="related-products"
      >
        <p className="related-title">RELATED CLOTHING</p>

        {item.related_products.length > 3 ? (
          <button
            style={viewCart ? { left: "50px" } : {}}
            className="scroll-btn left-btn"
            onClick={() => scrollHandler(-800)}
          >
            <BsChevronCompactLeft />
          </button>
        ) : (
          ""
        )}

        {!item.related_products.length ? (
          <p className="no-related">
            Oops, seems like we're still on production making more like this.
            Stay tuned!
          </p>
        ) : (
          <div ref={navRef} className="related-container">
            {item.related_products.map((product) => {
              return (
                <div className="related-item" key={product.id}>
                  <button>
                    <Link
                      className="clothingitem-name"
                      to={`/related-item/${product.id}`}
                    >
                      <img src={product.media.source} alt={product.name} />
                      <p>{product.name}</p>
                    </Link>
                  </button>

                  <p className="related-price">
                    {product.price.formatted_with_symbol}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {item.related_products.length > 3 ? (
          <button
            style={viewCart ? { right: "50px" } : {}}
            className="scroll-btn right-btn"
            onClick={() => scrollHandler(800)}
          >
            <BsChevronCompactRight />
          </button>
        ) : (
          ""
        )}
      </section>
    </main>
  );
};

export default RelatedProduct;
