<script>
	import { ACCOUNTING_APP_URL, DOCS_URL } from '$lib/constants'
	import SyncIcon from '$lib/icons/sync'
	import EnhanceIcon from '$lib/icons/enhance'
	import VisualizeIcon from '$lib/icons/visualize'
	import ReportIcon from '$lib/icons/report'

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

<div class="bg-gray-100 dark:bg-gray-900">
	<div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-4xl">
			<h2
				class="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
			>
				How it works
			</h2>
			<div class="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
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

			<div class="mt-16 flex items-center justify-center gap-x-6">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={ACCOUNTING_APP_URL}
					class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Get Started</a
				>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={DOCS_URL}
					class="flex gap-2 rounded-md ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 px-7 py-2.5 text-md font-semibold text-indigo-600 dark:text-indigo-400 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Learn More</a
				>
			</div>
		</div>
	</div>
</div>
