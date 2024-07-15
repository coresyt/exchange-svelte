import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/App.svelte', './src/components/*.svelte', './index.html'],

	theme: {
		extend: {
			colors: {
				svelteColor: 'rgb(249, 103, 67)'
			}
		}
	},

	plugins: [typography]
} as Config;
