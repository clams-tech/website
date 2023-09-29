module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				light: {
					purple: '#6305F0',
					orange: '#F7931A'
				},
				utility: {
					success: '#05F063',
					error: '#f0051d',
					pending: '#ff9000'
				},
				black: '#000000',
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
