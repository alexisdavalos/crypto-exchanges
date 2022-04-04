import React from "react";

const EmailSignup = () => {
	return (
		<>
			<div className="relative pt-16 pb-32 overflow-hidden -top-16 -z-1">
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100 dark:from-gray-900"
				></div>
			</div>

			<div className="relative -top-16">
				<div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
					<div className="flex flex-col justify-start items-center">
						<h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
							<span className="block">Ready to get weekly updates?</span>
							<span className="-mb-1 pb-1 block bg-gradient-to-r dark:from-yellow-500 dark:to-yellow-700 from-purple-600 to-indigo-600 bg-clip-text text-transparent">
								Subscribe to our newsletter.
							</span>
						</h2>
					</div>
					<div className="mt-4 flex flex-col justify-center items-center">
						<p className="mt-4 text-base text-gray-900 dark:text-gray-50">
							The latest news, articles, and resources, sent to your inbox
							weekly.
						</p>
						<form className="mt-4 sm:flex w-full max-w-lg">
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								type="email"
								name="email-address"
								id="email-address"
								autoComplete="email"
								required
								className="appearance-none w-full border-2 border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-yellow-500 dark:focus:border-yellow-500 focus:placeholder-gray-400"
								placeholder="Enter your email"
							/>
							<div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
								<button
									type="submit"
									className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-yellow-500 dark:to-yellow-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
								>
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default EmailSignup;
