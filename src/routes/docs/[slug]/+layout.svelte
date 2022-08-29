<script lang="ts">
	import { t } from '$lib/i18n/translations'
	export let data: any
</script>

<svelte:head>
	<title>{$t('app.titles.docs')}</title>
</svelte:head>

<!-- @TODO Add list of docs to the burger menu -->
<div class="flex prose dark:prose-invert max-w-5xl">
	<section class="mr-8">
		<h2 class="mb-2">{$t('app.titles.docs')}</h2>
		<div class="flex flex-col">
			{#each data.docs as doc}
				<div
					on:click={() => (window.location.href = `/docs${doc.path}`)}
					class="mb-2 cursor-pointer"
				>
					{doc.meta.title}
				</div>
			{/each}
		</div>
	</section>
	<article class="grow w-full max-w-5xl">
		<slot />
	</article>
</div>
