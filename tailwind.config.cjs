module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				purple: {
					50: '#efe5fd',
					100: '#d5c0fa',
					200: '#b995f7',
					300: '#9a67f6',
					400: '#8040f4',
					500: '#6305f0',
					600: '#5600ea',
					700: '#4000e2',
					800: '#2200dd',
					900: '#0000d8'
				},
				bitcoin: {
					orange: '#f2a900'
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
				black: '#121212',
				white: '#ffffff',
				transparent: 'transparent'
			}
		}
	},
	plugins: [],
	variants: {
		width: ['responsive', 'hover', 'focus']
	}
}
