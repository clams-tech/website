<script lang="ts">
	import { browser } from '$app/environment'
	import Links from '$lib/components/Links.svelte'
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
<Links />
<slot />
<!-- </div> -->
