<script lang="ts">
	export let docs
</script>

<section class="flex flex-col mr-16">
	<h1 class="text-2xl font-bold mb-2">Guides</h1>
	{#each docs as doc}
		<div on:click={() => (window.location.href = `/docs${doc.path}`)} class="mb-2 cursor-pointer">
			{doc.meta.title}
		</div>
	{/each}
</section>
