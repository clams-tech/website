<script lang="ts">
	import { browser } from '$app/environment'
	import Footer from '$lib/components/legacy/Footer.svelte'
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

<slot />
<Footer />
