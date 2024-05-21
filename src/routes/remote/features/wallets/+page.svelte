<script lang="ts">
	import FeaturePage from '$lib/components/remote/FeaturePage.svelte'
	import type { FEATURE } from '$lib/constants'

	const header: { title: FEATURE; subtitle: string } = {
		title: 'Wallets',
		subtitle: 'The place for managing wallet connections and synchronizing data.'
	}

	const overview = [
		"When you launch Clams for the first time, you'll be prompted to establish a wallet connection, which initiates data synchronization. Once this process is complete, this section of the app will be your hub for actions such as syncing connections and retrieving connection details to facilitate the opening of channels for your Lightning node.",
		'The true power of Clams becomes evident when multiple wallets are connected, consolidating data from various sources into a comprehensive transaction history.',
		'Some Bitcoiners may opt to run separate Lightning nodes for personal and business purposes. By connecting both to Clams, they can gain a more holistic financial perspective in one central location.',
		'With customizable permissions, you maintain full control, ranging from read-only access to complete administrative control. You can grant access for as long as necessary and revoke it at any time.'
	]

	const features = [
		{
			title: 'CLN Support',
			description: 'Encrypted connections using Commando'
		},
		{
			title: 'Custom Labels',
			description: 'Personalize your wallets for easy tracking'
		},
		{
			title: 'Real-Time Monitoring',
			description: 'Stay informed with real-time updates on your connections'
		},
		{
			title: 'Effortless Management',
			description: 'Disconnect and reconnect wallets at your convenience'
		},
		{
			title: 'Lightning Node Logs',
			description: 'Logs for comprehensive monitoring and troubleshooting'
		},
		{
			title: 'Error Handling',
			description: 'Clean and precise error messaging for swift issue resolution'
		}
	]

	const comingSoon = null
</script>

<FeaturePage {header} {overview} {features} {comingSoon} deepDive={'/remote/#wallets'} />
