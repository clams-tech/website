import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
	try {
		const markdown = await import(`../../../lib/docs/en/${params.slug}.md`)
		const doc = markdown.default

		return {
			slug: params.slug,
			doc
		}
	} catch (error) {
		return {
			doc: null
		}
	}
}
