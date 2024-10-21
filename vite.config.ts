import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'loicpayolfr',
				project: 'loicpayolfr',
				url: 'https://10523fec1e7348388fdfc603695f2633@app.glitchtip.com/'
			}
		}),
		sveltekit()
	]
});
