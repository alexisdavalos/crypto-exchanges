import React from "react";
import { NavLink } from "react-router-dom";

const ExchangesTable = ({ exchanges, page, perPage, setPage, setPerPage }) => {
	return exchanges && exchanges.length > 0 ? (
		<div className="p-4 sm:p-6 lg:p-16 -mb-16">
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<h1 className="text-2xl font-semibold text-purple-600 dark:text-yellow-500">
						Top Exchanges
					</h1>
					<p className="mt-2 text-sm text-gray-700 dark:text-white">
						A list of top crypto exchanges including their name, 24 hour volume,
						year established, trust rank, and trust score.
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
											Name
										</th>
										<th
											scope="col"
											className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-50"
										>
											24Hr Trade Volume
										</th>
										<th
											scope="col"
											className="hidden lg:table-cell px-4 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-50"
										>
											Year Est.
										</th>
										<th
											scope="col"
											className="hidden lg:table-cell px-4 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-50"
										>
											Trust Rank
										</th>
										<th
											scope="col"
											className="hidden lg:table-cell py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-50 sm:pr-6"
										>
											Trust Score
										</th>
										<th
											scope="col"
											className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-50 sm:pr-6"
										>
											More Info
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900 dark:bg-opacity-80">
									{exchanges.map((exchange) => (
										<tr
											key={exchange.id}
											className="divide-x divide-gray-200 dark:divide-gray-800"
										>
											<td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 dark:text-gray-50 sm:pl-6">
												<span className="inline-flex justify-start">
													<div className="h-10 w-10 flex-shrink-0">
														<img
															className="h-10 w-10 rounded-full"
															src={exchange.image}
															alt={exchange.name}
														/>
													</div>
													<div className="ml-4 flex-0 whitespace-normal">
														<p className="text-lg font-medium text-gray-900 dark:text-gray-50">
															{exchange.name}
														</p>
														<a
															href={exchange.url}
															target="_blank"
															rel="noopener noreferrer"
															className="text-gray-500 hover:text-purple-500 dark:hover:text-yellow-500 lg:break-all cursor-pointer"
														>
															{exchange.url}
														</a>
													</div>
												</span>
											</td>
											<td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 dark:text-gray-50 sm:pl-6">
												<span className="inline-flex rounded-full text-xs font-semibold leading-5">
													{exchange.trade_volume_24h_btc}
													<strong className="ml-1">BTC</strong>
												</span>
											</td>
											<td className="hidden lg:table-cell whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 dark:text-gray-50 sm:pl-6">
												{exchange.year_established ? (
													<span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
														{exchange.year_established}
													</span>
												) : (
													<span className="inline-flex rounded-full bg-red-100 px-2 text-xs text-center font-semibold leading-5 text-red-800">
														Not Available
													</span>
												)}
											</td>
											<td className="hidden lg:table-cell whitespace-nowrap p-4 text-sm text-gray-900 dark:text-gray-50">
												{exchange.trust_score_rank ? (
													<span className="inline-flex rounded-full text-xs font-semibold leading-5">
														{exchange.trust_score_rank}
													</span>
												) : (
													<span className="inline-flex rounded-full bg-red-100 px-2 text-xs text-center font-semibold leading-5 text-red-800">
														Not Available
													</span>
												)}
											</td>
											<td className="hidden lg:table-cell whitespace-nowrap p-4 text-sm text-gray-900 dark:text-gray-50">
												{exchange.trust_score ? (
													<span className="inline-flex rounded-full text-xs font-semibold leading-5">
														{exchange.trust_score}
													</span>
												) : (
													<span className="inline-flex rounded-full bg-red-100 px-2 text-xs text-center font-semibold leading-5 text-red-800">
														Not Available
													</span>
												)}
											</td>
											<td className="whitespace-nowrap p-4 text-sm text-gray-900 dark:text-gray-50 text-center">
												<NavLink
													className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 bg-origin-border px-4 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
													to={`/exchanges/${exchange.id}`}
												>
													View Data
												</NavLink>
											</td>
										</tr>
									))}
								</tbody>
							</table>
							<nav
								className="bg-gray-50 dark:bg-gray-700 px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-600 sm:px-6"
								aria-label="Pagination"
							>
								<div className="block">
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
										</select>
										<span>per</span>
										<span>page</span>
									</div>
								</div>
								<div className="flex-1 flex justify-between items-center sm:justify-end">
									<span className="mr-4 text-sm text-gray-700 dark:text-gray-50">
										Page: {page}
									</span>
									{page > 1 ? (
										<button
											onClick={() => setPage(page - 1)}
											className="flex items-center justify-center bg-purple-600 dark:bg-yellow-500 bg-origin-border px-4 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
										>
											Previous
										</button>
									) : null}
									<button
										onClick={() => setPage(page + 1)}
										className="ml-3 flex items-center justify-center bg-purple-600 dark:bg-yellow-500 bg-origin-border px-4 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
									>
										Next
									</button>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className="text-center">
			<h3 className="mt-2 text-xl font-medium text-gray-900 dark:text-yellow-500">
				No Exchange Data Found
			</h3>
			<div className="mt-6">
				<button
					type="button"
					onClick={() => setPage(1)}
					className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-yellow-500"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
						/>
					</svg>
					Try Again
				</button>
			</div>
		</div>
	);
};

export default ExchangesTable;
