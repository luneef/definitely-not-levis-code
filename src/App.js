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

const App = () => {
  const [cart, setCart] = useState(null);
  const [viewCart, setViewCart] = useState(false);
  const [path, setPath] = useState("");
  const [relatedPath, setRelatedPath] = useState("");

  const handleCartView = () => {
    setViewCart(!viewCart);
  };

  const setItemPath = (newPath) => {
    setPath(newPath);
  };

  const setProductPath = (productPath) => {
    setRelatedPath(productPath);
  };

  const fetchAllClothes = async () => {
    const { data } = await commerce.products.list();
    localStorage.setItem("allClothes", JSON.stringify(data));
  };

  // -------------- Fetch Men Clothes ---------------------

  const fetchMenClothes = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["men"],
    });

    localStorage.setItem("menClothes", JSON.stringify(data));
  };

  const fetchMenJackets = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["men", "jackets"],
    });

    localStorage.setItem("menJackets", JSON.stringify(data));
  };

  const fetchMenShirts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["men", "shirts"],
    });

    localStorage.setItem("menShirts", JSON.stringify(data));
  };

  const fetchMenPants = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["men", "pants"],
    });

    localStorage.setItem("menPants", JSON.stringify(data));
  };

  const fetchMenShorts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["men", "shorts"],
    });

    localStorage.setItem("menShorts", JSON.stringify(data));
  };

  const fetchMenHeadwear = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["men", "headwear"],
    });

    localStorage.setItem("menHeadwear", JSON.stringify(data));
  };

  // -------------- Fetch Women Clothes ---------------------

  const fetchWomenClothes = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["women"],
    });

    localStorage.setItem("womenClothes", JSON.stringify(data));
  };

  const fetchWomenJackets = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["women", "jackets"],
    });

    localStorage.setItem("womenJackets", JSON.stringify(data));
  };

  const fetchWomenShirts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["women", "shirts"],
    });

    localStorage.setItem("womenShirts", JSON.stringify(data));
  };

  const fetchWomenPants = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["women", "pants"],
    });

    localStorage.setItem("womenPants", JSON.stringify(data));
  };

  // const fetchWomenShorts = async () => {
  //   const { data } = await commerce.products.list({
  //     category_slug: ["women", "shorts"],
  //   });

  //   localStorage.setItem("womenShorts", JSON.stringify(data));
  // };

  const fetchWomenDresses = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["women", "dresses"],
    });

    localStorage.setItem("womenDresses", JSON.stringify(data));
  };

  const fetchWomenSweatshirts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["women", "sweatshirts"],
    });

    localStorage.setItem("womenSweatshirts", JSON.stringify(data));
  };

  const fetchWomenHeadwear = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["women", "headwear"],
    });

    localStorage.setItem("womenHeadwear", JSON.stringify(data));
  };

  // -------------- Fetch Unisex Clothes -------------------

  const fetchUnisexClothes = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["unisex"],
    });

    localStorage.setItem("unisexClothes", JSON.stringify(data));
  };

  const fetchUnisexJackets = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["unisex", "jackets"],
    });

    localStorage.setItem("unisexJackets", JSON.stringify(data));
  };

  const fetchUnisexShirts = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["unisex", "shirts"],
    });

    localStorage.setItem("unisexShirts", JSON.stringify(data));
  };

  const fetchUnisexHeadwear = async () => {
    const { data } = await commerce.products.list({
      category_slug: ["unisex", "headwear"],
    });

    localStorage.setItem("unisexHeadwear", JSON.stringify(data));
  };
  // ---------------------------- CART ---------------------

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const addToCart = async (productId, quantity, variantID, optionID) => {
    const { cart } = await commerce.cart.add(productId, quantity, {
      [variantID]: optionID,
    });
    setCart(cart);
  };

  const removeItemFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const updateItemQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
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

    fetchMenClothes();
    fetchMenJackets();
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
    //   fetchWomenShorts();
    fetchWomenHeadwear();

    fetchUnisexClothes();
    fetchUnisexJackets();
    fetchUnisexShirts();
    fetchUnisexHeadwear();

    fetchAllClothes();
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

        <Route exact path="/men/:id">
          <MenClothing viewCart={viewCart} setItemPath={setItemPath} />
        </Route>

        <Route exact path="/women/:id">
          <WomenClothing viewCart={viewCart} setItemPath={setItemPath} />
        </Route>

        <Route exact path="/unisex/:id">
          <UnisexClothing viewCart={viewCart} setItemPath={setItemPath} />
        </Route>

        <Route exact path={path}>
          <Item
            viewCart={viewCart}
            addToCart={addToCart}
            setItemPath={setItemPath}
            setProductPath={setProductPath}
          />
        </Route>

        <Route exact path={relatedPath}>
          <RelatedProduct
            viewCart={viewCart}
            addToCart={addToCart}
            setItemPath={setItemPath}
            setProductPath={setProductPath}
          />
        </Route>

        <Route exact path="*">
          <PageNotFound />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
