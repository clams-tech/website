import { locale, loadTranslations } from '$lib/i18n/translations'
import { docs$ } from '$lib/streams'

export async function load({ url }) {
	const { pathname } = url
	// @TODO check with language settings
	const defaultLocale = 'en'
	const initLocale = locale.get() || defaultLocale
	await loadTranslations(initLocale, pathname)

	// Populate DocsList component
	const response = await fetch(`/api/docs`)
	const docs = await response.json()
	docs$.next(docs)

	return {}
}
