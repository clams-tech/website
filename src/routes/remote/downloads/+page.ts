/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const response = await fetch('https://api.github.com/repos/clams-tech/App/releases/latest')
	const data = await response.json()

	return data
}
