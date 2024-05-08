/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	// https://api.github.com/repos/clams-tech/Remote/releases/latest
	const response = await fetch('https://api.github.com/repos/clams-tech/app-releases/releases')
	const data = await response.json()

	return data[0] // @TODO change to "data" when api call for "latest" is working for the new repo
}
