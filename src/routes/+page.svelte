<script lang="ts">
	import ClamsLogo from '$lib/icons/ClamsLogo.svelte'
	import { t } from '$lib/i18n/translations'
	import Button from '$lib/elements/Button.svelte'
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'

	let visible = false

	onMount(() => {
		visible = true
	})
</script>

<svelte:head>
	<title>{$t('app.titles.home')}</title>
</svelte:head>

{#if visible}
	<div in:fly={{ y: 200, duration: 1000 }} class="max-w-screen-sm m-auto">
		<ClamsLogo />
	</div>
{/if}

<!-- 3 paragraphs in en.json for "about" -->
{#each Array(3) as _, i}
	<section class="my-16 text-xl max-w-5xl m-auto">
		<div class="flex-1 min-w-[300px]">
			<h1 class="text-2xl font-bold mb-2">{$t(`app.about.${i}.question`)}</h1>
			<p>
				{$t(`app.about.${i}.answer`)}
			</p>
		</div>
	</section>
{/each}

<div class="my-8 max-w-5xl m-auto">
	<a href="/guides/get-started">
		<Button text={$t('app.button.get_started')} />
	</a>
</div>
