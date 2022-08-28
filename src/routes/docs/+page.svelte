<script lang="ts">
	import { t } from '$lib/i18n/translations'
	export let data: any
</script>

<svelte:head>
	<title>{$t('app.titles.docs')}</title>
</svelte:head>

<section class="text-xl">
	<h1 class="text-2xl font-bold mb-2">Docs</h1>
	<div class="flex flex-col">
		{#each data.docs as doc}
			<a href={`docs${doc.path}`} class="underline mb-2">{doc.meta.title}</a>
		{/each}
	</div>
</section>
