<script lang="ts">
	import { t } from '$lib/i18n/translations'
	import DocsList from '$lib/components/DocsList.svelte'
	export let data: any
</script>

<svelte:head>
	<title>{$t('app.titles.docs')}</title>
</svelte:head>

<div class="flex mt-8">
	<!-- <div class="hidden sm:block"></div> -->
	<section class="mt-5 hidden sm:block">
		<DocsList docs={data.docs} />
	</section>

	<article class="prose dark:prose-invert max-w-5xl mt-4">
		<slot />
	</article>
</div>
