import React from "react";
import DarkModeToggle from "./darkmode-toggle";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<header>
			<div className="relative bg-primary">
				<div className="flex justify-between items-center mx-auto px-8 py-6 md:justify-start md:space-x-10 lg:px-16">
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
							Home
						</NavLink>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
