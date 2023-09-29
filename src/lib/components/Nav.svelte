<script lang="ts">
	import ClamsAltLogo from '$lib/icons/clams-alt'
	import { scrollto } from 'svelte-scrollto'
	import Socials from './Socials.svelte'

	let links = [
		{ href: '#features', title: 'Features', elementId: '#features' },
		{ href: '#faq', title: 'FAQ' }
	]
</script>

<div class="absolute top-0 flex justify-between w-full py-3 px-5 md:px-[72px]">
	<div class="flex items-center gap-10">
		<a href="/">
			<div class="w-10">
				{@html ClamsAltLogo}
			</div>
		</a>
		<div class="flex hidden md:flex gap-10">
			{#each links as { href, title }}
				<a class="flex items-center" {href} target="_blank" rel="noopener noreferrer">
					{title}
				</a>
			{/each}
		</div>
	</div>
	<Socials />
</div>
