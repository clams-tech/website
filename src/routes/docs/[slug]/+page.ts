export async function load({ params }) {
	try {
		const markdown = await import(`../../../lib/docs/en/${params.slug}.md`)
		const doc = markdown.default

		return {
			doc
		}
	} catch (error) {
		return {
			doc: null
		}
	}
}
