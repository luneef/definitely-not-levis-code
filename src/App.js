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

const App = () => {
  const [cart, setCart] = useState(null);
  const [viewCart, setViewCart] = useState(false);

  const handleCartView = () => {
    setViewCart(!viewCart);
  };

  // -------------- Fetch All Clothes ---------------------

  const fetchAllClothes = async () => {
    try {
      const { data } = await commerce.products.list({ limit: 190 });
      localStorage.setItem("allClothes", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  // -------------- Fetch Men Clothes ---------------------

  const fetchMenClothes = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["men"],
        limit: 100,
      });

      localStorage.setItem("menClothes", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMenJackets = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["men", "jackets"],
      });

      localStorage.setItem("menJackets", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMenSleeves = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["men", "longsleeves"],
      });

      localStorage.setItem("menSleeves", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMenShirts = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["men", "shirts"],
      });

      localStorage.setItem("menShirts", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMenPants = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["men", "pants"],
      });

      localStorage.setItem("menPants", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMenShorts = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["men", "shorts"],
      });

      localStorage.setItem("menShorts", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMenHeadwear = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["men", "headwear"],
      });

      localStorage.setItem("menHeadwear", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  // -------------- Fetch Women Clothes ---------------------

  const fetchWomenClothes = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women"],
        limit: 100,
      });

      localStorage.setItem("womenClothes", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWomenJackets = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women", "jackets"],
      });

      localStorage.setItem("womenJackets", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWomenShirts = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women", "shirts"],
      });

      localStorage.setItem("womenShirts", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWomenPants = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women", "pants"],
      });

      localStorage.setItem("womenPants", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWomenShorts = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women", "shorts"],
      });

      localStorage.setItem("womenShorts", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWomenDresses = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women", "dresses"],
      });

      localStorage.setItem("womenDresses", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWomenSweatshirts = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women", "sweatshirts"],
      });

      localStorage.setItem("womenSweatshirts", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWomenTops = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women", "tops"],
      });

      localStorage.setItem("womenTops", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWomenHeadwear = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["women", "headwear"],
      });

      localStorage.setItem("womenHeadwear", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  // -------------- Fetch Unisex Clothes -------------------

  const fetchUnisexClothes = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["unisex"],
        limit: 100,
      });

      localStorage.setItem("unisexClothes", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUnisexJackets = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["unisex", "jackets"],
      });

      localStorage.setItem("unisexJackets", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUnisexSweatshirts = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["unisex", "sweatshirts"],
      });

      localStorage.setItem("unisexSweatshirts", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUnisexShirts = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["unisex", "shirts"],
      });

      localStorage.setItem("unisexShirts", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUnisexPants = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["unisex", "pants"],
      });

      localStorage.setItem("unisexPants", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUnisexHeadwear = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["unisex", "headwear"],
      });

      localStorage.setItem("unisexHeadwear", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  // -------------- Fetch Winter Collection ---------------

  const fetchWinterClothes = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["winter"],
        limit: 100,
      });

      localStorage.setItem("winterClothes", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWinterKidsClothes = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["winter", "winterkid"],
      });

      localStorage.setItem("winterKidClothes", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWinterMenClothes = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["winter", "wintermen"],
      });

      localStorage.setItem("winterMenClothes", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWinterWomenClothes = async () => {
    try {
      const { data } = await commerce.products.list({
        category_slug: ["winter", "winterwoman"],
      });

      localStorage.setItem("winterWomenClothes", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  // ------------------------ CART ---------------------

  const fetchCart = async () => {
    try {
      setCart(await commerce.cart.retrieve());
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (productId, quantity, variantID, optionID) => {
    try {
      const { cart } = await commerce.cart.add(productId, quantity, {
        [variantID]: optionID,
      });
      setCart(cart);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItemFromCart = async (productId) => {
    try {
      const { cart } = await commerce.cart.remove(productId);
      setCart(cart);
    } catch (error) {
      console.log(error);
    }
  };

  const emptyCart = async () => {
    try {
      const { cart } = await commerce.cart.empty();
      setCart(cart);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshCart = async () => {
    try {
      const newCart = await commerce.cart.refresh();
      setCart(newCart);
    } catch (error) {
      console.log(error);
    }
  };

  const updateItemQuantity = async (productId, quantity) => {
    try {
      const { cart } = await commerce.cart.update(productId, { quantity });
      setCart(cart);
    } catch (error) {
      console.log(error);
    }
  };

  const captureCheckout = async (checkoutTokenID, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenID,
        newOrder
      );

      console.log(incomingOrder);

      refreshCart();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();

    fetchAllClothes();

    fetchWinterClothes();
    fetchWinterKidsClothes();
    fetchWinterMenClothes();
    fetchWinterWomenClothes();

    fetchMenClothes();
    fetchMenJackets();
    fetchMenSleeves();
    fetchMenShirts();
    fetchMenPants();
    fetchMenShorts();
    fetchMenHeadwear();

    fetchWomenClothes();
    fetchWomenJackets();
    fetchWomenShirts();
    fetchWomenSweatshirts();
    fetchWomenDresses();
    fetchWomenPants();
    fetchWomenShorts();
    fetchWomenTops();
    fetchWomenHeadwear();

    fetchUnisexClothes();
    fetchUnisexJackets();
    fetchUnisexSweatshirts();
    fetchUnisexShirts();
    fetchUnisexPants();
    fetchUnisexHeadwear();
  }, []);

  if (!cart) {
    return <Loading />;
  }

  return (
    <Router>
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
          <Item viewCart={viewCart} addToCart={addToCart} />
        </Route>

        <Route exact path="/women/item/:id">
          <Item viewCart={viewCart} addToCart={addToCart} />
        </Route>

        <Route exact path="/unisex/item/:id">
          <Item viewCart={viewCart} addToCart={addToCart} />
        </Route>

        <Route exact path="/winter-collection/item/:id">
          <Item viewCart={viewCart} addToCart={addToCart} />
        </Route>

        <Route exact path="/related-item/:id">
          <RelatedProduct viewCart={viewCart} addToCart={addToCart} />
        </Route>

        <Route exact path="/checkout">
          <Checkout
            cart={cart}
            handleCartView={handleCartView}
            captureCheckout={captureCheckout}
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

      <Footer viewCart={viewCart} />
    </Router>
  );
};

export default App;
