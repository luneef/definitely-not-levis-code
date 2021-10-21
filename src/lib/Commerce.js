import Commerce from "@chec/commerce.js";

// Creating a public variable instance of commerce js
export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);
