import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import Exchange from "./components/exchange";
function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="exchanges/:exchangeId" element={<Exchange />} />
			</Routes>
		</Layout>
	);
}

export default App;
