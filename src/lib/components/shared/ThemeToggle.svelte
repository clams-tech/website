<script lang="ts">
	import { browser } from '$app/environment'
	import { darkMode } from '$lib/stores'

	let isDarkMode = true

	darkMode.subscribe((value) => {
		isDarkMode = value
	})

	function handleSwitchDarkMode() {
		darkMode.set(!isDarkMode)

		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')

		isDarkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark')
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark')
			darkMode.set(true)
		} else {
			document.documentElement.classList.remove('dark')
			darkMode.set(false)
		}
	}
</script>

<div class="flex items-center">
	<input checked={isDarkMode} on:click={handleSwitchDarkMode} type="checkbox" id="theme-toggle" />
	<label for="theme-toggle" />
</div>

<style lang="postcss">
	#theme-toggle {
		@apply invisible;
		width: 0px;
	}

	#theme-toggle + label {
		@apply cursor-pointer h-6 w-6 rounded-full duration-300 content-[''];
	}

	#theme-toggle:not(:checked) + label {
		@apply bg-bitcoin;
	}

	#theme-toggle:checked + label {
		@apply bg-transparent;
		box-shadow: inset -8px -6px 1px 1px #fff;
	}
</style>
