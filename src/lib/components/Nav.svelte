<script lang="ts">
	import ClamsAltLogo from '$lib/icons/clams-alt'
	import DiscordIcon from '$lib/icons/discord'
	import XIcon from '$lib/icons/x'
	import GithubIcon from '$lib/icons/github'
	import { scrollto } from 'svelte-scrollto'

	let internalLinks = [
		{ href: '#features', title: 'Features', elementId: '#features' },
		{ href: '#faq', title: 'FAQ' }
	]

	let externalLinks = [
		{ icon: GithubIcon, title: 'GitHub', href: 'https://github.com/clams-tech' },
		{ icon: XIcon, title: 'Twitter', href: 'https://twitter.com/clamstech' },
		{ icon: DiscordIcon, title: 'Discord', href: 'https://discord.gg/eWfHuJZVaB' }
	]
</script>

<div class="absolute top-0 hidden md:flex justify-between w-full py-3 px-[72px]">
	<div class="flex items-center gap-10">
		<a href="/">
			<div class="w-10">
				{@html ClamsAltLogo}
			</div>
		</a>
		{#each internalLinks as { href, title }}
			<a class="flex items-center" {href} target="_blank" rel="noopener noreferrer">
				{#if title}
					{title}
				{/if}
			</a>
		{/each}
	</div>
	<div class="flex items-center gap-10">
		{#each externalLinks as { href, title, icon }}
			<a class="flex items-center" {href} target="_blank" rel="noopener noreferrer">
				{#if title}
					{title}
				{/if}
				{#if icon}
					<div class="w-6 mx-2">
						{@html icon}
					</div>
				{/if}
			</a>
		{/each}
	</div>
</div>
