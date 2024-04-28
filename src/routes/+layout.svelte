<script lang="ts">
	import { browser } from '$app/environment'
	import Navigation from '$lib/components/Navigation.svelte'
	import Footer from '$lib/components/Footer.svelte'
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

<Navigation />
<slot />
<Footer />
