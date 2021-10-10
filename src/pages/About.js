import { useEffect } from "react";
import "../styles/about/about.css";
import logo from "../assets/images/logo.png";

const About = ({ viewCart }) => {
  useEffect(() => {
    document.title = `Definitely Not Levi's - About`;

    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      style={viewCart ? { marginRight: "270px", padding: "10em 10em" } : {}}
      className="about-main"
    >
      <img src={logo} alt="Definitely Not Levi's Logo" />

      <div>
        <h1>Not Really An Official Levi's Website</h1>
        <p>
          This website is just a mockup / redesign of the official website for
          personal use. However, this website is fully capable of handling
          e-commerce transactions. All item/product/clothing being tailored in
          this website are just for demonstration purposes . All
          item/product/clothing added to the bag are just for e-commerce
          purchase demostration. No actual product from this website shall be
          delivered to you.
        </p>

        <h1>All Product Imagery Used Fall Under Creative Commons</h1>
        <p>
          The images and stickers used in this website, from item/clothing
          preview to stickers displayed throughout the whole shopping
          experience, comes from third-party photo/imagery websites such as{" "}
          <a href="https://www.pexels.com/" rel="noreferrer" target="_blank">
            Pexels.com
          </a>
          ,{" "}
          <a href="https://unsplash.com/" rel="noreferrer" target="_blank">
            Unsplash.com
          </a>{" "}
          {"&"}{" "}
          <a href="https://www.flaticon.com/" rel="noreferrer" target="_blank">
            Flaticon.com
          </a>{" "}
          . The developer of this website extends his credits to the owners of
          the photos or stickers used in the website.
        </p>

        <h1>Demonstatory Transaction In The Website</h1>
        <p>
          Individuals wanting to checkout their "bagged" item/s can use a
          demonstration card. The testing card is conveniently provided by{" "}
          <a href="https://stripe.com/" rel="noreferrer" target="_blank">
            Stripe.com
          </a>{" "}
          . Details of the said test card are as follows:
        </p>
        <h4>
          Card #: <span>4242 4242 4242 4242</span>
        </h4>
        <h4>
          Expiration Date: <span>04/24</span>
        </h4>
        <h4>
          Security Code/CVC: <span>242</span>
        </h4>
        <h4>
          Zip/Postal Code: <span>42424</span>
        </h4>
        <br />
        <p>
          Once the shipping {"&"} card information are filled-out and the item/s
          is/are placed for order, an email will be sent to the email address
          indicated while filling out the shipping form confirming the order
          transaction.
        </p>
      </div>

      <h2>~ Enjoy Bagging ~</h2>
    </main>
  );
};

export default About;
