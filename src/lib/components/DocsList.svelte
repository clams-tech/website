<script lang="ts">
	import { docs$ } from '$lib/streams'
	import { page } from '$app/stores'
</script>

<section class="flex flex-col mr-8 w-48">
	{#each docs$.value as doc}
		<a
			on:click={() => (window.location.href = `/docs${doc.path}`)}
			href={`/docs${doc.path}`}
			class="text-2xl font-bold cursor-pointer underline-offset-2"
			class:underline={`/${$page.params.slug}` == doc.path}
		>
			{doc.meta.title}
		</a>
		<div class="mt-2 mb-4 flex flex-col">
			{#if doc.meta.sections}
				{#each doc.meta?.sections as section}
					<a
						on:click={() => (window.location.href = `/docs${doc.path}#${section}`)}
						href={`/docs${doc.path}#${section}`}
						class="ml-4 cursor-pointer underline-offset-2"
						class:underline={$page.url.hash == `#${section}`}
					>
						{section.replace(/-/g, ' ')}
					</a>
				{/each}
			{/if}
		</div>
	{/each}
</section>
