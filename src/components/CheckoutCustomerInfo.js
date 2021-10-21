import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { commerce } from "../lib/Commerce";
import Loading from "./Loading";
import "../styles/checkout/checkout.css";

const CheckoutCustomerInfo = ({
  checkoutToken,
  proceedToPayment,
  custInfo,
  editInfo,
}) => {
  const { register, handleSubmit } = useForm();
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingRegions, setShippingRegions] = useState([]);
  const [shippingRegion, setShippingRegion] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const [editShipping, setEditShipping] = useState(false);

  // Fetch the available shipping countries
  const fetchShippingCountries = async (checkoutTokenID) => {
    try {
      const { countries } = await commerce.services.localeListShippingCountries(
        checkoutTokenID
      );

      setShippingCountries(
        Object.entries(countries).map((country) => ({
          code: country[0],
          name: country[1],
        }))
      );

      if (editInfo) {
        setShippingCountry(custInfo.shippingCountry);
      } else {
        setShippingCountry(Object.keys(countries)[0]);
      }
    } catch (error) {
      window.alert(
        "Oops, looks like something unexpected happened.\nPlease try reloading the website."
      );
    }
  };

  // Fetch the available shipping regions of the country selected
  const fetchShippingRegions = async (countryCode) => {
    try {
      const { subdivisions } = await commerce.services.localeListSubdivisions(
        countryCode
      );

      setShippingRegions(
        Object.entries(subdivisions).map((region) => ({
          code: region[0],
          name: region[1],
        }))
      );

      if (editInfo) {
        if (editShipping) {
          setShippingRegion(Object.keys(subdivisions)[0]);
        } else {
          setShippingRegion(custInfo.shippingRegion);
        }
      } else {
        setShippingRegion(Object.keys(subdivisions)[0]);
      }
    } catch (error) {
      window.alert(
        "Oops, looks like something unexpected happened.\nPlease try reloading the website."
      );
    }
  };

  // Fetch the available shipping method/options
  const fetchShippingOptions = async (checkoutTokenID, country, region) => {
    try {
      const shippingMethod = await commerce.checkout.getShippingOptions(
        checkoutTokenID,
        {
          country,
          region,
        }
      );

      setShippingOptions(
        shippingMethod.map((shipMeth) => ({
          id: shipMeth.id,
          description: shipMeth.description,
          price: shipMeth.price.formatted_with_symbol,
        }))
      );

      if (editInfo) {
        if (editShipping) {
          setShippingOption(shippingMethod[0].id);
        } else {
          setShippingOption(custInfo.shippingOption);
        }
      } else {
        setShippingOption(shippingMethod[0].id);
      }
    } catch (error) {
      window.alert(
        "Oops, looks like something unexpected happened.\nPlease try reloading the website."
      );
    }
  };

  // Assigns the data from form to object and goes to card info input step
  const onFormSubmit = (data) => {
    const customerInfo = {
      ...data,
      shippingCountry,
      shippingRegion,
      shippingOption,
    };

    proceedToPayment(customerInfo);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (shippingCountry) {
      fetchShippingRegions(shippingCountry);
    }

    // eslint-disable-next-line
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingRegion) {
      fetchShippingOptions(checkoutToken.id, shippingCountry, shippingRegion);
    }

    // eslint-disable-next-line
  }, [shippingRegion]);

  // Displays the loading screen while fetching shipping countries
  if (!shippingCountry) {
    return <Loading mess={"checkoutTime"} />;
  }

  // Displays the loading screen while fetching shipping regions
  if (!shippingRegion) {
    return <Loading mess={"checkoutTime"} />;
  }

  // Displays the loading screen while fetching shipping method
  if (!shippingOption) {
    return <Loading mess={"checkoutTime"} />;
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <label htmlFor="firstName">
          Name: <span>*</span>
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          defaultValue={editInfo ? custInfo.firstName : ""}
          name="firstName"
          {...register("firstName")}
          required
          autoFocus
        />

        <input
          type="text"
          placeholder="Last Name"
          defaultValue={editInfo ? custInfo.lastName : ""}
          name="lastName"
          {...register("lastName")}
          required
        />
      </div>

      <div>
        <label htmlFor="email">
          Email: <span>*</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="example@email.com"
          defaultValue={editInfo ? custInfo.email : ""}
          name="email"
          {...register("email")}
          required
        />
      </div>

      <div>
        <label htmlFor="address">
          Location: <span>*</span>
        </label>
        <input
          type="text"
          id="address"
          placeholder="Street/Building/Apartment#"
          defaultValue={editInfo ? custInfo.address : ""}
          name="address"
          {...register("address")}
          required
        />

        <input
          type="text"
          placeholder="City"
          defaultValue={editInfo ? custInfo.city : ""}
          name="city"
          {...register("city")}
          required
        />

        <input
          type="number"
          placeholder="Zip Code"
          defaultValue={editInfo ? custInfo.zip : ""}
          name="zip"
          {...register("zip")}
          required
        />
      </div>

      <div>
        <label htmlFor="country">
          Country: <span>*</span>
        </label>
        <select
          name="country"
          id="country"
          value={shippingCountry}
          onChange={(e) => {
            setEditShipping(true);
            setShippingCountry(e.target.value);
          }}
        >
          {shippingCountries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="region">
          State/Province: <span>*</span>
        </label>
        <select
          name="region"
          id="region"
          value={shippingRegion}
          onChange={(e) => {
            setEditShipping(true);
            setShippingRegion(e.target.value);
          }}
        >
          {shippingRegions.map((region) => (
            <option key={region.code} value={region.code}>
              {region.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="shipmethod">
          Shipping Option: <span>*</span>
        </label>
        <select
          name="shipmethod"
          id="shipmethod"
          value={shippingOption}
          onChange={(e) => setShippingOption(e.target.value)}
        >
          {shippingOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {`${option.description} - (${option.price})`}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="GO  TO  CARD  INFORMATION" />
    </form>
  );
};

export default CheckoutCustomerInfo;
