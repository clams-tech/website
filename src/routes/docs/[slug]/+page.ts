export async function load({ params }) {
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
