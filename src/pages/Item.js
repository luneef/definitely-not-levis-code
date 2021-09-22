import { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import Loading from "../components/Loading";
import "../styles/item/item.css";

const Item = ({ addToCart, setItemPath, setProductPath }) => {
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

    console.log("GOT HERE");

    history.push(`/related-item/${product.id}`);
  };

  const prevSelect = () => {
    console.log("Prev");
    setPhotoSelector(() => {
      if (photoSelector > 0) {
        return photoSelector - 1;
      } else {
        return photos.length - 1;
      }
    });
  };

  const nextSelect = () => {
    console.log("Next");
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
    <main className="item-main">
      <h1>Item Full View</h1>
      <section className="item-layout">
        <div className="">
          <button onClick={() => prevSelect()}>Previous</button>
          <img src={selectedPhoto} alt={item.name} />
          <button onClick={() => nextSelect()}>Next</button>

          {photos.map((photo) => (
            <p
              key={photo.id}
              style={selectedPhoto === photo.url ? { color: "white" } : {}}
            >
              Circle
            </p>
          ))}
        </div>

        <div>
          <p>{item.name}</p>
          <p>{price}</p>
          <p>{item.description.replace(/(<([^>]+)>)/gi, "")}</p>

          <p>Size: (Availabel Sizes)</p>
          {size.map((size) => {
            return (
              <div key={size.id}>
                <button
                  onClick={() =>
                    setFinalSize(size.id, size.price.formatted_with_symbol)
                  }
                >
                  <p>{size.name}</p>
                </button>
              </div>
            );
          })}

          <p>You can add quantity in cart</p>

          <button
            onClick={() =>
              addToCart(item.id, 1, item.variant_groups[0].id, sizeID)
            }
          >
            Add To Cart
          </button>
        </div>
      </section>

      <h1>Related Products</h1>

      <section className="related-products">
        {!item.related_products.length ? (
          <p>No RElated Priducts</p>
        ) : (
          <div className="samp">
            {item.related_products.map((product) => {
              return (
                <div key={product.id}>
                  <button onClick={() => selectedProduct(product)}>
                    <img src={product.media.source} alt={product.name} />
                    <p>{product.name}</p>
                  </button>
                  <p>{product.price.formatted_with_symbol}</p>
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
