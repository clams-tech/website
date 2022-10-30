import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const dev = import.meta.env.DEV

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			// change below to your repo name
			base: dev ? '' : '/website'
		},
		csp: {
			mode: 'hash',
			directives: {
				'script-src': [
					'self',
					'unsafe-eval', // needed for lnsocket script
					'unsafe-inline'
				],
				'object-src': ['self']
			},
			reportOnly: {
				'script-src': ['self', 'unsafe-eval'],
				'report-to': ['self'],
				'report-uri': ['self'],
				'object-src': ['self']
			}
		},
		csrf: {
			checkOrigin: true
		}
	}
}

export default config
