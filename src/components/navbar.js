import React from "react";
import DarkModeToggle from "./darkmode-toggle";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<header>
			<div className="relative bg-primary">
				<div className="flex justify-between items-center mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-16">
					<div className="flex justify-start flex-1">
						<span className="sr-only">Dark Mode Toggle</span>
						<DarkModeToggle />
					</div>
					<nav className="flex items-center justify-end space-x-10">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive
									? "text-base font-medium text-purple-600 dark:text-yellow-500"
									: "text-base font-medium dark:text-white text-gray-500 hover:text-gray-900 dark:hover:text-gray-400"
							}
						>
							Exchanges
						</NavLink>
						<NavLink
							to="/coins"
							className={({ isActive }) =>
								isActive
									? "text-base font-medium text-purple-600 dark:text-yellow-500"
									: "text-base font-medium dark:text-white text-gray-500 hover:text-gray-900 dark:hover:text-gray-400"
							}
						>
							Coins
						</NavLink>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
