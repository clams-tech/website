<script lang="ts">
	import WindowsIcon from '$lib/icons/windows'
	import AppleIcon from '$lib/icons/apple'
	import LinuxIcon from '$lib/icons/linux'
	// import UbuntuIcon from '$lib/icons/ubuntu'
	import { CRAB_NEBULA_URL } from '$lib/constants'

	let downloads = [
		{
			os: 'Silicon (dmg-aarch64)',
			href: `${CRAB_NEBULA_URL}/dmg-aarch64`,
			icon: AppleIcon
		},
		{
			os: 'Intel (dmg-x86_64)',
			href: `${CRAB_NEBULA_URL}/dmg-x86_64`,
			icon: AppleIcon
		},
		{
			os: 'Windows (wix-x86_64)',
			href: `${CRAB_NEBULA_URL}/wix-x86_64`,
			icon: WindowsIcon
		},
		{
			os: 'Windows (nsis-x86_64)',
			href: `${CRAB_NEBULA_URL}/nsis-x86_64`,
			icon: WindowsIcon
		},
		{
			os: 'Linux (appimage-x86_64)',
			href: `${CRAB_NEBULA_URL}/appimage-x86_64`,
			icon: LinuxIcon
		},
		{
			os: 'Linux (debian-x86_64)',
			href: `${CRAB_NEBULA_URL}/debian-x86_64`,
			icon: LinuxIcon
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
				{os}
			</a>
		{/each}
	</div>
</div>
