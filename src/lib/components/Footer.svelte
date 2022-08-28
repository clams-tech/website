<script lang="ts">
	import DiscordIcon from '$lib/icons/Discord.svelte'
	import TwitterIcon from '$lib/icons/Twitter.svelte'
	import GithubIcon from '$lib/icons/Github.svelte'

	let contacts = [
		{ icon: DiscordIcon, href: '@TODO' },
		{ icon: GithubIcon, href: 'https://github.com/clams-tech' },
		{ icon: TwitterIcon, href: 'https://twitter.com/clamstech' }
	]
</script>

<footer class="mt-8">
	<div class="flex items-center justify-center">
		{#each contacts as { href, icon }}
			<a {href} target="_blank" rel="noopener noreferrer">
				{#if icon}
					<div class="w-8 mr-6">
						<svelte:component this={icon} />
					</div>
				{/if}
			</a>
		{/each}
	</div>
</footer>
