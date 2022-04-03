import React from "react";
import DarkModeContext from "./lib/darkModeContext";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/index.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
	<DarkModeContext>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="exchanges" element={<App />}>
						<Route path=":exchangeId" element={<App />} />
					</Route>
					<Route path="coins" element={<App />}>
						<Route path=":coinId" element={<App />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</DarkModeContext>
);
