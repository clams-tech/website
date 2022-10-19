<script lang="ts">
	import ClamsLogo from '$lib/icons/ClamsLogo.svelte'
	import { t } from '$lib/i18n/translations'
	import Button from '$lib/elements/Button.svelte'
</script>

<svelte:head>
	<title>{$t('app.titles.home')}</title>
</svelte:head>

<div class="p-12 w-screen h-screen flex flex-col items-center justify-center">
	<div class="w-full max-w-md mb-4">
		<ClamsLogo />
	</div>

	<p class="mt-6 text-3xl text-center max-w-sm">{$t('app.summary')}</p>
	<p class="mb-6 italic text-lg text-center text-neutral-700 dark:text-neutral-200">
		{$t('app.description')}
	</p>

	<div class="flex items-center">
		<a href="/docs">
			<Button text={$t('app.button.docs')} />
		</a>
		<a class="ml-4" href="https://app.clams.tech" target="_blank" rel="noopener noreferrer">
			<Button text={$t('app.button.app')} primary />
		</a>
	</div>
</div>
