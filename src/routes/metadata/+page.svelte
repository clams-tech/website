<script lang="ts">
	import FeaturePage from '$lib/components/FeaturePage.svelte'
	import type { FEATURE } from '$lib/constants'

	const header: { title: FEATURE; subtitle: string } = {
		title: 'Metadata',
		subtitle:
			'To enrich your dataset and enable deeper understanding and insights, Clams automatically applies tags to all transactions.'
	}

	const overview = [
		'These tags can be fully customized, allowing you to create your own tags and enhance your dataset even further.',
		'By utilizing tags, you have the flexibility to organize and sort your data according to your preferences.',
		'The primary objective is to ensure that users can effortlessly access the desired insights from their Bitcoin holdings.',
		'For example, how much did I spend on groceries this week? Or how much did a given customer spend at my store this quarter?'
	]

	const features = [
		{
			title: 'Intelligent defaults',
			description: 'Default tags such as "income" or "expense" for easy categorization.'
		},
		{
			title: 'Custom tagging',
			description: 'Custom tagging functionality to tailor tags to your specific needs.'
		}
	]

	const comingSoon = null
</script>

<FeaturePage {header} {overview} {features} {comingSoon} />
