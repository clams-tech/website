<script lang="ts">
	import { onMount } from 'svelte'

	// @TODO
	// Types
	export let docs

	onMount(() => {
		console.log({
			docs,
			path: window.location
		})
	})
</script>

<section class="flex flex-col mr-8 w-48">
	{#each docs as doc}
		<span
			on:click={() => (window.location.href = `/docs${doc.path}`)}
			class="text-2xl cursor-pointer underline-offset-2"
			class:underline={window.location.pathname.includes(doc.path)}
		>
			{doc.meta.title}
		</span>
		<div class="mb-4 flex flex-col">
			{#if doc.meta.sections}
				{#each doc.meta?.sections as section}
					<span
						class="ml-4 cursor-pointer underline-offset-2"
						on:click={() => (window.location.href = `/docs${doc.path}#${section}`)}
					>
						{section}
					</span>
				{/each}
			{/if}
		</div>
	{/each}
</section>
