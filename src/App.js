import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./lib/Commerce";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Landing from "./pages/Landing";
import PageNotFound from "./pages/PageNotFound";
import Loading from "./components/Loading";

const App = () => {
  const [clothing, setClothing] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});

  const fetchClothing = async () => {
    const { data } = await commerce.products.list();
    setClothing(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const captureCheckout = async (checkoutTokenID, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenID,
        newOrder
      );

      console.log(incomingOrder);
      // setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    //console.log(cart);
    setCart(cart);
  };

  const updateItemQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
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

  useEffect(() => {
    fetchClothing();
    fetchCart();
  }, []);

  if (!clothing.length) {
    return <Loading />;
  }

  return (
    <Router>
      <Header cartcount={cart.total_items} />
      <Switch>
        <Route exact path="/">
          <Landing clothing={clothing} addToCart={addToCart} />
        </Route>

        <Route exact path="/cart">
          <Cart
            cart={cart}
            captureCheckout={captureCheckout}
            updateItemQuantity={updateItemQuantity}
            removeItemFromCart={removeItemFromCart}
            emptyCart={emptyCart}
          />
        </Route>

        <Route exact path="/about" component={About} />

        <Route exact path="*" component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
