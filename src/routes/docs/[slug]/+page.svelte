<script lang="ts">
	export let data
	const { doc } = data
</script>

{#if doc}
	<svelte:component this={doc} />
{:else}
	<div class="text-xl block w-full">
		Oops! The doc you are looking for does not exist. See the full list
		<a class="" href="/docs">here</a>
	</div>
{/if}
