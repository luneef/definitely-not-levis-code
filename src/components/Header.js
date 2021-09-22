import { Link } from "react-router-dom";
import "../styles/header/header.css";
import CartItem from "./CartItem";
import logo from "../assets/images/logo.png";

const Header = ({
  cartcount,
  handleCartView,
  viewCart,
  cart,
  captureCheckout,
  updateItemQuantity,
  removeItemFromCart,
  emptyCart,
}) => {
  return (
    <header className="header-container">
      <nav>
        <Link className="link" to="/">
          <img src={logo} alt="Definitely Not Levi's Logo" />
        </Link>

        <div>
          <Link className="link" to="/men">
            MEN
          </Link>

          <Link className="link" to="/women">
            WOMEN
          </Link>

          <Link className="link" to="/unisex">
            UNISEX
          </Link>

          <button
            style={viewCart ? { marginRight: "250px" } : {}}
            className="new-cart"
            onClick={() => handleCartView()}
          >
            {viewCart ? "Close" : `Cart (${cartcount})`}
          </button>

          <aside
            style={viewCart ? { width: "250px" } : {}}
            className="cart-aside"
          >
            <h1>Checkout</h1>
            {cart.total_items ? (
              <CartItem
                cart={cart}
                handleCartView={handleCartView}
                captureCheckout={captureCheckout}
                updateItemQuantity={updateItemQuantity}
                removeItemFromCart={removeItemFromCart}
                emptyCart={emptyCart}
              />
            ) : (
              <p>ADD TO CART NOW!</p>
            )}
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default Header;
