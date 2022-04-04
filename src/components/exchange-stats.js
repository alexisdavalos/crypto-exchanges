import React from "react";
import { NavLink } from "react-router-dom";
const ExchangeStats = ({ exchangeId, exchangeData }) => {
	return exchangeData ? (
		<div className="pt-12 sm:pt-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="font-medium text-gray-900 dark:text-yellow-500">
					<NavLink
						to="/"
						className="text-xl leading-6 inline-flex items-center"
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
								d="M11 17l-5-5m0 0l5-5m-5 5h12"
							/>
						</svg>
						<span>Back</span>
					</NavLink>
				</div>
				<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
					<img
						className="rounded-full my-2"
						src={exchangeData.image}
						alt={exchangeData.name}
					/>
					<h2 className="text-3xl font-extrabold text-gray-900 dark:text-yellow-500 sm:text-4xl capitalize">
						{exchangeId}
					</h2>
					{exchangeData.year_established && exchangeData.country ? (
						<p className="mt-3 text-xl text-gray-700 dark:text-gray-50 sm:mt-4 capitalize">
							{exchangeId} was established in the year{" "}
							{exchangeData.year_established} and is based out of{" "}
							{exchangeData.country}
						</p>
					) : null}

					<div className="inline-flex items-center space-x-4 my-4">
						{exchangeData.url ? (
							<a
								href={exchangeData.url}
								target="_blank"
								className="text-gray-400 hover:text-gray-500"
								rel="noreferrer"
							>
								<span className="sr-only">Visit Exchange</span>
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
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</a>
						) : null}

						{exchangeData.facebook_url ? (
							<a
								href={exchangeData.facebook_url}
								target="_blank"
								className="text-gray-400 hover:text-gray-500"
								rel="noreferrer"
							>
								<span className="sr-only">Facebook</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
						) : null}

						{exchangeData.slack_url ? (
							<a
								href={exchangeData.slack_url}
								target="_blank"
								className="text-gray-400 hover:text-gray-500"
								rel="noreferrer"
							>
								<span className="sr-only">Slack</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
								>
									<path d="M6.194 14.644c0 1.16-.943 2.107-2.103 2.107a2.11 2.11 0 0 1-2.104-2.107 2.11 2.11 0 0 1 2.104-2.106h2.103v2.106zm1.061 0c0-1.16.944-2.106 2.104-2.106a2.11 2.11 0 0 1 2.103 2.106v5.274a2.11 2.11 0 0 1-2.103 2.106 2.108 2.108 0 0 1-2.104-2.106v-5.274zm2.104-8.455c-1.16 0-2.104-.948-2.104-2.107s.944-2.106 2.104-2.106a2.11 2.11 0 0 1 2.103 2.106v2.107H9.359zm0 1.06a2.11 2.11 0 0 1 2.103 2.107 2.11 2.11 0 0 1-2.103 2.106H4.092a2.11 2.11 0 0 1-2.104-2.106 2.11 2.11 0 0 1 2.104-2.107h5.267zm8.447 2.107c0-1.16.943-2.107 2.103-2.107a2.11 2.11 0 0 1 2.104 2.107 2.11 2.11 0 0 1-2.104 2.106h-2.103V9.356zm-1.061 0c0 1.16-.944 2.106-2.104 2.106a2.11 2.11 0 0 1-2.103-2.106V4.082a2.11 2.11 0 0 1 2.103-2.106c1.16 0 2.104.946 2.104 2.106v5.274zm-2.104 8.455c1.16 0 2.104.948 2.104 2.107s-.944 2.106-2.104 2.106a2.11 2.11 0 0 1-2.103-2.106v-2.107h2.103zm0-1.06a2.11 2.11 0 0 1-2.103-2.107 2.11 2.11 0 0 1 2.103-2.106h5.268a2.11 2.11 0 0 1 2.104 2.106 2.11 2.11 0 0 1-2.104 2.107h-5.268z"></path>
								</svg>
							</a>
						) : null}

						{exchangeData.twitter_handle ? (
							<a
								href={`https://twitter.com/${exchangeData.twitter_handle}`}
								target="_blank"
								className="text-gray-400 hover:text-gray-500"
								rel="noreferrer"
							>
								<span className="sr-only">Twitter</span>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
								</svg>
							</a>
						) : null}

						{exchangeData.telegram_url ? (
							<a
								href={exchangeData.telegram_url}
								target="_blank"
								className="text-gray-400 hover:text-gray-500"
								rel="noreferrer"
							>
								<span className="sr-only">Telegram</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
								>
									<path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
								</svg>
							</a>
						) : null}
					</div>
				</div>
			</div>
			<div className="mt-10 pb-12 sm:pb-16">
				<div className="relative">
					<div className="absolute inset-0 h-1/2" />
					<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="max-w-4xl mx-auto">
							<dl className="rounded-lg bg-white dark:bg-gray-800 dark:bg-opacity-40 shadow-lg sm:grid sm:grid-cols-3">
								{exchangeData.trade_volume_24h_btc ? (
									<div className="flex flex-col border-b border-gray-100 dark:border-gray-900 p-6 text-center sm:border-0 sm:border-r">
										<dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700 dark:text-gray-50">
											24Hr Trade Volume in BTC
										</dt>
										<dd className="order-1 text-5xl font-extrabold text-purple-600 dark:text-yellow-500">
											{exchangeData.trade_volume_24h_btc.toFixed(0)}
										</dd>
									</div>
								) : null}
								{exchangeData.trust_score ? (
									<div className="flex flex-col border-t border-b border-gray-100 dark:border-gray-900 p-6 text-center sm:border-0 sm:border-l sm:border-r">
										<dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700 dark:text-gray-50">
											Trust Score
										</dt>
										<dd className="order-1 text-5xl font-extrabold text-purple-600 dark:text-yellow-500">
											{exchangeData.trust_score}
										</dd>
									</div>
								) : null}
								{exchangeData.trust_score_rank ? (
									<div className="flex flex-col border-t border-gray-100 dark:border-gray-900 p-6 text-center sm:border-0 sm:border-l">
										<dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700 dark:text-gray-50">
											Trust Rank
										</dt>
										<dd className="order-1 text-5xl font-extrabold text-purple-600 dark:text-yellow-500">
											{exchangeData.trust_score_rank}
										</dd>
									</div>
								) : null}
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : null;
};

export default ExchangeStats;
