import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./lib/Commerce";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Landing from "./pages/Landing";
import PageNotFound from "./pages/PageNotFound";
import Item from "./pages/Item";
import MenClothing from "./pages/MenClothing";
import WomenClothing from "./pages/WomenClothing";
import UnisexClothing from "./pages/UnisexClothing";
import Loading from "./components/Loading";
import Checkout from "./components/Checkout";
import RelatedProduct from "./pages/RelatedProduct";
import WinterClothing from "./pages/WinterClothing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GetClothes from "./components/GetClothes";
import MobileNav from "./components/MobileNav";
import "./index.css";

// Main app component
const App = () => {
  const [cart, setCart] = useState(null);
  const [ordered, setOrdered] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [viewCart, setViewCart] = useState(false);
  const [cantAccess, setCantAccess] = useState(false);

  // Handling of bag section display
  const handleCartView = () => {
    setViewCart(!viewCart);
  };

  // Setting of order status and error message while ordering to undefined
  const changingInfo = () => {
    setOrdered("");
    setErrorMessage("");
  };

  // Fetching of cart information
  const fetchCart = async () => {
    try {
      setCart(await commerce.cart.retrieve());
    } catch (error) {
      try {
        setCart(await commerce.cart.retrieve());
      } catch (error) {
        setCantAccess(true);
      }
    }
  };

  // Adding of item/s to cart(bag)
  const addToCart = async (productId, quantity, variantID, optionID) => {
    try {
      const { cart } = await commerce.cart.add(productId, quantity, {
        [variantID]: optionID,
      });
      setCart(cart);
    } catch (error) {
      try {
        const { cart } = await commerce.cart.add(productId, quantity, {
          [variantID]: optionID,
        });
        setCart(cart);
      } catch (error) {
        window.alert(
          "Oops, looks like the item was not successfully added to your bag.\nPlease try adding it again."
        );
      }
    }
  };

  // Removing of item/s to cart(bag)
  const removeItemFromCart = async (productId) => {
    try {
      const { cart } = await commerce.cart.remove(productId);
      setCart(cart);
    } catch (error) {
      try {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
      } catch (error) {
        window.alert(
          "Oops, looks like the item was not successfully removed from your bag.\nPlease try removing it again."
        );
      }
    }
  };

  // Set the cart(bag) to empty
  const emptyCart = async () => {
    try {
      const { cart } = await commerce.cart.empty();
      setCart(cart);
    } catch (error) {
      try {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
      } catch (error) {
        window.alert(
          "Oops, looks like your bag was not successfully emptied.\nPlease try it again."
        );
      }
    }
  };

  // Setting a new cart after successful order
  const refreshCart = async () => {
    try {
      const newCart = await commerce.cart.refresh();
      setCart(newCart);
    } catch (error) {
      try {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
      } catch (error) {
        window.alert(
          "Oops, looks like your bag was not successfully refreshed.\nPlease try reloading the page."
        );
      }
    }
  };

  // Updating of item/s quantity to cart(bag)
  const updateItemQuantity = async (productId, quantity) => {
    try {
      const { cart } = await commerce.cart.update(productId, { quantity });
      setCart(cart);
    } catch (error) {
      try {
        const { cart } = await commerce.cart.update(productId, { quantity });
        setCart(cart);
      } catch (error) {
        window.alert(
          "Oops, looks like the item's quantity was not successfully updated.\nPlease try it again."
        );
      }
    }
  };

  // Fetching and validation of order information
  const captureCheckout = async (checkoutTokenID, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenID,
        newOrder
      );

      setOrdered("confirm");

      console.log("Order Confirmation: ", incomingOrder.customer_reference);

      refreshCart();
    } catch (error) {
      try {
        const incomingOrder = await commerce.checkout.capture(
          checkoutTokenID,
          newOrder
        );

        setOrdered("confirm");

        console.log("Order Confirmation: ", incomingOrder.customer_reference);

        refreshCart();
      } catch (error) {
        setOrdered("denied");
        setErrorMessage(
          `${error.data.error.message}. Please check your shipping info.`
        );
      }
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Checking if user's browser has local storage enabled
  try {
    JSON.parse(localStorage.getItem("cookiesEnabled"));
    if (!cart) {
      if (cantAccess) {
        return <PageNotFound />;
      } else {
        return <Loading />;
      }
    }
  } catch (error) {
    console.log("%cLocal storage disabled.", "color: red");
    return <Loading mess={"cookiesDisabled"} />;
  }

  return (
    <Router>
      <GetClothes />

      <Header
        cartcount={cart.total_items}
        handleCartView={handleCartView}
        viewCart={viewCart}
        cart={cart}
        captureCheckout={captureCheckout}
        updateItemQuantity={updateItemQuantity}
        removeItemFromCart={removeItemFromCart}
        emptyCart={emptyCart}
      />

      <div className="website-container">
        <Switch>
          <Route exact path="/">
            <Landing viewCart={viewCart} />
          </Route>

          <Route exact path="/men/:id">
            <MenClothing viewCart={viewCart} />
          </Route>

          <Route exact path="/women/:id">
            <WomenClothing viewCart={viewCart} />
          </Route>

          <Route exact path="/unisex/:id">
            <UnisexClothing viewCart={viewCart} />
          </Route>

          <Route exact path="/winter-collection/:id">
            <WinterClothing viewCart={viewCart} />
          </Route>

          <Route exact path="/men/item/:id">
            <Item
              cartcount={cart.total_items}
              viewCart={viewCart}
              addToCart={addToCart}
            />
          </Route>

          <Route exact path="/women/item/:id">
            <Item
              cartcount={cart.total_items}
              viewCart={viewCart}
              addToCart={addToCart}
            />
          </Route>

          <Route exact path="/unisex/item/:id">
            <Item
              cartcount={cart.total_items}
              viewCart={viewCart}
              addToCart={addToCart}
            />
          </Route>

          <Route exact path="/winter-collection/item/:id">
            <Item
              cartcount={cart.total_items}
              viewCart={viewCart}
              addToCart={addToCart}
            />
          </Route>

          <Route exact path="/related-item/:id">
            <RelatedProduct
              cartcount={cart.total_items}
              viewCart={viewCart}
              addToCart={addToCart}
            />
          </Route>

          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              handleCartView={handleCartView}
              captureCheckout={captureCheckout}
              ordered={ordered}
              errorMessage={errorMessage}
              changingInfo={changingInfo}
            />
          </Route>

          <Route exact path="/about">
            <About viewCart={viewCart} />
          </Route>

          <Route exact path="/privacy-policy">
            <PrivacyPolicy viewCart={viewCart} />
          </Route>

          <Route exact path="*">
            <PageNotFound viewCart={viewCart} />
          </Route>
        </Switch>
      </div>

      <Footer viewCart={viewCart} />

      <MobileNav
        cartcount={cart.total_items}
        cart={cart}
        updateItemQuantity={updateItemQuantity}
        removeItemFromCart={removeItemFromCart}
        emptyCart={emptyCart}
      />
    </Router>
  );
};

export default App;
