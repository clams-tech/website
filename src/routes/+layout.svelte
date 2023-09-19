<script lang="ts">
	import { browser } from '$app/environment'
	import Nav from '$lib/components/Nav.svelte'
	import { loadTranslations, locale } from '$lib/i18n/translations'
	import '../app.css'

	if (browser) {
		initialise()
	}

	async function initialise() {
		const defaultLocale = 'en'
		const initLocale = locale.get() || defaultLocale
		await loadTranslations(initLocale)
	}
</script>

<!-- <div class="flex flex-col items-center relative"> -->
<Nav />
<slot />
<!-- </div> -->
