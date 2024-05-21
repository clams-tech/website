<script lang="ts">
	import FeaturePage from '$lib/components/remote/FeaturePage.svelte'
	import type { FEATURE } from '$lib/constants'

	const header: { title: FEATURE; subtitle: string } = {
		title: 'Channels',
		subtitle: 'All of your Lightning channels, all in one place.'
	}

	const overview = [
		'The dedicated channels dashboard offers a range of monitoring capabilities, allowing you to supervise each channel opened across all your connected lightning nodes.',
		'Visual representations of your inbound and outbound liquidity make it easy to assess the health of your channels at a glance. The available filter options provide a means to gain deeper insights.',
		'For example, if you encounter difficulties in receiving payments through one of your CLN nodes, you can diagnose and address issues by filtering your channels by wallet and focusing on assessing your inbound liquidity. During this process, you might discover that your inbound liquidity is sufficient, but certain channels are experiencing failures. Identifying such issues enables you to promptly take appropriate corrective actions.'
	]

	const features = [
		{
			title: 'Clean UI',
			description:
				'Get a clear view of your inbound and outbound liquidity for every channel with our intuitive visual representation'
		},
		{
			title: 'Open Channels',
			description: 'Either scan the connection details or paste them'
		},
		{
			title: 'Filter / Sort Options',
			description:
				'Toggle between viewing node-specific channels or see them all at once for flexible management'
		},
		{
			title: 'Fee Management',
			description: 'Options to update each channels fee settings'
		},
		{
			title: 'Channel Status',
			description: 'Easily check the status of each channel with a quick glance'
		}
	]

	const comingSoon = null
</script>

<FeaturePage {header} {overview} {features} {comingSoon} />
