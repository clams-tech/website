/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const response = await fetch('https://api.github.com/repos/clams-tech/Remote/releases/latest')
	const data = await response.json()

	return data
}
