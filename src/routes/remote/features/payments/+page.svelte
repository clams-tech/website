<script lang="ts">
	import FeaturePage from '$lib/components/remote/FeaturePage.svelte'
	import type { FEATURE } from '$lib/constants'

	const header: { title: FEATURE; subtitle: string } = {
		title: 'Payments',
		subtitle:
			'A comprehensive overview of all balance changes across your wallets, spanning any time frame'
	}

	const overview = [
		'This feature offers a comprehensive transaction record, allowing you to access a complete history of your financial activities. With advanced filtering options, you can easily isolate specific transactions for in-depth analysis.',
		'For example, you may need to examine on-chain balance adjustments resulting from recent channel closures on your lightning node in the past month.',
		'Likewise, if you want to review all Lightning payments received across your nodes over the last week, this can be accomplished effortlessly.',
		'Clicking on a payment will open a dedicated page with even more detailed information. On-chain transactions will conveniently link to a Block Explorer for further exploration.'
	]

	const features = [
		{
			title: 'Detailed Descriptions',
			description: 'On-chain debit/deposit, Channel open/close etc'
		},
		{
			title: 'Filter / Sort Options',
			description: 'Status, type, wallet, amount, date and more'
		}
	]

	const comingSoon = null
</script>

<FeaturePage {header} {overview} {features} {comingSoon} />
