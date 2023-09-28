<script lang="ts">
	import FeaturePage from '$lib/components/FeaturePage.svelte'

	const header = {
		title: 'Channels',
		subtitle:
			"The dedicated Channels Dashboard offers an array of monitoring capabilities, enabling you to oversee each individual channel you've established across all of your connected lightning nodes."
	}

	const overview = [
		'This dashboard will proves very valuable in swiftly gauging the status of your liquidity profile concerning your off-chain Bitcoin holdings. ',
		'To take an example, lets say you have encountered challenges in receiving payments through one of your CLN nodes. To diagnose and address any issues, you can organize your channels based on nodes, and then focus on assessing your inbound liquidity. ',
		'Throughout this process, you might uncover that your inbound liquidity is adequate, but certain channels are in a state of failure.',
		'Identifying these types of issues allows you to promptly take appropriate corrective actions.'
	]

	const features = [
		{
			title: 'Channel Status',
			description: 'Status indicator to quickly determine the current state of each channel.'
		},
		{
			title: 'Clean UI',
			description:
				'Visual representation of inbound and outbound liquidity totals for every channel.'
		},
		{
			title: 'Fee Management',
			description: 'Options to update channel fee settings'
		},
		{
			title: 'Logs',
			description: 'Channel-specific logs for detailed information and troubleshooting.'
		},
		{
			title: 'Filters',
			description: 'Toggle between node-specific channels or view all channels at once.'
		},
		{
			title: 'Sorting',
			description:
				'Convenient sorting options to organize channels based on various metrics, such as liquidity.'
		}
	]

	const comingSoon = [
		{
			title: 'More mangement options'
		},
		{
			title: 'Liquidity ads dashboard'
		}
	]
</script>

<FeaturePage {header} {overview} {features} {comingSoon} />
