import { useEffect } from "react";
import "../styles/privacypolicy/privacy.css";

const PrivacyPolicy = ({ viewCart }) => {
  useEffect(() => {
    document.title = `Definitely Not Levi's - Privacy Policy`;

    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      style={
        viewCart
          ? { marginRight: "270px", padding: "10em 10em", paddingBottom: "4em" }
          : {}
      }
      className="privacy-main"
    >
      <h1>Privacy Policy For Definitely Not Levi's</h1>

      <div className="white-privacy">
        <p>
          At Definitely Not Levi's, accessible at
          "cf-definitely-not-levis.netlify.app", one of our main priorities is
          the privacy of our visitors. This Privacy Policy document contains
          types of information that is collected and recorded by Definitely Not
          Levi's and how we use it.
          <br />
          <br />
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us through email at{" "}
          <a href="mailto:heyitsluneef@gmail.com">heyitsluneef@gmail.com</a>
          <br />
          <br />
          This privacy policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in Definitely Not Levi's. This policy is not
          applicable to any information collected offline or via channels other
          than this website.
        </p>
      </div>

      <div className="red-privacy">
        <h3>Consent</h3>
        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
      </div>

      <div className="white-privacy">
        <h3>Information We Collect</h3>
        <p>
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information.
          <br />
          <br />
          If you contact us directly, we may receive additional information
          about you such as your name, email address, phone number, the contents
          of the message and/or attachments you may send us, and any other
          information you may choose to provide.
        </p>
      </div>

      <div className="red-privacy">
        <h3>How We Use Your Information</h3>
        <p>We use the information we collect in various ways, including to:</p>
        <br />
        <ul>
          <li>Provide, operate, and maintain our website</li>
          <br />
          <li>Improve, personalize, and expand our website</li>
          <br />
          <li>Understand and analyze how you use our website</li>
          <br />
          <li>Develop new products, services, features, and functionality</li>
          <br />
          <li>Send you emails</li>
          <br />
          <li>Find and prevent fraud</li>
        </ul>
      </div>

      <div className="white-privacy">
        <h3>Log Files</h3>
        <p>
          Definitely Not Levi's follows a standard procedure of using log files.
          These files log visitors when they visit websites. All hosting
          companies do this and a part of hosting services' analytics. The
          information collected by log files include internet protocol (IP)
          addresses, browser type, Internet Service Provider (ISP), date and
          time stamp, referring/exit pages, and possibly the number of clicks.
          These are not linked to any information that is personally
          identifiable. The purpose of the information is for analyzing trends,
          administering the site, tracking users' movement on the website, and
          gathering demographic information.
        </p>
      </div>

      <div className="red-privacy">
        <h3>Cookies and Web Beacons</h3>
        <p>
          Like any other website, Definitely Not Levi's uses ‘cookies'. These
          cookies are used to store information including visitors' preferences,
          and the pages on the website that the visitor accessed or visited. The
          information is used to optimize the users' experience by customizing
          our web page content based on visitors' browser type and/or other
          information.
        </p>
      </div>

      <div className="white-privacy">
        <h3>Third-Party Privacy Policies</h3>
        <p>
          Definitely Not Levi's Privacy Policy does not apply to other
          advertisers or websites. Thus, we are advising you to consult the
          respective Privacy Policies of these third-party ad servers for more
          detailed information. It may include their practices and instructions
          about how to opt-out of certain options. You may find a complete list
          of these Privacy Policies and their links here: Privacy Policy Links.
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites.
        </p>
      </div>

      <div className="red-privacy">
        <h3>CCPA Privacy Policy (Do Not Sell My Personal Information)</h3>
        <p>
          Under the CCPA, among other rights, California consumers have the
          right to:
          <br />
          <br />
          Request that a business that collects a consumer's personal data
          disclose the categories and specific pieces of personal data that a
          business has collected about consumers.
          <br />
          <br />
          Request that a business delete any personal data about the consumer
          that a business has collected.
          <br />
          <br />
          Request that a business that sells a consumer's personal data, not
          sell the consumer's personal data.
          <br />
          <br />
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </p>
      </div>

      <div className="white-privacy">
        <h3>GDPR Privacy Policy (Data Protection Rights)</h3>
        <p>
          We would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the following:
          <br />
          <br />
          The right to access – You have the right to request copies of your
          personal data. We may charge you a small fee for this service.
          <br />
          <br />
          The right to rectification – You have the right to request that we
          correct any information you believe is inaccurate. You also have the
          right to request that we complete the information you believe is
          incomplete.
          <br />
          <br />
          The right to erasure – You have the right to request that we erase
          your personal data, under certain conditions.
          <br />
          <br />
          The right to restrict processing – You have the right to request that
          we restrict the processing of your personal data, under certain
          conditions.
          <br />
          <br />
          The right to object to processing – You have the right to object to
          our processing of your personal data, under certain conditions.
          <br />
          <br />
          The right to data portability – You have the right to request that we
          transfer the data that we have collected to another organization, or
          directly to you, under certain conditions.
          <br />
          <br />
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </p>
      </div>

      <div className="red-privacy">
        <h3>Children's Information</h3>
        <p>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
          <br />
          <br />
          Definitely Not Levi's does not knowingly collect any Personal
          Identifiable Information from children under the age of 13. If you
          think that your child provided this kind of information on our
          website, we strongly encourage you to contact us immediately and we
          will do our best efforts to promptly remove such information from our
          records.
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
