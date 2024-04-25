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

<!-- <div id="features" class="features overflow-hidden bg-white dark:bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl sm:text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				Features
			</h2>
		</div>
		<div
			class="mt-8 md:mt-16 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
		>
			<div class="lg:pr-8">
				<div class="lg:max-w-lg">
					<h2 class="text-base font-semibold leading-7 text-indigo-400">Bitcoin only</h2>
					<p
						class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
					>
						The best money deserves a superior experience.
					</p>
					<dl
						class="mt-10 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none grid sm:grid-cols-1 md:grid-cols-2 gap-8"
					>
						{#each features as { icon, title, highlights }}
							<div class="relative pl-9">
								<dt class="inline font-semibold text-gray-900 dark:text-white">
									<div class="absolute left-1 top-1 h-5 w-5 text-indigo-500">
										{@html icon}
									</div>
									{title}
								</dt>
								<dd>
									<ul class="list-disc list-inside leading-6">
										{#each highlights as highlight}
											<li>{highlight}</li>
										{/each}
									</ul>
								</dd>
							</div>
						{/each}
					</dl>
				</div>
			</div>
			<img
				src={ScreenshotImage}
				alt="Product screenshot"
				class="w-[48rem] max-w-none rounded-xl shadow-xl dark:shadow-indigo-500/50 ring-1 ring-white/10 dark:ring-white/20 sm:w-[57rem] md:-ml-4 lg:-ml-0"
				width="2432"
				height="1442"
			/>
		</div>
	</div>
</div> -->

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
