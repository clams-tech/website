<script lang="ts">
	import FeaturePage from '$lib/components/FeaturePage.svelte'

	const header = {
		title: 'Channels',
		subtitle: 'All of your Lightning channels, all in one place.'
	}

	const overview = [
		'The dedicated channels dashboard offers an array of monitoring capabilities, enabling you to oversee each channel that is opened across all of your connected lightning node wallets.',
		'The visual representation of your inbound and outbound liquidity will help you to swiftly determine the health of your channels. The filter options will help you gain deeper insights.',
		'To take an example, lets say you have encountered challenges in receiving payments through one of your CLN nodes. To diagnose and address any issues, you can organize your channels based on nodes, and then focus on assessing your inbound liquidity. ',
		'Throughout this process, you might uncover that your inbound liquidity is adequate, but certain channels are in a state of failure. Identifying these types of issues allows you to promptly take appropriate corrective actions.'
	]

	const features = [
		{
			title: 'Clean UI',
			description:
				'Get a clear view of your inbound and outbound liquidity for every channel with our intuitive visual representation.'
		},
		{
			title: 'Open Channels',
			description: 'Either scan the connection details or paste them.'
		},
		{
			title: 'Filter / Sort Options',
			description:
				'Toggle between viewing node-specific channels or see them all at once for flexible management.'
		},
		{
			title: 'Fee Management',
			description: 'Options to update each channels fee settings'
		},
		{
			title: 'Channel Status',
			description: 'Easily check the status of each channel with a quick glance.'
		},
		{
			title: 'Logs',
			description:
				'Access detailed channel-specific logs for in-depth information and troubleshooting.'
		}
	]

	const comingSoon = [
		{
			title: 'More advanced channel mangement'
		},
		{
			title: 'Liquidity Ads dashboard'
		}
	]
</script>

<FeaturePage {header} {overview} {features} {comingSoon} />
