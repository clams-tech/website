<script lang="ts">
	import WindowsIcon from '$lib/icons/windows'
	import AppleIcon from '$lib/icons/apple'
	import LinuxIcon from '$lib/icons/linux'
	import UbuntuIcon from '$lib/icons/ubuntu'
	import { CRAB_NEBULA_URL } from '$lib/constants'

	let downloads = [
		{
			os: 'Silicon',
			href: `${CRAB_NEBULA_URL}/dmg-aarch64`,
			icon: AppleIcon
		},
		{
			os: 'Intel',
			href: `${CRAB_NEBULA_URL}/dmg-x86_64`,
			icon: AppleIcon
		}
	]

	const comingSoonDownloads = [
		{
			os: 'Windows',
			href: `${CRAB_NEBULA_URL}/wix-x86_64`,
			icon: WindowsIcon
		},
		{
			os: 'Linux',
			href: `${CRAB_NEBULA_URL}/appimage-x86_64`,
			icon: LinuxIcon
		},
		{
			os: 'Ubuntu',
			href: `${CRAB_NEBULA_URL}/appimage-x86_64`, // @TODO change
			icon: UbuntuIcon
		}
	]
</script>

<div class="m-auto">
	<!-- Downloads -->
	<div class="grid sm:grid-cols-1 md:grid-cols-2 gap-8 m-auto">
		{#each downloads as { os, href, icon }}
			<a
				{href}
				class="flex justify-center items-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				type="button"
			>
				<div class="w-6 xs:w-12">
					{@html icon}
				</div>
				Download beta for {os}
			</a>
		{/each}
	</div>
	<h2 class="mt-8 text-base font-semibold leading-7">Coming soon</h2>
	<div class="mt-8 grid sm:grid-cols-1 md:grid-cols-2 gap-8 m-auto">
		{#each comingSoonDownloads as { os, icon }}
			<div>
				<div
					class="opacity-50 flex justify-center items-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm"
				>
					<div class="w-6 xs:w-12">
						{@html icon}
					</div>
					Download beta for {os}
				</div>
			</div>
		{/each}
	</div>
</div>
