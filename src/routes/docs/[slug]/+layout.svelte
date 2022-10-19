<script lang="ts">
	import { t } from '$lib/i18n/translations'
	import DocsList from '$lib/components/DocsList.svelte'
</script>

<svelte:head>
	<title>{$t('app.titles.docs')}</title>
</svelte:head>

<div class="flex w-full h-full">
	<section
		class="hidden sm:flex sm:flex-col pt-20 z-10 items-center border-r border-neutral-200 dark:border-neutral-800"
	>
		<DocsList variant={'desktop'} />
	</section>

	<article
		class="prose dark:prose-invert max-w-none pt-20 pb-8 px-8 w-full text-clip overflow-y-auto h-full"
	>
		<slot />
	</article>
</div>
