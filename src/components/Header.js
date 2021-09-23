import { Link, useHistory } from "react-router-dom";
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
  const history = useHistory();

  const setCategory = (category) => {
    history.push(category);
  };

  return (
    <header className="header-container">
      <nav>
        <Link className="link" to="/" title="Home">
          <img src={logo} alt="Definitely Not Levi's Logo" />
        </Link>

        <div className="actions-nav">
          <div className="dropdown">
            <Link className="link" to="/men/all">
              MEN
            </Link>
            <div className="dropdown-content men-dropdown">
              <p onClick={() => setCategory("/men/jackets")}>Jackets</p>
              <p onClick={() => setCategory("/men/shirts")}>T-Shirts</p>
              <p onClick={() => setCategory("/men/pants")}>Pants</p>
              <p onClick={() => setCategory("/men/shorts")}>Shorts</p>
              <p onClick={() => setCategory("/men/headwear")}>Headwear</p>
            </div>
          </div>

          <div className="dropdown">
            <Link className="link" to="/women/all">
              WOMEN
            </Link>
            <div className="dropdown-content women-dropdown">
              <p onClick={() => setCategory("/women/dresses")}>Dresses</p>
              <p onClick={() => setCategory("/women/jackets")}>Jackets</p>
              <p onClick={() => setCategory("/women/shirts")}>T-Shirts</p>
              <p onClick={() => setCategory("/women/sweatshirts")}>
                Sweatshirts
              </p>
              <p onClick={() => setCategory("/women/pants")}>Pants</p>
              <p onClick={() => setCategory("/women/shorts")}>Shorts</p>
              <p onClick={() => setCategory("/women/headwear")}>Headwear</p>
            </div>
          </div>

          <div className="dropdown">
            <Link className="link" to="/unisex/all">
              UNISEX
            </Link>
            <div className="dropdown-content unisex-dropdown">
              <p onClick={() => setCategory("/unisex/jackets")}>Jackets</p>
              <p onClick={() => setCategory("/unisex/shirts")}>T-Shirts</p>
              <p onClick={() => setCategory("/unisex/pants")}>Pants</p>
              <p onClick={() => setCategory("/unisex/shorts")}>Shorts</p>
              <p onClick={() => setCategory("/unisex/headwear")}>Headwear</p>
            </div>
          </div>

          <button
            style={viewCart ? { marginRight: "250px" } : {}}
            className="new-cart"
            onClick={() => handleCartView()}
          >
            {viewCart ? "Close" : `Cart (${cartcount})`}
          </button>
        </div>
      </nav>

      <aside style={viewCart ? { width: "250px" } : {}} className="cart-aside">
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
    </header>
  );
};

export default Header;
