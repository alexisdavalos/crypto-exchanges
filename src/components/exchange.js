import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ExchangeUpdates from "./exchange-updates";
import ExchangeStats from "./exchange-stats";
import ExchangeTickers from "./exchange-tickers";

const Exchange = () => {
	let { exchangeId } = useParams();
	let navigate = useNavigate();
	const [exchangeData, setExchangeData] = useState([]);
	const [statusUpdates, setStatusUpdates] = useState([]);
	const [cryptoTickers, setCryptoTickers] = useState([]);
	const [perPage, setPerPage] = useState(10);

	useEffect(() => {
		if (exchangeId) {
			axios
				.get("https://api.coingecko.com/api/v3/exchanges/" + exchangeId)
				.then(({ data }) => {
					const { status_updates, tickers } = data;
					setExchangeData(data);
					setStatusUpdates(status_updates);
					setCryptoTickers(tickers);
				})
				.catch((error) => {
					console.error(error);
					navigate("../error", { replace: true });
				});
		}
	}, [exchangeId]);
	return (
		<>
			<ExchangeStats exchangeId={exchangeId} exchangeData={exchangeData} />
			<ExchangeTickers
				exchangeId={exchangeId}
				tickers={cryptoTickers.slice(0, perPage)}
				perPage={perPage}
				setPerPage={setPerPage}
			/>
			<ExchangeUpdates statusUpdates={statusUpdates} exchangeId={exchangeId} />
		</>
	);
};

export default Exchange;
