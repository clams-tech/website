<script lang="ts">
	import DiscordIcon from '$lib/icons/Discord.svelte'
	import TwitterIcon from '$lib/icons/Twitter.svelte'
	import GithubIcon from '$lib/icons/Github.svelte'

	let contacts = [
		{ icon: DiscordIcon, href: 'https://discord.gg/eWfHuJZVaB' },
		{ icon: GithubIcon, href: 'https://github.com/clams-tech' },
		{ icon: TwitterIcon, href: 'https://twitter.com/clamstech' }
	]
</script>

<div class="absolute bottom-3 left-2">
	<div class="flex items-center py-4 px-2">
		{#each contacts as { href, icon }}
			<a {href} target="_blank" rel="noopener noreferrer">
				{#if icon}
					<div class="w-6 mx-2">
						<svelte:component this={icon} />
					</div>
				{/if}
			</a>
		{/each}
	</div>
</div>
