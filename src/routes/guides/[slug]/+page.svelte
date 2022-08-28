<script lang="ts">
	export let data
	const { guide } = data
</script>

{#if guide}
	<svelte:component this={guide} />
{:else}
	<div class="text-xl block w-full">
		Oops! The guide you are looking for does not exist. See the full list
		<a class="" href="/guides">here</a>
	</div>
{/if}
