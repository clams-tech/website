<script lang="ts">
	import FeaturePage from '$lib/components/FeaturePage.svelte'

	const header = {
		title: 'Wallets',
		subtitle: 'The Wallets feature acts as a central hub for managing connections to your nodes.'
	}

	const overview = [
		'Once a connection is established, data synchronization begins.',
		'Power users that manage multiple nodes can connect them all, allowing them to seamlessly sync data from different sources.',
		'For example, you might have one node for personal matters and another for business transactions. With Clams, you can gain insights and control over both once both nodes are connected.',
		'Node operators always maintain full control through customizable permissions, ranging from read-only to full administrative control. Access to nodes is available for as long as needed, secured by a strong password of your choice.'
	]

	const features = [
		{
			title: 'CLN support',
			description: 'Establish connections using commando.'
		},
		{
			title: 'Payments',
			description:
				'BOLT11 Invoices, KeySend, LNURL, Lightning Address (pay only) and BOLT12 offers.'
		},
		{
			title: 'Monitoring',
			description: 'Real-time updates for connection status.'
		},
		{
			title: 'Easy Connections',
			description: 'Disconnect and reconnect to nodes at anytime.'
		},
		{
			title: 'Logs',
			description: 'Node logs for monitoring and troubleshooting.'
		},
		{
			title: 'Error Tracking',
			description: 'Clean, precise error messaging for prompt issue resolution.'
		}
	]

	const comingSoon = [
		{
			title: 'LND support'
		},
		{
			title: 'XPub Connection'
		},
		{
			title: 'Advanced Notications'
		}
	]
</script>

<FeaturePage {header} {overview} {features} {comingSoon} />
