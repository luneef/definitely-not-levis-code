import { useState, useEffect } from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { commerce } from "../lib/Commerce";
import { BsArrowLeft, BsExclamationCircle } from "react-icons/bs";
import loadingdots from "../assets/images/loadingdots.gif";
import "../styles/checkout/checkout.css";

const stripeAPI = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutCustomerCard = ({
  cart,
  backToInfo,
  captureCheckout,
  checkoutToken,
  custInfo,
  ordered,
  shipErrorMessage,
}) => {
  const [shipMethod, setShipMethod] = useState({});
  const [cardError, setCardError] = useState(false);
  const [errorMessage, setErroMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch the shipping method selected to verify price to be added on checkout
  const fetchShipMethod = async () => {
    try {
      const data = await commerce.checkout.checkShippingOption(
        checkoutToken.id,
        {
          shipping_option_id: custInfo.shippingOption,
          country: custInfo.shippingCountry,
          region: custInfo.shippingRegion,
        }
      );

      setShipMethod(data);
    } catch (error) {
      try {
        const data = await commerce.checkout.checkShippingOption(
          checkoutToken.id,
          {
            shipping_option_id: custInfo.shippingOption,
            country: custInfo.shippingCountry,
            region: custInfo.shippingRegion,
          }
        );

        setShipMethod(data);
      } catch (error) {}
    }
  };

  // Handles the card information entered if its valid or not
  const onFormSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!elements || !stripe) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setCardError(true);
      setErroMessage(error.message);
    } else {
      const orderDetails = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: custInfo.firstName,
          lastname: custInfo.lastName,
          email: custInfo.email,
        },
        shipping: {
          name: "Primary",
          street: custInfo.address,
          town_city: custInfo.city,
          county_state: custInfo.shippingRegion,
          postal_zip_code: custInfo.zip,
          country: custInfo.shippingCountry,
        },
        fulfillment: { shipping_method: custInfo.shippingOption },
        payment: {
          gateway: "test_gateway",
          stripe: { payment_method_id: paymentMethod.id },
          card: {
            number: "4242424242424242",
            expiry_month: "02",
            expiry_year: "24",
            cvc: "123",
            postal_zip_code: "94107",
          },
        },
      };

      setLoading(true);

      captureCheckout(checkoutToken.id, orderDetails);
    }
  };

  useEffect(() => {
    fetchShipMethod();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setLoading(false);

    if (ordered === "denied") {
      setCardError(true);
    }

    // eslint-disable-next-line
  }, [ordered]);

  useEffect(() => {
    if (ordered === "denied") {
      setErroMessage(shipErrorMessage);
    }

    // eslint-disable-next-line
  }, [shipErrorMessage]);

  return (
    <>
      <section>
        <div className="checkoutitemsum-cont">
          {cart.line_items.map((item) => {
            return (
              <div className="checkoutitem-sum" key={item.id}>
                <p>
                  {item.variant.description}
                  <span>x{item.quantity}</span>
                </p>

                <div>
                  <p>{item.line_total.formatted_with_symbol}</p>
                </div>
              </div>
            );
          })}
        </div>

        {shipMethod ? (
          shipMethod.description === "International" ? (
            <div className="ship-expense">
              <p>{shipMethod.description} Shipping</p>
              <p>{shipMethod.price.formatted_with_symbol}</p>
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )}

        <div className="checkoutitem-total">
          <p>Total:</p>

          {shipMethod ? (
            shipMethod.description === "International" ? (
              <span>{`$${cart.subtotal.raw + shipMethod.price.raw}.00`}</span>
            ) : (
              <span>{cart.subtotal.formatted_with_symbol}</span>
            )
          ) : (
            <span>{cart.subtotal.formatted_with_symbol}</span>
          )}
        </div>
      </section>

      <Elements stripe={stripeAPI}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form
              className="card-input"
              onSubmit={(e) => onFormSubmit(e, elements, stripe)}
            >
              <CardElement />
              <input type="submit" value="PLACE ORDER" disabled={!stripe} />
            </form>
          )}
        </ElementsConsumer>
      </Elements>

      {cardError ? (
        <p
          style={ordered === "denied" ? { fontSize: "0.7rem" } : {}}
          className="card-error"
        >
          <BsExclamationCircle /> {errorMessage}
        </p>
      ) : (
        ""
      )}

      {loading ? (
        <p className="placing-order">
          Confirming Order
          <img src={loadingdots} alt="Loading Dots" />
        </p>
      ) : (
        ""
      )}

      <div className="backinfo-btn">
        <button
          onClick={() => {
            backToInfo();
          }}
        >
          <BsArrowLeft />
        </button>
        <p>BACK TO SHIPPING INFO</p>
      </div>
    </>
  );
};

export default CheckoutCustomerCard;
