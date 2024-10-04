import { Provider } from "react-redux";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import store from "./store/index";
createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
