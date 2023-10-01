<script lang="ts">
	import FeaturePage from '$lib/components/FeaturePage.svelte'

	const header = {
		title: 'UTXOs',
		subtitle: 'A dedicated dashboard for your onchain funds.'
	}

	const overview = [
		'With this feature, you can gain a comprehensive view of all your Unspent Transaction Outputs (UTXOs) across your connected wallets.',
		'The intuitive interface visualizes the number and size of your UTXOs, making it easy to gain insights at a glance.',
		"You'll also have the flexibility to apply personalized filters, allowing you to sort UTXOs according to your preferences. For example, you can choose to display UTXOs confirmed within a specific timeframe or those in the process of being spent."
	]

	const features = [
		{
			title: 'Coin selection',
			description: 'Choose the UTXOs you want to spend with precision.'
		},
		{
			title: 'Address Generation',
			description: 'Easily generate on-chain receive addresses.'
		},
		{
			title: 'Lightning Conversion',
			description: 'Convert one or multiple UTXOs to lightning Bitcoin.'
		},
		{
			title: 'Filter / Sort Options',
			description: 'Sort UTXOs by various attributes for seamless management.'
		}
	]

	const comingSoon = [
		{
			title: 'Confirmation alerts.'
		},
		{
			title: 'UTXO tagging.'
		}
	]
</script>

<FeaturePage {header} {overview} {features} {comingSoon} />
