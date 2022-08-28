import { DEFAULT_SETTINGS } from './constants'
import type { Settings } from './types'

export const SETTINGS_STORAGE_KEY = 'clams-tech:settings'

export function getSettings(): Settings {
	const value = localStorage?.getItem(SETTINGS_STORAGE_KEY)
	const settingsInStorage: Settings | null = value && JSON.parse(value)
	return settingsInStorage || DEFAULT_SETTINGS
}

export const fetchMarkdownGuides = async () => {
	const allGuideFiles = import.meta.glob('$lib/guides/en/*.md')
	const iterableGuideFiles = Object.entries(allGuideFiles)

	const allPosts = await Promise.all(
		iterableGuideFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			const postPath = path.slice(18, -3)

			return {
				meta: metadata,
				path: postPath
			}
		})
	)

	return allPosts
}
