import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import GlobalStyle from "./styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle displayModal />
  </React.StrictMode>,
  document.getElementById("root")
);
