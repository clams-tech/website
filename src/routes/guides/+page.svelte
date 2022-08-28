<script lang="ts">
	import { t } from '$lib/i18n/translations'
	export let data: any
</script>

<svelte:head>
	<title>{$t('app.titles.guides')}</title>
</svelte:head>

<section class="text-xl">
	<h1 class="text-2xl font-bold mb-2">Guides</h1>
	<div class="flex flex-col">
		{#each data.guides as guide}
			<a href={`guides${guide.path}`} class="underline mb-2">{guide.meta.title}</a>
		{/each}
	</div>
</section>
