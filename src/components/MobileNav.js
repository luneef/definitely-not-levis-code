import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/mobilenav/mobilenav.css";
import {
  BsBag,
  BsGrid,
  BsInfoSquare,
  BsCaretDown,
  BsArrowUp,
  BsArrowDown,
} from "react-icons/bs";
import { IoShirtOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import CartItem from "./CartItem";
import ContactUs from "./ContactUs";
import logo from "../assets/images/logo.png";
import emptybagwebp from "../assets/images/webpimages/emptybag.webp";
import emptybag from "../assets/images/emptybag.png";

const MobileNav = ({
  cartcount,
  cart,
  updateItemQuantity,
  removeItemFromCart,
  emptyCart,
}) => {
  const history = useHistory();
  const [menu, setMenu] = useState("");
  const [catActive, setCatActive] = useState(false);
  const [bagActive, setBagActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [contactUs, setContactUs] = useState(false);

  useEffect(() => {
    setMenu("home");
  }, []);

  return (
    <>
      <header className="mobileview-header">
        <div>
          <img src={logo} alt="Definitely Not Levis Logo" />
        </div>
      </header>

      <div
        style={
          menu === "category" ? (catActive ? { height: "330px" } : {}) : {}
        }
        className="menu-container"
      >
        <div className="menuinner-container menu-cat">
          <button
            className="menucat-men"
            onClick={() => {
              history.push("/men/all");
              setCatActive(!catActive);
            }}
          >
            MEN
          </button>
          <button
            className="menucat-women"
            onClick={() => {
              history.push("/women/all");
              setCatActive(!catActive);
            }}
          >
            WOMEN
          </button>
          <button
            className="menucat-unisex"
            onClick={() => {
              history.push("/unisex/all");
              setCatActive(!catActive);
            }}
          >
            UNISEX
          </button>
          <button
            className="menucat-winter"
            onClick={() => {
              history.push("/winter-collection/all");
              setCatActive(!catActive);
            }}
          >
            WINTER
          </button>
        </div>
      </div>

      <div
        style={menu === "bag" ? (bagActive ? { height: "450px" } : {}) : {}}
        className="menu-container"
      >
        <div className="menuinner-container menu-bag">
          {cartcount ? (
            <div className="menubag-hasitem">
              <h1 className="menubag-title">Bagged Items</h1>

              {cart.total_unique_items > 1 ? (
                <div className="scroll-text">
                  <BsArrowUp
                    style={{
                      width: "25px",
                      height: "25px",
                      marginBottom: "1.5em",
                    }}
                  />

                  <p>s</p>
                  <p>c</p>
                  <p>r</p>
                  <p>o</p>
                  <p>l</p>
                  <p>l</p>

                  <BsArrowDown
                    style={{
                      width: "25px",
                      height: "25px",
                      marginTop: "1.5em",
                    }}
                  />
                </div>
              ) : (
                ""
              )}

              <CartItem
                cart={cart}
                updateItemQuantity={updateItemQuantity}
                removeItemFromCart={removeItemFromCart}
                emptyCart={emptyCart}
              />
            </div>
          ) : (
            <div className="menubag-noitem">
              <picture>
                <source type="image/webp" srcset={emptybagwebp} />
                <img src={emptybag} alt="Empty Bag" />
              </picture>

              <p>THE WORLD IS YOUR RUNWAY,</p>
              <p>ADD TO YOUR BAG NOW!</p>
            </div>
          )}
        </div>
      </div>

      <div
        style={menu === "about" ? (aboutActive ? { height: "155px" } : {}) : {}}
        className="menu-container"
      >
        <div className="menuinner-container menu-info">
          <button
            className="menuabout"
            onClick={() => {
              history.push("/about");
              setAboutActive(!aboutActive);
            }}
          >
            ABOUT
          </button>
          <button
            className="menuprivacy"
            onClick={() => {
              history.push("/privacy-policy");
              setAboutActive(!aboutActive);
            }}
          >
            PRIVACY POLICY
          </button>

          <button
            className="menucookies"
            onClick={() => {
              setContactUs(true);
              setAboutActive(!aboutActive);
            }}
          >
            CONTACT US
          </button>

          {contactUs ? <ContactUs /> : ""}
        </div>
      </div>

      <nav className="mobilenav-container">
        <div className="mnav-inner">
          <button
            aria-label="Go to homepage"
            onClick={() => {
              history.push("/");
              setMenu("home");
              setCatActive(false);
              setAboutActive(false);
              setBagActive(false);
            }}
          >
            <BsGrid style={menu === "home" ? { color: "#a80f29" } : {}} />
          </button>

          <button
            aria-label="Toggle categories"
            onClick={() => {
              setMenu("category");
              setCatActive(!catActive);
              setBagActive(false);
              setAboutActive(false);
            }}
          >
            {catActive ? (
              <BsCaretDown style={{ color: "#a80f29" }} />
            ) : (
              <IoShirtOutline
                style={menu === "category" ? { color: "#a80f29" } : {}}
              />
            )}
          </button>

          <button
            aria-label="Toggle bag"
            onClick={() => {
              setMenu("bag");
              setBagActive(!bagActive);
              setCatActive(false);
              setAboutActive(false);
            }}
          >
            {bagActive ? (
              <BsCaretDown style={{ color: "#a80f29" }} />
            ) : (
              <>
                <BsBag style={menu === "bag" ? { color: "#a80f29" } : {}} />
                {cartcount ? (
                  <p
                    style={{ color: "white", width: "25px", height: "25px" }}
                    className="mobcart-count"
                  >
                    {cartcount}
                  </p>
                ) : (
                  ""
                )}
              </>
            )}
          </button>

          <button
            aria-label="Toggle website information"
            onClick={() => {
              setMenu("about");
              setAboutActive(!aboutActive);
              setCatActive(false);
              setBagActive(false);
              setContactUs(false);
            }}
          >
            {contactUs ? (
              <GrClose style={{ border: "3px solid #a80f29" }} />
            ) : aboutActive ? (
              <BsCaretDown style={{ color: "#a80f29" }} />
            ) : (
              <BsInfoSquare
                style={menu === "about" ? { color: "#a80f29" } : {}}
              />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
