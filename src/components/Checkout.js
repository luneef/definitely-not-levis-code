import { useEffect, useState } from "react";
import { commerce } from "../lib/Commerce";
import { useHistory } from "react-router-dom";
import "../styles/checkout/checkout.css";
import CheckoutCustomerCard from "./CheckoutCustomerCard";
import CheckoutCustomerInfo from "./CheckoutCustomerInfo";
import Loading from "./Loading";
import { BsX } from "react-icons/bs";
import orderSticker from "../assets/images/rockstar.png";

const Checkout = ({
  cart,
  handleCartView,
  captureCheckout,
  ordered,
  errorMessage,
  changingInfo,
}) => {
  const history = useHistory();
  const [step, setStep] = useState("info");
  const [custInfo, setCustInfo] = useState({});
  const [editInfo, setEditInfo] = useState(false);
  const [checkoutToken, setcheckoutToken] = useState(null);

  const generateToken = async () => {
    try {
      const token = await commerce.checkout.generateToken(cart.id, {
        type: "cart",
      });

      setcheckoutToken(token);
    } catch (error) {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        setcheckoutToken(token);
      } catch (error) {
        window.alert(
          "Oops, looks like no token for your checkout was generated .\nPlease try reloading the website."
        );
      }
    }
  };

  const backToInfo = () => {
    setStep("info");
    setEditInfo(true);
    changingInfo();
  };

  const proceedToPayment = (customerInfo) => {
    setCustInfo(customerInfo);
    setStep("card");
  };

  useEffect(() => {
    document.title = `Definitely Not Levi's - Checkout`;

    window.scrollTo(0, 0);

    generateToken();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (ordered === "confirm") {
      setStep("confirmation");
    }

    if (ordered === "denied") {
      setStep("card");
    }

    // eslint-disable-next-line
  }, [ordered]);

  if (checkoutToken === null) {
    return <Loading mess={"checkoutTime"} />;
  }

  return (
    <section className="checkout-outer">
      <section className="checkout-container">
        <button
          title="Close Checkout"
          className="checkoutbtn-close"
          onClick={() => {
            changingInfo();
            handleCartView();
            history.goBack();
          }}
        >
          <BsX />
        </button>

        <h1>- CHECKOUT -</h1>

        <section className="form-container">
          <div className="checkout-steps">
            <p>
              <span
                style={step !== "info" ? { padding: " 0.2em 0.3em" } : {}}
                className="ch-number num1"
              >
                {step !== "info" ? <>&#10003;</> : "1"}
              </span>

              <span
                style={step !== "info" ? { color: "#a80f29" } : {}}
                className="ch-line"
              >
                {" "}
                ------------------------{" "}
              </span>

              <span
                style={
                  step === "card"
                    ? { backgroundColor: "#a80f29" }
                    : step === "confirmation"
                    ? { backgroundColor: "#a80f29", padding: " 0.2em 0.3em" }
                    : {}
                }
                className="ch-number num2"
              >
                {step === "confirmation" ? <>&#10003;</> : "2"}
              </span>

              <span
                style={step === "confirmation" ? { color: "#a80f29" } : {}}
                className="ch-line"
              >
                {" "}
                ------------------------{" "}
              </span>
              <span
                style={
                  step === "confirmation" ? { backgroundColor: "#a80f29" } : {}
                }
                className="ch-number num3"
              >
                3
              </span>
            </p>

            <div className="checkout-stepsname">
              <h2 style={step === "info" ? { display: "block" } : {}}>
                Shipping
                <br />
                Information
              </h2>
              <h3 style={step === "card" ? { display: "block" } : {}}>
                Card
                <br />
                Information
              </h3>
              <h4 style={step === "confirmation" ? { display: "block" } : {}}>
                Order
                <br />
                Confirmation
              </h4>
            </div>
          </div>

          {step === "info" ? (
            <CheckoutCustomerInfo
              checkoutToken={checkoutToken}
              proceedToPayment={proceedToPayment}
              custInfo={custInfo}
              editInfo={editInfo}
            />
          ) : (
            ""
          )}

          {step === "card" ? (
            <CheckoutCustomerCard
              cart={cart}
              backToInfo={backToInfo}
              captureCheckout={captureCheckout}
              checkoutToken={checkoutToken}
              custInfo={custInfo}
              ordered={ordered}
              shipErrorMessage={errorMessage}
            />
          ) : (
            ""
          )}

          {step === "confirmation" ? (
            <div className="confirm-container">
              <h1>You Rock! {custInfo.firstName}</h1>
              <img src={orderSticker} alt="Rockstar" />
              <p>Thank you for purchasing.</p>
              <p>An email has been sent to you for your order reference.</p>
            </div>
          ) : (
            ""
          )}
        </section>
      </section>
    </section>
  );
};

export default Checkout;
