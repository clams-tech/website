<script lang="ts">
	import FeaturePage from '$lib/components/FeaturePage.svelte'

	const header = {
		title: 'UTXOs',
		subtitle: 'A dedicated dashboard for your onchain funds.'
	}

	const overview = [
		'This dashboard provides a comprehensive snapshot of your held Unspent Transaction Outputs (UTXOs), encompassing those stored in cold storage as well as those residing in your lightning wallet.',
		'The user-friendly interface facilitates visualizes the count and size of the UTXOs.',
		'Accompanying filters permit personalized sorting according to your preferences.',
		'For example, you might choose to exclusively display UTXOs stemming from your CLN node confirmed within the previous quarter.',
		'Furthermore, akin to all data within Clams, you have the ability to tag your UTXOs, thereby enhancing your accounting practices'
	]

	const features = [
		{
			title: 'Coin selection',
			description: 'Pick and choose the UTXOs you want to spend.'
		},
		{
			title: 'Address Generation',
			description:
				'Generate on-chain receive addresses for multiple cold storage and lightning wallets.'
		},
		{
			title: 'Lightning Conversion',
			description: 'Convert one or multiple UTXOs to lightning Bitcoin.'
		},
		{
			title: 'Filters',
			description: 'Sort UTXOs by various attributes for easy management.'
		},
		{
			title: 'Tags',
			description: 'Tagging functionality to help with record keeping and accounting.'
		}
	]

	const comingSoon = [
		{
			title: "Confirmation alerts via nostr dm's or email."
		},
		{
			title: 'Integration with hardware devices for signing transactions.'
		}
	]
</script>

<FeaturePage {header} {overview} {features} {comingSoon} />
