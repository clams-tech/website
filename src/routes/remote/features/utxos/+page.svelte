<script lang="ts">
	import FeaturePage from '$lib/components/remote/FeaturePage.svelte'
	import type { FEATURE } from '$lib/constants'

	const header: { title: FEATURE; subtitle: string } = {
		title: 'UTXOs',
		subtitle: 'A dedicated dashboard for your onchain funds.'
	}

	const overview = [
		'With this feature, you can access a comprehensive overview of all your Unspent Transaction Outputs (UTXOs) across your connected wallets.',
		'The user-friendly interface visually represents the number, size, and status of your UTXOs, allowing for quick and easy insights at a glance.',
		"Moreover, you'll enjoy the flexibility to apply personalized filters, enabling you to categorize UTXOs according to your preferences. For example, you can opt to display UTXOs confirmed within a specific timeframe or those currently in the process of being spent."
	]

	const features = [
		{
			title: 'Full Onchain Support',
			description: 'Send from and receive to your lightning node'
		},
		{
			title: 'Filter / Sort Options',
			description: 'Status, wallet, date, amount etc'
		}
	]

	const comingSoon = null
</script>

<FeaturePage {header} {overview} {features} {comingSoon} />
