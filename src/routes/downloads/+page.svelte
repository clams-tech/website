<script>
	import { REMOTE_APP_URL, DOCS_URL } from '$lib/constants'
	import WindowsIcon from '$lib/icons/windows'
	import AppleIcon from '$lib/icons/apple'
	import LinuxIcon from '$lib/icons/linux'
	import UbuntuIcon from '$lib/icons/ubuntu'
	import Button from '$lib/elements/Button.svelte'

	export let data // Fetch "latest" Remote release from Clams github

	const { assets } = data

	/**
	 * @param {{name: string, browser_download_url: string}[]} assets
	 * @param {string} extension
	 */
	function findAssetByExtension(assets, extension) {
		return assets.find((asset) => asset.name.includes(extension))
	}

	const macOSAssets = findAssetByExtension(assets, '.dmg')
	const linuxAssets = findAssetByExtension(assets, '.AppImage')
	const ubuntuAssets = findAssetByExtension(assets, '.deb')
	const windowsAssets = findAssetByExtension(assets, '.exe')

	const downloads = [
		{
			icon: AppleIcon,
			os: 'MacOS',
			name: macOSAssets?.name,
			href: macOSAssets?.browser_download_url
		},
		{
			icon: LinuxIcon,
			os: 'Linux',
			name: linuxAssets?.name,
			href: linuxAssets?.browser_download_url
		},
		{
			icon: UbuntuIcon,
			os: 'Ubunutu',
			name: ubuntuAssets?.name,
			href: ubuntuAssets?.browser_download_url
		},
		{
			icon: WindowsIcon,
			os: 'Windows',
			name: windowsAssets?.name,
			href: windowsAssets?.browser_download_url
		}
	]
</script>

<section class="h-full bg-white dark:bg-gray-900 py-24 sm:py-32">
	<div class="h-screen flex-col w-full max-w-3xl px-6 lg:px-8 m-auto">
		<h2
			class="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
		>
			Downloads
		</h2>
		<div class="mt-12 flex flex-col">
			<div class="lg:pr-8">
				<div class="">
					<p class="text-gray-900 dark:text-white">
						Clams is available as a Desktop app. Please select the option that corresponds to your
						operating system:
					</p>
				</div>
			</div>
			<div class="mt-12 flex gap-8 flex-wrap justify-center">
				{#each downloads as { icon, os, name, href }}
					<a
						class="flex flex-col items-center underline"
						{href}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div class="w-10 xs:w-12">
							{@html icon}
						</div>
						<p>{os}</p>
						<p>{name}</p></a
					>
				{/each}
			</div>
		</div>
	</div>
</section>
