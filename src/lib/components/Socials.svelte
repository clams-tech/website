<script lang="ts">
	import DiscordIcon from '$lib/icons/discord'
	import XIcon from '$lib/icons/x'
	import GithubIcon from '$lib/icons/github'
	import ThemeToggle from './ThemeToggle.svelte'

	let socials = [
		{ icon: GithubIcon, title: 'GitHub', href: 'https://github.com/clams-tech' },
		{ icon: XIcon, title: 'Twitter', href: 'https://twitter.com/clamstech' },
		{ icon: DiscordIcon, title: 'Discord', href: 'https://discord.gg/eWfHuJZVaB' }
	]
</script>

<div class="flex items-center gap-2 md:gap-10">
	{#each socials as { href, title, icon }}
		<a class="flex items-center" {href} target="_blank" rel="noopener noreferrer">
			<div class="hidden md:flex">
				{title}
			</div>
			<div class="w-6 mx-2">
				{@html icon}
			</div>
		</a>
	{/each}
	<ThemeToggle />
</div>
