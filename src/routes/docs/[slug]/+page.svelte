<script lang="ts">
	import { page } from '$app/stores'

	export let data
	const { slug, doc } = data

	page.subscribe((page) => {
		if (slug !== page.params.slug) {
			window.location.reload()
		}
	})
</script>

{#if doc}
	<svelte:component this={doc} />
{:else}
	<h2>404: Oops! The doc you are looking for does not exist</h2>
{/if}
