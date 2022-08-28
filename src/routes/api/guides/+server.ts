import { fetchMarkdownGuides } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
	const allGuides = await fetchMarkdownGuides()

	const sortedGuides = allGuides.sort((a, b) => {
		return a.meta.index - b.meta.index
	})

	return json(sortedGuides)
}
