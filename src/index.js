import React from "react";
import DarkModeContext from "./lib/darkModeContext";
import "./assets/css/index.css";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
	<DarkModeContext>
		<App />
	</DarkModeContext>
);
