import React from "react";
import Banner from "./banner";
import LogoCloud from "./logo-cloud";
import ExchangesTable from "./exchanges-table";
import EmailSignup from "./email-signup";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
	const [page, setPage] = useState(1);
	const [perPage, setPerPage] = useState(10);
	const [exchanges, setExchanges] = useState([]);
	useEffect(() => {
		if (page && perPage) {
			const urlParams = new URLSearchParams({ page, per_page: perPage });
			axios
				.get(
					"https://api.coingecko.com/api/v3/exchanges?" + urlParams.toString()
				)
				.then(({ data }) => {
					setExchanges(data);
				})
				.catch((error) => {
					console.error(error);
					setExchanges([]);
				});
		}
	}, [page, perPage]);
	return (
		<>
			<Banner perPage={perPage} />
			<LogoCloud />
			<ExchangesTable
				exchanges={exchanges}
				page={page}
				perPage={perPage}
				setPage={setPage}
				setPerPage={setPerPage}
			/>
			<EmailSignup />
		</>
	);
};

export default Home;
