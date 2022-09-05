<script lang="ts">
	import { t } from '$lib/i18n/translations'
	import DocsList from '$lib/components/DocsList.svelte'
</script>

<svelte:head>
	<title>{$t('app.titles.docs')}</title>
</svelte:head>

<div class="flex mt-8">
	<section class="mt-5 hidden sm:block">
		<DocsList variant={'desktop'} />
	</section>

	<article class="prose dark:prose-invert mt-4 max-w-none text-clip overflow-hidden">
		<slot />
	</article>
</div>
