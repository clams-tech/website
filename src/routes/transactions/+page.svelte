<script lang="ts">
	import FeaturePage from '$lib/components/FeaturePage.svelte'

	const header = {
		title: 'Transactions',
		subtitle:
			'A comprehensive overview of all balance changes across your wallets, spanning any time frame'
	}

	const overview = [
		'Using advanced filtering options, you can precisely isolate particular updates for in-depth analysis.',
		"For example, if you want to review on-chain balance adjustments resulting from channel closures within the past month, it's a straightforward process.",
		'Likewise, investigating lightning payments received by a specific node in the last week is effortless.',
		"By clicking on a transaction entry, you'll be directed to a dedicated page with more detailed information."
	]

	const features = [
		{
			title: 'Detailed Descriptions',
			description: 'On-chain debit/deposit, Channel open/close etc'
		},
		{
			title: 'Filters',
			description: 'Date, amount, type, source and more.'
		}
	]

	const comingSoon = [
		{
			title: 'TBD'
		},
		{
			title: 'TBD'
		}
	]
</script>

<FeaturePage {header} {overview} {features} {comingSoon} />
