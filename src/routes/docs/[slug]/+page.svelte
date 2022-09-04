<script lang="ts">
	export let data
	const { doc } = data

	$: markdown = doc
</script>

{#if doc}
	<svelte:component this={markdown} />
{:else}
	<h2>404: Oops! The doc you are looking for does not exist</h2>
{/if}
