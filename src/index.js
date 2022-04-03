import React from "react";
import DarkModeContext from "./lib/darkModeContext";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/index.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
	<DarkModeContext>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</DarkModeContext>
);
