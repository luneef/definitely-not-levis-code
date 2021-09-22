import { useHistory } from "react-router-dom";

import "../styles/cartitem/cartitem.css";

const CartItem = ({
  cart,
  handleCartView,
  updateItemQuantity,
  removeItemFromCart,
  emptyCart,
}) => {
  const history = useHistory();

  const goToCheckout = () => {
    history.push("/checkout");
    handleCartView();
  };

  return (
    <>
      {cart.line_items.map((item) => {
        return (
          <div className="cart-div" key={item.id}>
            <p>{item.variant.description}</p>
            <button
              disabled={item.quantity === 1 ? true : false}
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <span>{item.quantity}</span>

            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <img src={item.media.source} alt={item.name} />
            <p>{item.line_total.formatted_with_symbol}</p>
            <button onClick={() => removeItemFromCart(item.id)}>
              Remove Item
            </button>
          </div>
        );
      })}

      <h2>All Total: {cart.subtotal.formatted_with_symbol}</h2>

      <button onClick={emptyCart}>Empty Cart</button>

      <button onClick={() => goToCheckout()}>Checkout</button>
    </>
  );
};

export default CartItem;
