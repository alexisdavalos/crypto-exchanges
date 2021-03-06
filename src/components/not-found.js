import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
			<div className="max-w-max mx-auto bg-slate-200 dark:bg-gray-700 dark:bg-opacity-20 bg-opacity-40 p-16 lg:p-32 rounded-lg">
				<main className="sm:flex">
					<p className="text-4xl font-extrabold text-purple-600 dark:text-yellow-500 sm:text-5xl">
						404
					</p>
					<div className="sm:ml-6">
						<div className="sm:border-l sm:border-gray-200 sm:pl-6">
							<h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-50 tracking-tight sm:text-5xl">
								Page not found
							</h1>
							<p className="mt-1 text-base text-gray-500 dark:text-gray-100">
								Please check the URL in the address bar and try again.
							</p>
						</div>
						<div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
							<NavLink
								to="/"
								className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 dark:bg-yellow-500 hover:bg-purple-700 dark:hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-yellow-500"
							>
								Go back home
							</NavLink>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default NotFound;
