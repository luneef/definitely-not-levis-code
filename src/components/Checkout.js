import { useEffect, useState } from "react";
import { commerce } from "../lib/Commerce";
import { useHistory } from "react-router-dom";
import "../styles/checkout/checkout.css";
import CheckoutCustomerCard from "./CheckoutCustomerCard";
import CheckoutCustomerInfo from "./CheckoutCustomerInfo";
import Loading from "./Loading";

const Checkout = ({ cart, handleCartView, captureCheckout }) => {
  const history = useHistory();
  const [step, setStep] = useState("info");
  const [custInfo, setCustInfo] = useState({});
  const [checkoutToken, setcheckoutToken] = useState(null);

  const generateToken = async () => {
    try {
      const token = await commerce.checkout.generateToken(cart.id, {
        type: "cart",
      });

      setcheckoutToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  const proceedToPayment = (customerInfo) => {
    setCustInfo(customerInfo);
    setStep("card");
  };

  useEffect(() => {
    generateToken();
    // eslint-disable-next-line
  }, []);

  if (checkoutToken === null) {
    return <Loading />;
  }
  //console.log(checkoutToken);

  return (
    <section className="checkout-container">
      <h1>CHECKOUT</h1>
      {step === "info" ? (
        <h2>Shipping Information</h2>
      ) : (
        <h2>Card Information</h2>
      )}
      {step === "info" ? (
        <CheckoutCustomerInfo
          checkoutToken={checkoutToken}
          proceedToPayment={proceedToPayment}
        />
      ) : (
        <CheckoutCustomerCard
          captureCheckout={captureCheckout}
          checkoutToken={checkoutToken}
          custInfo={custInfo}
        />
      )}

      <button onClick={() => history.goBack()}>Close</button>
    </section>
  );
};

export default Checkout;
