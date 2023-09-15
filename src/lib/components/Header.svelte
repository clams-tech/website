<script lang="ts">
	import ClamsAltLogo from '$lib/icons/ClamsAltLogo.svelte'
	import DiscordIcon from '$lib/icons/Discord.svelte'
	import TwitterIcon from '$lib/icons/Twitter.svelte'
	import GithubIcon from '$lib/icons/Github.svelte'
	import { scrollto } from 'svelte-scrollto'

	let links = [
		{ href: '#features', title: 'Features', elementId: '#features' },
		{ href: '', title: 'Pricing' },
		{ href: '', title: 'FAQ' },

		{ icon: DiscordIcon, title: 'Discord', href: 'https://discord.gg/eWfHuJZVaB' },
		{ icon: GithubIcon, title: 'GitHub', href: 'https://github.com/clams-tech' },
		{ icon: TwitterIcon, title: 'X', href: 'https://twitter.com/clamstech' }
	]
</script>

<div class="fixed top-0 left-0 bg-white p-4 w-full flex justify-between shadow-md">
	<div class="w-10">
		<a href="/">
			<svelte:component this={ClamsAltLogo} />
		</a>
	</div>
	<div class="flex items-center">
		{#each links as { href, title, icon }}
			<a class="ml-10 flex items-center" {href} target="_blank" rel="noopener noreferrer">
				{#if title}
					{title}
				{/if}
				{#if icon}
					<div class="w-6 mx-2 invisible md:visible">
						<svelte:component this={icon} />
					</div>
				{/if}
			</a>
		{/each}
	</div>
</div>
