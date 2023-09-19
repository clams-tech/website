module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				light: {
					purple: '#6305F0',
					orange: '#F7931A'
				},
				utility: {
					success: '#05F063',
					// success: '#04d759',
					// success: '#92f005',
					error: '#f0051d',
					// error: '#f00592',
					// pending: '#ffc540'
					pending: '#ff9000'
				},
				black: '#1E1E1E',
				white: '#ffffff',
				transparent: 'transparent',
				bitcoin: '#F7931A'
			}
		}
	},
	plugins: [],
	variants: {
		width: ['responsive', 'hover', 'focus']
	}
}
