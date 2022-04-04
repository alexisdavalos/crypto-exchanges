module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	purge: true,
	theme: {
		extend: {
			zIndex: {
				"-1": "-1",
			},
		},
	},
	plugins: [],
};
