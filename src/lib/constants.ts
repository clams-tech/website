import { Language, type Settings } from './types'

export const DEFAULT_SETTINGS: Settings = {
	// language: (navigator?.languages
	// 	? navigator.languages[0]
	// 	: navigator.language || Language['en-US']) as Language,
	language: Language['en-US'],
	darkmode: false
}

export const routes = [
	{
		path: '/',
		text: 'home'
	},
	{
		path: '/docs',
		text: 'docs'
	}
]
