<script lang="ts">
	import FeaturePage from '$lib/components/FeaturePage.svelte'

	const header = {
		title: 'Offers',
		subtitle:
			'Clams is at the forefront of BOLT12 adoption, a groundbreaking payment format for Lightning.'
	}

	const overview = [
		'Effortlessly create and manage offers, also known as static invoices, for seamless payment acceptance and convenient withdrawals.',
		'From reusable QR codes on your coffee shop tip jar to enabling customers to receive refunds from your online store, the possibilities for using offers are diverse.',
		'Presently, this feature is exclusively available for Core Lightning nodes. However, as BOLT12 adoption continues to grow within the ecosystem, Clams is eagerly looking forward to expanding support for a wider range of implementations.'
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
