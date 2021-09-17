import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripeAPI = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutCustomerCard = ({ captureCheckout, checkoutToken, custInfo }) => {
  const onFormSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!elements || !stripe) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    console.log(paymentMethod);

    if (error) {
      console.log(error);
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

      captureCheckout(checkoutToken.id, orderDetails);
    }
  };

  console.log(custInfo);
  return (
    <>
      <Elements stripe={stripeAPI}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => onFormSubmit(e, elements, stripe)}>
              <CardElement />
              <input type="submit" value="HeEY" disabled={!stripe} />
            </form>
          )}
        </ElementsConsumer>
      </Elements>
      <h1>TEST</h1>
    </>
  );
};

export default CheckoutCustomerCard;
