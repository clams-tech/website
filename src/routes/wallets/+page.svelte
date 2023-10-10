<script lang="ts">
	import FeaturePage from '$lib/components/FeaturePage.svelte'

	const header = {
		title: 'Wallets',
		subtitle: 'The place for managing wallet connections and synchronizing data.'
	}

	const overview = [
		"When you launch Clams for the first time, you'll be prompted to establish a wallet connection, enabling data synchronization to begin.",
		'The real power of Clams emerges when multiple wallets are connected, consolidating data from various sources into a comprehensive transaction history.',
		'For instance, an individual might operate separate lightning nodes for personal and business use. By connecting both, they can gain a more holistic view of their finances in one central location.',
		'With customizable permissions, you retain full control, ranging from read-only access to complete administrative control. You can grant access for as long as necessary and revoke it at any time.'
	]

	const features = [
		{
			title: 'CLN Support',
			description: 'Encrypted connections using Commando.'
		},
		{
			title: 'Custom Labels',
			description: 'Personalize your wallets for easy tracking.'
		},
		{
			title: 'Real-Time Monitoring',
			description: 'Stay informed with real-time updates on your connections.'
		},
		{
			title: 'Effortless Management',
			description: 'Disconnect and reconnect wallets at your convenience.'
		},
		{
			title: 'Lightning Node Logs',
			description: 'Logs for comprehensive monitoring and troubleshooting.'
		},
		{
			title: 'Error Handling',
			description: 'Clean and precise error messaging for swift issue resolution.'
		}
	]

	const comingSoon = [
		{
			title: 'LND support'
		},
		{
			title: 'XPub Connections'
		},
		{
			title: 'Advanced Notications'
		}
	]
</script>

<FeaturePage {header} {overview} {features} {comingSoon} />
