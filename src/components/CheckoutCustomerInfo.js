import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { commerce } from "../lib/Commerce";
import Loading from "./Loading";

const CheckoutCustomerInfo = ({ checkoutToken, proceedToPayment }) => {
  const { register, handleSubmit } = useForm();

  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingRegions, setShippingRegions] = useState([]);
  const [shippingRegion, setShippingRegion] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  // Fetching Countries
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
      setShippingCountry(Object.keys(countries)[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetching Regions
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

      setShippingRegion(Object.keys(subdivisions)[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetching Shipping Options
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

      setShippingOption(shippingMethod[0].id);
    } catch (error) {
      console.log(error);
    }
  };

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

  if (!shippingCountries.length) {
    return <Loading />;
  }

  if (!shippingRegions.length) {
    return <Loading />;
  }

  if (!shippingOptions.length) {
    return <Loading />;
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input
        type="text"
        placeholder="Enter first name here:"
        name="firstName"
        {...register("firstName")}
        required
      />

      <input
        type="text"
        placeholder="Enter last name here:"
        name="lastName"
        {...register("lastName")}
        required
      />

      <input
        type="email"
        placeholder="Enter email here:"
        name="email"
        {...register("email")}
        required
      />

      <input
        type="text"
        placeholder="Enter address here:"
        name="address"
        {...register("address")}
        required
      />

      <input
        type="text"
        placeholder="Enter city here:"
        name="city"
        {...register("city")}
        required
      />

      <input
        type="number"
        placeholder="Enter ZIP here:"
        name="zip"
        {...register("zip")}
        required
      />

      <label htmlFor="country">Country: </label>
      <select
        name="country"
        id="country"
        value={shippingCountry}
        onChange={(e) => setShippingCountry(e.target.value)}
      >
        {shippingCountries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>

      <label htmlFor="region">State/Province: </label>
      <select
        name="region"
        id="region"
        value={shippingRegion}
        onChange={(e) => setShippingRegion(e.target.value)}
      >
        {shippingRegions.map((region) => (
          <option key={region.code} value={region.code}>
            {region.name}
          </option>
        ))}
      </select>

      <label htmlFor="shipmethod">Shipping Option: </label>
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

      <input type="submit" value="Proceed To Card" />
    </form>
  );
};

export default CheckoutCustomerInfo;
