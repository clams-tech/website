import { DEFAULT_SETTINGS } from './constants'
import type { Settings } from './types'

export const SETTINGS_STORAGE_KEY = 'clams-tech:settings'

export function getSettings(): Settings {
	const value = typeof window !== 'undefined' ? localStorage.getItem(SETTINGS_STORAGE_KEY) : null
	const settingsInStorage: Settings | null = value && JSON.parse(value)
	return settingsInStorage || DEFAULT_SETTINGS
}

export const fetchMarkdownDocs = async () => {
	// @TODO language code dir passed to meta.glob should be dependent on browser location for i18n
	const allDocFiles = import.meta.glob('$lib/docs/en/*.md')
	const iterableDocFiles = Object.entries(allDocFiles)

	const allDocs = await Promise.all(
		iterableDocFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const docPath = path.slice(16, -3)

			return {
				meta: metadata,
				path: docPath
			}
		})
	)

	return allDocs
}
