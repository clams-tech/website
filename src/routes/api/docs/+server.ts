import { fetchMarkdownDocs } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
	const allDocs = await fetchMarkdownDocs()

	const sortedDocs = allDocs.sort((a, b) => {
		return a.meta.index - b.meta.index
	})

	return json(sortedDocs)
}
