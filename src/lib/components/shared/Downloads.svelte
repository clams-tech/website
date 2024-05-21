<script lang="ts">
	import WindowsIcon from '$lib/icons/windows'
	import AppleIcon from '$lib/icons/apple'
	import LinuxIcon from '$lib/icons/linux'
	import UbuntuIcon from '$lib/icons/ubuntu'
	import { onMount } from 'svelte'
	import { CRAB_NEBULA_URL } from '$lib/constants'

	export let highlightOs = false

	function getOs() {
		const ua = navigator.userAgent

		if (ua.includes('Windows')) return 'windows'
		if (ua.includes('Linux')) return 'linux'
		if (ua.includes('Macintosh')) {
			try {
				const canvas = document.createElement('canvas')
				const ctx = canvas.getContext('webgl')
				const debugInfo = ctx?.getExtension('WEBGL_debug_renderer_info')
				const renderer = ctx?.getParameter(debugInfo?.UNMASKED_RENDERER_WEBGL || 0)
				return renderer.match(/(M1|M2|M3)/gm) ? 'macos-arm' : 'macos-intel'
			} catch {
				return 'macos-intel'
			}
		}

		return 'unknown'
	}

	let isLoading = true
	let os

	let downloads: {
		os: string
		href: string
		isFirst: boolean
		icon: string
	}[] = []

	const comingSoonDownloads = [
		{
			os: 'Windows',
			href: `${CRAB_NEBULA_URL}/wix-x86_64`,
			isFirst: os === 'windows',
			icon: WindowsIcon
		},
		{
			os: 'Linux',
			href: `${CRAB_NEBULA_URL}/appimage-x86_64`,
			isFirst: os === 'linux',
			icon: LinuxIcon
		},
		{
			os: 'Ubuntu',
			href: `${CRAB_NEBULA_URL}/appimage-x86_64`, // @TODO change
			isFirst: os === 'linux',
			icon: UbuntuIcon
		}
	]

	onMount(() => {
		if (!highlightOs) {
			isLoading = false
			return
		}

		os = getOs()

		downloads = [
			{
				os: 'Silicon',
				href: `${CRAB_NEBULA_URL}/dmg-aarch64`,
				isFirst: os === 'macos-arm',
				icon: AppleIcon
			},
			{
				os: 'Intel',
				href: `${CRAB_NEBULA_URL}/dmg-x86_64`,
				isFirst: os === 'macos-intel',
				icon: AppleIcon
			}
		].sort((a, b) => (a.isFirst ? -1 : 1))

		isLoading = false
	})

	$: osButton = downloads[0]
</script>

{#if highlightOs}
	{#if !isLoading && osButton}
		<div class="m-auto">
			<!-- Download for OS -->
			<a
				href={osButton?.href}
				class="flex justify-center items-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				rel="noopener"
				type="button"
			>
				<div class="w-6 xs:w-12">
					{@html osButton?.icon}
				</div>
				Download beta for {osButton?.os}
			</a>

			<div class="mt-4">
				<a
					href="/downloads"
					class="underline font-semibold text-light-purple dark:text-dark-purple hover:text-indigo-500"
					rel="noopener">more options</a
				>
			</div>
		</div>
	{/if}
{:else}
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
{/if}
