<script lang="ts">
	import FeaturePage from '$lib/components/FeaturePage.svelte'

	const header = {
		title: 'Offers',
		subtitle:
			'Clams is at the forefront of BOLT12 adoption, a groundbreaking payment format for Lightning.'
	}

	const overview = [
		'A dedicated dashboard allows node operators to effortlessly create and manage offers, generating static invoices for seamless payment acceptance and convenient withdrawals.',
		'There are a whole host of potential use cases for offers, from reusable QR codes on your coffee shop tip jar to allowing customers to receive a refund from your online store.',
		"It's worth noting that this feature is presently available exclusively for Core Lightning nodes.",
		'However, as the adoption of BOLT12 gains momentum within the ecosystem, Clams eagerly anticipates integrating support for a wider array of implementations.'
	]

	const features = [
		{
			title: 'Pay/Withdraw',
			description: 'Create static QR code offers for both payment and withdrawal flows.'
		},
		{
			title: 'QR support',
			description: 'pay to BOLT12 offers by scanning a QR code or pasting the offer string.'
		},
		{
			title: 'Fee Management',
			description: 'Options to update channel fee settings'
		},
		{
			title: 'History',
			description: 'Comprehensive payment history per offer.'
		},
		{
			title: 'Management',
			description:
				'Manage your offers with ease, including the flexibility to disable them as needed.'
		}
	]

	const comingSoon = [
		{
			title: 'Recurring payments for added convenience.'
		}
	]
</script>

<FeaturePage {header} {overview} {features} {comingSoon} />
