<script lang="ts">
	import FeaturePage from '$lib/components/FeaturePage.svelte'

	const header = {
		title: 'Forwards',
		subtitle: 'Monitor all your income generated via routing payments.'
	}

	const overview = ['bla', 'bla', 'bla', 'bla']

	const features = [
		{
			title: 'tbd',
			description: 'bla'
		},
		{
			title: 'tbd',
			description: 'bla'
		}
	]

	const comingSoon = [
		{
			title: 'Charts to visualize forwards'
		}
	]
</script>

<FeaturePage {header} {overview} {features} {comingSoon} />
