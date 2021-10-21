import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

//Rendering the virtual DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
