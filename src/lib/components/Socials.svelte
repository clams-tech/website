<script lang="ts">
	import NostrIcon from '$lib/icons/nostr'
	import DiscordIcon from '$lib/icons/discord'
	import XIcon from '$lib/icons/x'
	import GithubIcon from '$lib/icons/github'
	import ThemeToggle from './ThemeToggle.svelte'
	import { DISCORD_URL } from '$lib/constants'

	let socials = [
		{
			icon: NostrIcon,
			title: 'Nostr',
			href: 'https://nostr.at/npub136hk9wu6xnrz64kfaapsvgc5rfnylz4djlx4w30w66h6cy48vhws3gth6q'
		},
		{ icon: DiscordIcon, title: 'Discord', href: DISCORD_URL },
		{ icon: GithubIcon, title: 'GitHub', href: 'https://github.com/clams-tech' },
		{ icon: XIcon, title: 'Twitter', href: 'https://twitter.com/clamstech' }
	]

	export let showThemeToggle = true
</script>

<div class="flex items-center gap-2 md:gap-10">
	{#each socials as { href, title, icon }}
		<a class="flex items-center" {href} target="_blank" rel="noopener noreferrer">
			<!-- <div class="hidden md:flex">
				{title}
			</div> -->
			<div class="w-6 mx-2">
				{@html icon}
			</div>
		</a>
	{/each}
	{#if showThemeToggle}
		<ThemeToggle />
	{/if}
</div>
