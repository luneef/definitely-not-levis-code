import { Link, useHistory } from "react-router-dom";
import "../styles/header/header.css";
import CartItem from "./CartItem";
import logo from "../assets/images/logo.png";
import emptybagwebp from "../assets/images/webpimages/emptybag.webp";
import emptybag from "../assets/images/emptybag.png";
import winternewlabel from "../assets/images/winterblue.png";
import { BsBag, BsX } from "react-icons/bs";

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

  // Pushes the category chosen URL
  const setCategory = (category) => {
    history.push(category);
  };

  return (
    <header className="header-container">
      <nav>
        <Link className="link" to="/" title="Home">
          <img
            className="nav-logo"
            src={logo}
            alt="Definitely Not Levi's Logo"
          />
        </Link>

        <div className="actions-nav">
          <img
            style={viewCart ? { top: "-1px" } : {}}
            className="winter-label"
            src={winternewlabel}
            alt="winter label"
          />

          <div className="dropdown">
            <Link className="winter-text" to="/winter-collection/all">
              WINTER
            </Link>
            <div className="dropdown-content winter-dropdown">
              <p
                style={{ color: "#148cee" }}
                onClick={() => setCategory("/winter-collection/kids")}
              >
                Kids
              </p>
              <p
                style={{ color: "#148cee" }}
                onClick={() => setCategory("/winter-collection/men")}
              >
                Men
              </p>
              <p
                style={{ color: "#148cee" }}
                onClick={() => setCategory("/winter-collection/women")}
              >
                Women
              </p>
            </div>
          </div>

          <div className="dropdown">
            <Link className="link" to="/men/all">
              MEN
            </Link>
            <div className="dropdown-content men-dropdown">
              <p onClick={() => setCategory("/men/jackets")}>Jackets</p>
              <p onClick={() => setCategory("/men/sleeves")}>Sleeves</p>
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
              <p onClick={() => setCategory("/women/sweatshirts")}>
                Sweatshirts
              </p>
              <p onClick={() => setCategory("/women/shirts")}>T-Shirts</p>
              <p onClick={() => setCategory("/women/tops")}>Tops</p>
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
              <p onClick={() => setCategory("/unisex/sweatshirts")}>
                Sweatshirts
              </p>
              <p onClick={() => setCategory("/unisex/shirts")}>T-Shirts</p>
              <p onClick={() => setCategory("/unisex/pants")}>Pants</p>
              <p onClick={() => setCategory("/unisex/headwear")}>Headwear</p>
            </div>
          </div>

          <button
            style={viewCart ? { marginRight: "270px" } : {}}
            className="bag"
            onClick={() => handleCartView()}
          >
            {viewCart ? (
              <BsX title="Close Bag" className="bag-close" />
            ) : (
              <>
                <BsBag title="Open Bag" className="bag-status" />
                {cartcount ? <p className="cart-count">{cartcount}</p> : ""}
              </>
            )}
          </button>
        </div>
      </nav>

      <aside style={viewCart ? { width: "270px" } : {}} className="cart-aside">
        {cart.total_items ? (
          <>
            <div className="cart-top">
              <h1>- Bagged Items -</h1>
              <p>- - - - - - - - - - - - - - - -</p>
            </div>

            <CartItem
              viewCart={viewCart}
              cart={cart}
              handleCartView={handleCartView}
              captureCheckout={captureCheckout}
              updateItemQuantity={updateItemQuantity}
              removeItemFromCart={removeItemFromCart}
              emptyCart={emptyCart}
            />
          </>
        ) : (
          <div className="empty-bag">
            <picture>
              <source type="image/webp" srcset={emptybagwebp} />
              <img
                style={viewCart ? { width: "200px" } : {}}
                src={emptybag}
                alt="Empty Bag"
              />
            </picture>

            <p style={viewCart ? { fontSize: "0.9rem" } : {}}>
              THE WORLD IS YOUR RUNWAY,
            </p>
            <p style={viewCart ? { fontSize: "0.9rem" } : {}}>
              ADD TO YOUR BAG NOW!
            </p>
          </div>
        )}
      </aside>
    </header>
  );
};

export default Header;
