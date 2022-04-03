import React from "react";
import "./assets/css/tailwind.css";
import "./assets/css/index.css";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(<App />);
