/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			dark: 'rgb(var(--color-dark) / <alpha-value>)',
			light: 'rgb(var(--color-light) / <alpha-value>)',
			primary: 'rgb(var(--color-primary) / <alpha-value>)',
			black: '#000',
		},

		extend: {
			fontFamily: {
				sans: ['var(--font-mulish)'],
				serif: ['var(--font-philosopher)'],
			},
			lineHeight: {
				'extra-loose': '2.5',
				12: '3rem',
			},
			minHeight: {
				screenHeightWithoutHeader: 'calc(100dvh - 5rem)',
			},
			height: {
				screenHeightWithoutHeader: 'calc(100dvh - 5rem)',
			},
		},
	},
};
