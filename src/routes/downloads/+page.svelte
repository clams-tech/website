<script>
	import WindowsIcon from '$lib/icons/windows'
	import AppleIcon from '$lib/icons/apple'
	import LinuxIcon from '$lib/icons/linux'
	import UbuntuIcon from '$lib/icons/ubuntu'

	export let data // Fetch "latest" Clams release from Clams github

	const { assets } = data

	/**
	 * @param {{name: string, browser_download_url: string}[]} assets
	 * @param {string} extension
	 */
	function findAssetByExtension(assets, extension) {
		return assets.find((asset) => asset.name.includes(extension))
	}

	const macOSIntelAsset = findAssetByExtension(assets, 'x64.dmg')
	const macOSSiliconAsset = findAssetByExtension(assets, 'aarch64.dmg')
	const linuxAsset = findAssetByExtension(assets, '.AppImage')
	const ubuntuAsset = findAssetByExtension(assets, '.deb')
	const windowsAsset = findAssetByExtension(assets, '.exe')

	const downloads = [
		{
			icon: AppleIcon,
			os: 'MacOS Intel chip',
			name: macOSIntelAsset?.name,
			href: macOSIntelAsset?.browser_download_url
		},
		{
			icon: AppleIcon,
			os: 'MacOS Silicon chip',
			name: macOSSiliconAsset?.name,
			href: macOSSiliconAsset?.browser_download_url
		},
		{
			icon: LinuxIcon,
			os: 'Linux',
			name: linuxAsset?.name,
			href: linuxAsset?.browser_download_url
		},
		{
			icon: UbuntuIcon,
			os: 'Ubunutu',
			name: ubuntuAsset?.name,
			href: ubuntuAsset?.browser_download_url
		},
		{
			icon: WindowsIcon,
			os: 'Windows',
			name: windowsAsset?.name,
			href: windowsAsset?.browser_download_url
		}
	]
</script>

<section class="h-full bg-white dark:bg-gray-900 py-24 sm:py-32">
	<div class="text-center h-screen flex-col w-full max-w-5xl px-6 lg:px-8 m-auto">
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
			Downloads
		</h2>
		<div class="mt-12 flex flex-col">
			<div class="lg:pr-8">
				<div class="">
					<p class="text-gray-900 dark:text-white">
						Clams is available as a Desktop app. View all of the available download options <a
							class="underline"
							href="https://github.com/clams-tech/app-releases/releases"
							target="_blank"
							rel="noopener noreferrer">here</a
						> or choose from this list:
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
