import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import Exchange from "./components/exchange";
import NotFound from "./components/not-found";
function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="exchanges/:exchangeId" element={<Exchange />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	);
}

export default App;
