<script lang="ts">
	import { docs$ } from '$lib/streams'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'

	export let variant: 'desktop' | 'mobile' = 'desktop'
	export let closeMenu: any

	onMount(() => {
		console.log({ variant })
	})
</script>

<section class="flex flex-col mr-8 w-48">
	{#each docs$.value as doc}
		<a
			on:click={() => {
				closeMenu()((window.location.href = `/docs${doc.path}`))
			}}
			href={`/docs${doc.path}`}
			class="cursor-pointer underline-offset-2"
			class:underline={`/${$page.params.slug}` == doc.path}
			class:text-2xl={variant === 'desktop'}
			class:font-bold={variant === 'desktop'}
			class:ml-4={variant === 'mobile'}
		>
			{doc.meta.title}
		</a>
		<div class="mt-2 mb-4 flex flex-col" class:mt-2={variant === 'desktop'}>
			{#if doc.meta.sections}
				{#each doc.meta?.sections as section}
					<a
						on:click={() => {
							closeMenu()((window.location.href = `/docs${doc.path}#${section}`))
						}}
						href={`/docs${doc.path}#${section}`}
						class="ml-4 cursor-pointer underline-offset-2"
						class:ml-8={variant === 'mobile'}
						class:underline={$page.url.hash == `#${section}`}
					>
						{section.replace(/-/g, ' ')}
					</a>
				{/each}
			{/if}
		</div>
	{/each}
</section>
