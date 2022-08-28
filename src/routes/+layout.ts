import { locale, loadTranslations } from '$lib/i18n/translations'

export async function load({ url }) {
	const { pathname } = url
	// @TODO check with language settings
	const defaultLocale = 'en'
	const initLocale = locale.get() || defaultLocale

	await loadTranslations(initLocale, pathname)

	return {}
}
