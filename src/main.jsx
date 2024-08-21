import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

createRoot(document.querySelector("#root")).render(<App />);
