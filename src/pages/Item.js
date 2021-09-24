import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";
import "../styles/item/item.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Item = ({ viewCart, addToCart, setItemPath, setProductPath }) => {
  const [item, setItem] = useState(null);
  const [size, setSizes] = useState([]);
  const [sizeID, setSizeID] = useState("");
  const [price, setPrice] = useState("");
  const [photos, setPhotos] = useState([]);
  const [photoSelector, setPhotoSelector] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState({});

  const history = useHistory();

  const selectedProduct = (product) => {
    localStorage.setItem("relatedProduct", JSON.stringify(product.id));
    setProductPath(`/related-item/${product.id}`);

    history.push(`/related-item/${product.id}`);
  };

  const prevSelect = () => {
    setPhotoSelector(() => {
      if (photoSelector > 0) {
        return photoSelector - 1;
      } else {
        return photos.length - 1;
      }
    });
  };

  const nextSelect = () => {
    setPhotoSelector(() => {
      if (photoSelector < photos.length - 1) {
        return photoSelector + 1;
      } else {
        return 0;
      }
    });
  };

  const setFinalSize = (id, price) => {
    setSizeID(id);
    setPrice(price);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    setItem(JSON.parse(localStorage.getItem("item")));
    setItemPath(JSON.parse(localStorage.getItem("itemPath")));

    // eslint-disable-next-line
  }, []);

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

  useEffect(() => {
    if (photos.length) {
      const { url } = photos[photoSelector];
      setSelectedPhoto(url);
    }

    // eslint-disable-next-line
  }, [photoSelector]);

  if (item === null) {
    return <Loading />;
  }

  return (
    <main
      style={
        viewCart
          ? { marginRight: "270px", paddingLeft: "3em", paddingRight: "5em" }
          : {}
      }
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

      <section className="item-layout">
        <div
          style={
            viewCart
              ? {
                  marginRight: "2em",
                }
              : {}
          }
          className="item-gallery"
        >
          <button onClick={() => prevSelect()}>
            <BsChevronCompactLeft />
          </button>
          <img src={selectedPhoto} alt={item.name} />
          <button onClick={() => nextSelect()}>
            <BsChevronCompactRight />
          </button>
        </div>

        <div className="item-details">
          <p
            style={
              viewCart
                ? {
                    fontSize: "3rem",
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

          <p className="itemdetails-price">{price}</p>

          <button
            className="addtobag-btn"
            onClick={() =>
              addToCart(item.id, 1, item.variant_groups[0].id, sizeID)
            }
          >
            Bag It!
          </button>

          <p className="quantity-guide">
            (You can easily update the item quantity in your bag.)
          </p>
        </div>
      </section>

      <div className="photo-nav" style={viewCart ? { left: "124px" } : {}}>
        {photos.map((photo) => (
          <p
            key={photo.id}
            style={
              selectedPhoto === photo.url ? { color: "rgb(75, 73, 73)" } : {}
            }
          >
            _
          </p>
        ))}
      </div>

      <section className="related-products">
        <p className="related-title">RELATED CLOTHING</p>
        {!item.related_products.length ? (
          <p className="no-related">
            Oops, seems like we're still on production making more like this.
            Stay tuned!
          </p>
        ) : (
          <div className="related-container">
            {item.related_products.map((product) => {
              return (
                <div className="related-item" key={product.id}>
                  <button onClick={() => selectedProduct(product)}>
                    <img src={product.media.source} alt={product.name} />
                    <p>{product.name}</p>
                  </button>
                  <p className="related-price">
                    {product.price.formatted_with_symbol}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default Item;
