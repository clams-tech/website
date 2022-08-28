import i18n from 'sveltekit-i18n'
import parser from '@sveltekit-i18n/parser-default'
import type { Config } from '@sveltekit-i18n/parser-default'

const config: Config = {
	loaders: [
		{
			locale: 'en',
			key: 'app',
			loader: async () => import('./en.json')
		}
	],
	parser: parser()
}

export const { t, locale, locales, loading, loadTranslations } = new i18n(config)
