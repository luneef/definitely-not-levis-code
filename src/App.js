import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./lib/Commerce";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Landing from "./pages/Landing";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const [clothing, setClothing] = useState([]);
  const [cart, setCart] = useState({});

  const fetchClothing = async () => {
    const { data } = await commerce.products.list();
    setClothing(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const addToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    console.log(cart);
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

  useEffect(() => {
    fetchClothing();
    fetchCart();
  }, []);

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
