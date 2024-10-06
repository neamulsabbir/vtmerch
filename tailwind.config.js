/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				xs: "340px",
				ms: "500px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
				"3xl": "1750px",
				"custom-home": "450px",
			},
			fontFamily: {
				actOfRejection: ['"Act of Rejection"', "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
				sans: ["Inter var", "sans-serif"],
			},
			colors: {
				bgRed: "#EA2127",
				bgLightGray: "#F6F5F5",
				fontBlack: "#060606",
			},
		},
	},
	plugins: [],
};
