import React from "react";
import Loading from "./loading";

const ExchangeTickers = ({ tickers, perPage, setPerPage, exchangeId }) => {
	return tickers && tickers.length > 0 ? (
		<div className="p-4 sm:p-6 lg:p-16 -mb-16">
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<h1 className="text-2xl font-semibold text-purple-600 dark:text-yellow-500">
						Top {perPage} Tickers
					</h1>
					<p className="mt-2 text-sm text-gray-700 dark:text-white">
						A list of top crypto tickers available for {exchangeId} including
						their name, 24 hour volume, year established, trust rank, and trust
						score.
					</p>
				</div>
			</div>
			<div className="mt-8 flex flex-col">
				<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
						<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
							<table className="min-w-full divide-y divide-gray-300 dark:divide-gray-600">
								<thead className="bg-gray-50 dark:bg-gray-700">
									<tr className="divide-x divide-gray-200 dark:divide-gray-600">
										<th
											scope="col"
											className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-50 sm:pl-6"
										>
											Symbol
										</th>
										<th
											scope="col"
											className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-50"
										>
											Ask Spread %
										</th>
										<th
											scope="col"
											className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-50"
										>
											Last
										</th>
										<th
											scope="col"
											className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-50"
										>
											Trust Status
										</th>
										<th
											scope="col"
											className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-50 sm:pr-6"
										>
											Volume
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900 dark:bg-opacity-80">
									{tickers.map((coin, idx) => (
										<tr
											key={coin.coin_id + idx}
											className="divide-x divide-gray-200 dark:divide-gray-800"
										>
											<td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 dark:text-gray-50 sm:pl-6">
												<span className="inline-flex justify-start">
													<div className="ml-4 flex-0 whitespace-normal">
														<p className="text-lg font-medium text-gray-900 dark:text-gray-50">
															{idx + 1}. {coin.base}
														</p>
														<a
															href={coin.trade_url}
															target="_blank"
															rel="noopener noreferrer"
															className="text-gray-500 hover:text-purple-500 dark:hover:text-yellow-500 max-w-xs break-all cursor-pointer"
														>
															{coin.trade_url}
														</a>
													</div>
												</span>
											</td>
											<td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 dark:text-gray-50 sm:pl-6">
												<span className="inline-flex rounded-full text-xs font-semibold leading-5">
													{coin.bid_ask_spread_percentage}%
												</span>
											</td>
											<td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 dark:text-gray-50 sm:pl-6">
												{coin.last ? (
													<span className="inline-flex rounded-full px-2 text-xs font-semibold leading-5">
														{coin.last} {coin.base}
													</span>
												) : (
													<span className="inline-flex rounded-full bg-red-100 px-2 text-xs text-center font-semibold leading-5 text-red-800">
														Not Available
													</span>
												)}
											</td>
											<td className="whitespace-nowrap p-4 text-sm text-gray-900 dark:text-gray-50 text-center">
												{coin.trust_score === "green" ? (
													<span className="inline-flex rounded-full text-xs font-semibold leading-5 text-green-500 bg-green-100 px-2">
														Trusted
													</span>
												) : (
													<span className="inline-flex rounded-full bg-red-100 px-2 text-xs text-center font-semibold leading-5 text-red-800">
														Not Trusted
													</span>
												)}
											</td>
											<td className="whitespace-nowrap p-4 text-sm text-gray-900 dark:text-gray-50 text-center">
												{coin.volume ? (
													<span className="inline-flex rounded-full text-xs font-semibold leading-5">
														{coin.volume} BTC
													</span>
												) : (
													<span className="inline-flex rounded-full bg-red-100 px-2 text-xs text-center font-semibold leading-5 text-red-800">
														Not Available
													</span>
												)}
											</td>
										</tr>
									))}
								</tbody>
							</table>
							<nav
								className="bg-gray-50 dark:bg-gray-700 px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-600 sm:px-6"
								aria-label="Pagination"
							>
								<div className="hidden sm:block">
									<div className="text-sm text-gray-700 dark:text-gray-50 inline-flex items-center justify-center space-x-2">
										<span>Showing</span>
										<select
											id="perPage"
											name="perPage"
											placeholder={perPage}
											onInput={(e) => setPerPage(e.target.value)}
											className="mt-1 block w-full p-2 text-base dark:text-gray-700 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
										>
											<option>10</option>
											<option>20</option>
											<option>30</option>
											<option>40</option>
											<option>50</option>
											<option>60</option>
											<option>70</option>
											<option>80</option>
											<option>90</option>
											<option>100</option>
										</select>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<Loading />
	);
};

export default ExchangeTickers;
