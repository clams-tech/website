export async function load({ params }) {
	try {
		const markdown = await import(`../../../lib/guides/en/${params.slug}.md`)
		const { title, date } = markdown.metadata
		const guide = markdown.default
		return {
			date, // Used for ordering guides
			title,
			guide
		}
	} catch (error) {
		return {
			guide: null
		}
	}
}
