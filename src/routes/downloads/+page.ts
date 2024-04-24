/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	// @TODO Fetch Clams Native App download links
	const response = await fetch('https://api.github.com/repos/clams-tech/Remote/releases/latest')
	const data = await response.json()

	return data
}
