/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			// Generated using https://uicolors.app/create
			colors: {
				brand: {
					50: '#f5f7fa',
					100: '#eaeff4',
					200: '#d1dce6',
					300: '#a9bed0',
					400: '#7b9cb5',
					500: '#5a809d',
					600: '#476782',
					700: '#3d576f', // Base
					800: '#334759',
					900: '#2e3d4c',
					950: '#1f2832'
				},
				'swiss-coffee': {
					50: '#f9f8f7',
					100: '#f2efee',
					200: '#e1dcda', // Base
					300: '#d5cfcc',
					400: '#bcb1ad',
					500: '#a39590',
					600: '#8b7d77',
					700: '#736762',
					800: '#615753',
					900: '#534c49',
					950: '#2b2624'
				}
			},
			fontFamily: {
				sans: ['Merriweather Sans Variable', 'sans-serif'],
				serif: ['Merriweather', 'serif']
			}
		}
	},
	plugins: []
};
