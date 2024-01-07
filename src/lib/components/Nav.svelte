<script lang="ts">
	import ClamsAltLogo from '$lib/icons/clams-alt'
	import Socials from './Socials.svelte'

	let links = [{ href: '/remote', title: 'Remote' }]
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
			{#each links as { title, href }}
				<a class="underline" href={`${href}`}>
					{title}
				</a>
			{/each}
		</div>
	</div>
	<Socials />
</div>
