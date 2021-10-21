import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "../styles/footer/footer.css";
import pigeon from "../assets/images/pigeon.png";
import { BsX } from "react-icons/bs";

const ContactUs = ({ handleContactForm }) => {
  const { register, handleSubmit } = useForm();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sends the user's name, email, & message to specific emailjs receiver
  const onFormSubmit = async (data) => {
    try {
      setLoading(true);

      const { text } = await emailjs.send(
        process.env.REACT_APP_SERVICEID_PUBLIC_KEY,
        process.env.REACT_APP_TEMPLATEID_PUBLIC_KEY,
        data,
        process.env.REACT_APP_USERID_PUBLIC_KEY
      );

      if (text === "OK") {
        setSent(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <section className="contact-container">
      <div className="cform-container">
        <button title="Close" onClick={() => handleContactForm()}>
          <BsX />
        </button>

        <h1>Get In Touch</h1>

        <img src={pigeon} alt="Carrier Pigeon" />

        {sent ? (
          <h1>We got it. Thanks for reaching out.</h1>
        ) : (
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div>
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                id="name"
                name="name"
                {...register("name")}
                required
                autoFocus
              />
            </div>

            <div>
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email")}
                required
              />
            </div>

            <label style={{ marginBottom: "0.5em" }} htmlFor="message">
              Your Message :
            </label>
            <textarea
              name="message"
              id="message"
              {...register("message")}
              required
            />

            <input type="submit" value="Send Message" />

            {loading ? <p>Sending your message . . .</p> : ""}

            {error ? (
              <div>
                <p>Oops, looks like something unexpected happened.</p>
                <p>Please try sending your message again.</p>
              </div>
            ) : (
              ""
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
