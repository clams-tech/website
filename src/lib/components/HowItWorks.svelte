<script>
	import SyncIcon from '$lib/icons/sync'
	import EnhanceIcon from '$lib/icons/enhance'
	import VisualizeIcon from '$lib/icons/visualize'
	import ReportIcon from '$lib/icons/report'
	import ContentContainer from './shared/ContentContainer.svelte'

	const tiles = [
		{
			title: 'Sync',
			description:
				'Connect unlimited wallets to import all transaction data to a private local hub.',
			icon: SyncIcon
		},
		{
			title: 'Enhance',
			description:
				'Auto-convert data to double-entry standards; customize with metadata for categorization.',
			icon: EnhanceIcon
		},
		{
			title: 'Visualize',
			description:
				'Derive insights from the sats flow dashboard; customize charts to suit your needs.',
			icon: VisualizeIcon
		},
		{
			title: 'Report',
			description: 'Download reports for easy sharing with third parties; simplify tax season.',
			icon: ReportIcon
		}
	]
</script>

<ContentContainer title="How it works">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		{#each tiles as { title, description, icon }}
			<div class="w-full border rounded-lg   p-4 m-auto flex flex-col gap-2">
				<h3 class="text-2xl inline font-semibold text-gray-900 dark:text-white">{title}</h3>
				<p class="text-gray-900 dark:text-white">{description}</p>
				<div class="mt-4 m-auto sm:w-40 md:w-60 flex justify-center">
					{@html icon}
				</div>
			</div>
		{/each}
	</div>
	<div class="mt-12 flex items-center justify-center gap-x-6">
		<a
			href="/downloads"
			class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>Get Started</a
		>
	</div>
</ContentContainer>
