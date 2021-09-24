import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/cartitem/cartitem.css";
import { BsXSquareFill } from "react-icons/bs";
import loadingcircle from "../assets/images/loadingcircle.gif";

const CartItem = ({
  cart,
  handleCartView,
  viewCart,
  updateItemQuantity,
  removeItemFromCart,
  emptyCart,
}) => {
  const [checkChange, setCheckChange] = useState("loaded");
  const [loadingItem, setLoadingItem] = useState("");

  const history = useHistory();

  console.log(cart);

  const goToCheckout = () => {
    handleCartView();
    history.push("/checkout");
  };

  useEffect(() => {
    setCheckChange("loaded");

    // eslint-disable-next-line
  }, [cart]);

  return (
    <div className="cart-container">
      {cart.line_items.map((item) => {
        return (
          <div className="cartitem-container" key={item.id}>
            <img src={item.media.source} alt={item.name} />
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
                onClick={() => removeItemFromCart(item.id)}
              >
                <BsXSquareFill />
              </button>
            </div>
          </div>
        );
      })}

      <div className="cart-bottom">
        <p style={viewCart ? { fontSize: "1.5rem" } : {}}>
          - - - - - - - - - - - - - - - -
        </p>

        <h2>
          Total: <span>{cart.subtotal.formatted_with_symbol}</span>
        </h2>

        <button className="checkout-btn" onClick={() => goToCheckout()}>
          PROCEED TO CHECKOUT
        </button>

        <button className="empty-btn" onClick={() => emptyCart()}>
          EMPTY BAG
        </button>
      </div>
    </div>
  );
};

export default CartItem;
