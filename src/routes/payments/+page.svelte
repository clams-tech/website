<script lang="ts">
	import FeaturePage from '$lib/components/FeaturePage.svelte'

	const header = {
		title: 'Transactions',
		subtitle:
			'A comprehensive overview of all balance changes across your wallets, spanning any time frame'
	}

	const overview = [
		"With this feature, you'll discover a comprehensive record of all your transactions. With advanced filtering options, you can pinpoint specific updates for in-depth analysis.",
		'For instance, you might want to review on-chain balance adjustments resulting from recent channel closures on your Core Lightning node within the past month.',
		'Similarly, if you wish to examine all lightning payments received across all your nodes in the last week, you can do so effortlessly.',
		'Clicking on a transaction will open a dedicated page with even more detailed information. On-chain transactions will conveniently link out to a Block Explorer for further exploration.'
	]

	const features = [
		{
			title: 'Detailed Descriptions',
			description: 'On-chain debit/deposit, Channel open/close etc'
		},
		{
			title: 'Flexible Filter and Sorting',
			description: 'Options include type, source, date, amount and more.'
		}
	]

	const comingSoon = [
		{
			title: 'Advanced transaction alerts'
		},
		{
			title: 'Transaction tagging'
		}
	]
</script>

<FeaturePage {header} {overview} {features} {comingSoon} />
