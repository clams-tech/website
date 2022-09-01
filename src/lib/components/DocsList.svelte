<script lang="ts">
	// @TODO
	// Types
	export let docs
</script>

<section class="flex flex-col mr-8 w-48">
	{#each docs as doc}
		<span
			on:click={() => (window.location.href = `/docs${doc.path}`)}
			class="text-2xl font-bold cursor-pointer underline-offset-2"
			class:underline={window.location.pathname.includes(doc.path)}
		>
			{doc.meta.title}
		</span>
		<div class="mt-2 mb-4 flex flex-col">
			{#if doc.meta.sections}
				{#each doc.meta?.sections as section}
					<span
						class="ml-4 cursor-pointer underline-offset-2"
						on:click={() => (window.location.href = `/docs${doc.path}#${section}`)}
					>
						{section.replace(/-/g, ' ')}
					</span>
				{/each}
			{/if}
		</div>
	{/each}
</section>
