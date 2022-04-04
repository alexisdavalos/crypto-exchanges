import React from "react";
import DarkModeToggle from "./darkmode-toggle";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<header>
			<div className="relative bg-primary">
				<div className="flex justify-between items-center mx-auto px-12 py-6 md:justify-start md:space-x-10 lg:px-16">
					<div className="flex justify-start flex-1">
						<span className="sr-only">Dark Mode Toggle</span>
						<DarkModeToggle />
					</div>
					<nav className="flex items-center justify-end space-x-10">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive
									? "text-xl font-medium text-purple-600 dark:text-yellow-500 inline-flex items-center"
									: "text-xl font-medium dark:text-white text-gray-500 hover:text-gray-900 dark:hover:text-gray-400 inline-flex items-center"
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 mr-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
							</svg>
							Home
						</NavLink>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
