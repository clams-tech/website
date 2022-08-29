export async function load({ params }) {
	try {
		const markdown = await import(`../../../lib/docs/en/${params.slug}.md`)
		const { title } = markdown.metadata
		const doc = markdown.default
		return {
			title,
			doc
		}
	} catch (error) {
		return {
			doc: null
		}
	}
}
