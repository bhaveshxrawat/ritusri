/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: "Poppins",
			},
			colors: {
				primary: "#445EA8"
			}
		},
		screens: {
			'md': {'max': '675px'},
		}
	},
	plugins: [],
}
