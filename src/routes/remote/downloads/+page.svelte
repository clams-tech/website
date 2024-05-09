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

	const macOSIntelAsset = findAssetByExtension(assets, 'x64.dmg')
	// const macOSSiliconAsset = findAssetByExtension(assets, 'aarch64.dmg')
	const linuxAssets = findAssetByExtension(assets, '.AppImage')
	const ubuntuAssets = findAssetByExtension(assets, '.deb')
	const windowsAssets = findAssetByExtension(assets, '.exe')

	const downloads = [
		{
			icon: AppleIcon,
			os: 'MacOS Intel chip',
			name: macOSIntelAsset?.name,
			href: macOSIntelAsset?.browser_download_url
		},
		// {
		// 	icon: AppleIcon,
		// 	os: 'MacOS Silicon',
		// 	name: macOSSiliconAsset?.name,
		// 	href: macOSSiliconAsset?.browser_download_url
		// },
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

<section class="flex flex-col items-center px-6 pt-32 pb-20">
	<div class="flex flex-col w-full max-w-2xl text-center gap-16">
		<h1 class="text-6xl font-bold"><span class="text-light-orange">Remote</span> Downloads</h1>
		<!-- Desktop app -->
		<div class="flex flex-col items-center">
			<h2 class="text-[20px] font-bold text-light-purple dark:text-dark-purple">DESKTOP DEVICES</h2>
			<p class="mt-4 text-[20px]">
				For the optimal experience, we recommend downloading the Native Desktop App. Please select
				the option that corresponds to your operating system:
			</p>
			<div class="mt-8 flex gap-8 flex-wrap justify-center">
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
		<!-- PWA -->
		<div class="flex flex-col items-center">
			<h2 class="text-[20px] font-bold text-light-purple dark:text-dark-purple">MOBILE DEVICES</h2>
			<p class="mt-4 text-[20px]">
				If you'd like to use Remote on your mobile device, you can use the Progressive Web App:
			</p>
			<div class="mt-8 flex gap-6">
				<a
					href={`${DOCS_URL}/remote/#installation`}
					target="_blank"
					rel="noopener noreferrer"
					class={'w-[134px]'}
				>
					<Button text="Guide" />
				</a>
				<a class={'w-[134px]'} href={REMOTE_APP_URL}>
					<Button text="App" primary />
				</a>
			</div>
		</div>
	</div>
</section>
