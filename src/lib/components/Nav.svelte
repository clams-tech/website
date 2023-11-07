<script lang="ts">
	import { scrollto } from 'svelte-scrollto'
	import ClamsAltLogo from '$lib/icons/clams-alt'
	import Socials from './Socials.svelte'
	import { page } from '$app/stores'

	let links = [
		{ elementId: '#features', title: 'Features' },
		{ elementId: '#roadmap', title: 'Roadmap' },
		{ elementId: '#faq', title: 'FAQ' }
	]
</script>

<div
	class="absolute left-1/2 transform -translate-x-1/2 flex justify-between py-3 px-5 gap-10 w-full max-w-6xl"
>
	<div class="flex items-center gap-10">
		<a href="/">
			<div class="w-10">
				{@html ClamsAltLogo}
			</div>
		</a>
		<div class="flex hidden md:flex gap-10">
			{#each links as { elementId, title }}
				{#if $page.url.pathname === '/'}
					<span class="flex cursor-pointer" use:scrollto={elementId}>
						{title}
					</span>
				{:else}
					<a href={`/${elementId}`}>
						{title}
					</a>
				{/if}
			{/each}
		</div>
	</div>
	<Socials />
</div>
