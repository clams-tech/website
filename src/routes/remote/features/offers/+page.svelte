<script lang="ts">
	import FeaturePage from '$lib/components/remote/FeaturePage.svelte'
	import type { FEATURE } from '$lib/constants'

	const header: { title: FEATURE; subtitle: string } = {
		title: 'Offers',
		subtitle:
			'Clams is at the forefront of BOLT12 adoption, a groundbreaking payment format for Lightning.'
	}

	const overview = [
		'Effortlessly create and manage offers, also referred to as static invoices, for seamless payment acceptance and convenient withdrawals.',
		"Whether it's through reusable QR codes on your coffee shop's tip jar or enabling online store customers to receive refunds, the applications for using offers are versatile."
	]

	const features = [
		{
			title: 'Pay / Withdraw',
			description: 'Create static QR code offers for both payment and withdrawal flows'
		},
		{
			title: 'QR support',
			description: 'pay to BOLT12 offers by scanning a QR code or pasting the offer string'
		},
		{
			title: 'History',
			description: 'Comprehensive payment history per offer'
		},
		{
			title: 'Management',
			description:
				'Manage your offers with ease, including the flexibility to disable them as needed'
		}
	]

	const comingSoon = null
</script>

<FeaturePage {header} {overview} {features} {comingSoon} deepDive={'/remote/#bolt12-offers'} />
