import { docs$ } from '$lib/streams'

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/docs`)
	const docs = await response.json()

	docs$.next(docs)

	return {}
}
