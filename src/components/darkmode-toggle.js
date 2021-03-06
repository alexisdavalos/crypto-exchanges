import React from "react";
import { DarkModeContext } from "../lib/darkModeContext";
import { useContext } from "react";

const DarkModeToggle = () => {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);
	return (
		<button
			data-test="dark-mode-toggle"
			className={
				(darkMode
					? "bg-gray-50 text-gray-900 p-2 rounded-md cursor-pointer"
					: "bg-gray-900 text-gray-50 p-2 rounded-md cursor-pointer") +
				"border-none ring-transparent"
			}
		>
			{darkMode ? (
				<svg
					onClick={() => setDarkMode(!darkMode)}
					className="h-8 w-8"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					onClick={() => setDarkMode(!darkMode)}
					className="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			)}
		</button>
	);
};

export default DarkModeToggle;
