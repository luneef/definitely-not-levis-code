import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/cartitem/cartitem.css";
import { BsXSquareFill } from "react-icons/bs";
import loadingcircle from "../assets/images/loadingcircle.gif";
import loadingring from "../assets/images/loadingring.gif";

const CartItem = ({
  cart,
  handleCartView,
  updateItemQuantity,
  removeItemFromCart,
  emptyCart,
}) => {
  const [loadingItem, setLoadingItem] = useState("");
  const [checkChange, setCheckChange] = useState("loaded");
  const [loadingRemove, setLoadingRemove] = useState(false);
  const [loadingEmpty, setLoadingEmpty] = useState(false);

  const history = useHistory();

  //console.log(cart);

  const goToCheckout = () => {
    if (window.innerWidth > 850) {
      handleCartView();
    }
    history.push("/checkout");
  };

  useEffect(() => {
    setCheckChange("loaded");
    setLoadingRemove(false);
    setLoadingEmpty(false);

    // eslint-disable-next-line
  }, [cart]);

  return (
    <div className="cart-container">
      <div className="cartitems">
        {cart.line_items.map((item) => {
          return (
            <div className="cartitem-container" key={item.id}>
              <Link to={`/related-item/${item.product_id}`}>
                <img src={item.media.source} alt={item.name} />
              </Link>
              <p className="cartitem-name">{item.variant.description}</p>
              <p className="cartitem-price">
                {item.line_total.formatted_with_symbol}

                {item.id === loadingItem ? (
                  checkChange === "loading" ? (
                    <img src={loadingcircle} alt="Loading" />
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </p>

              <div className="cartitem-edit">
                <div className="cartitem-quantity">
                  <button
                    disabled={item.quantity === 1 ? true : false}
                    style={item.quantity === 1 ? { pointerEvents: "none" } : {}}
                    onClick={() => {
                      updateItemQuantity(item.id, item.quantity - 1);
                      setLoadingItem(item.id);
                      setCheckChange("loading");
                    }}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => {
                      updateItemQuantity(item.id, item.quantity + 1);
                      setLoadingItem(item.id);
                      setCheckChange("loading");
                    }}
                  >
                    +
                  </button>
                </div>

                {item.id === loadingItem ? (
                  checkChange === "loading" ? (
                    <img src={loadingcircle} alt="Loading" />
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}

                <button
                  title="Remove Item"
                  className="cartitem-remove"
                  onClick={() => {
                    setLoadingItem(item.id);
                    setLoadingRemove(true);
                    removeItemFromCart(item.id);
                  }}
                >
                  {loadingRemove ? (
                    item.id === loadingItem ? (
                      <img src={loadingring} alt="Loading Ring" />
                    ) : (
                      <BsXSquareFill />
                    )
                  ) : (
                    <BsXSquareFill />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cart-bottom">
        <p>- - - - - - - - - - - - - - - -</p>

        <h2>
          Total: <span>{cart.subtotal.formatted_with_symbol}</span>
        </h2>

        <button className="checkout-btn" onClick={() => goToCheckout()}>
          GO TO CHECKOUT
        </button>

        <button
          className="empty-btn"
          onClick={() => {
            setLoadingEmpty(true);
            emptyCart();
          }}
        >
          {loadingEmpty ? "EMPTYING . . ." : "EMPTY BAG"}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
