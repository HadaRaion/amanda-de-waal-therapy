/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			dark: 'rgb(var(--color-dark) / <alpha-value>)',
			light: 'rgb(var(--color-light) / <alpha-value>)',
			primary: 'rgb(var(--color-primary) / <alpha-value>)',
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-mulish)'],
				serif: ['var(--font-philosopher)'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
