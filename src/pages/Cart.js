import { useState } from "react";
import Checkout from "../components/Checkout";

const CartItems = ({
  cart,
  captureCheckout,
  updateItemQuantity,
  removeItemFromCart,
  emptyCart,
}) => {
  const [toCheckout, goToCheckout] = useState(false);

  const triggerCheckout = () => {
    goToCheckout(!toCheckout);
  };

  return (
    <>
      {toCheckout ? (
        <Checkout
          cart={cart}
          captureCheckout={captureCheckout}
          triggerCheckout={triggerCheckout}
        />
      ) : (
        ""
      )}
      {cart.line_items.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
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

      <button onClick={triggerCheckout}>Checkout</button>
    </>
  );
};

const Cart = ({
  cart,
  captureCheckout,
  updateItemQuantity,
  removeItemFromCart,
  emptyCart,
}) => {
  //console.log(cart);

  return (
    <main>
      <h1>Checkout</h1>
      {cart.total_items ? (
        <CartItems
          cart={cart}
          captureCheckout={captureCheckout}
          updateItemQuantity={updateItemQuantity}
          removeItemFromCart={removeItemFromCart}
          emptyCart={emptyCart}
        />
      ) : (
        <p>ADD TO CART NOW!</p>
      )}
    </main>
  );
};

export default Cart;
