<script lang="ts">
	import MagicWandIcon from '$lib/icons/magic-wand'
	import HiddenIcon from '$lib/icons/hidden'
	import TransactionsIcon from '$lib/icons/transactions'
	import lightningCircleIcon from '$lib/icons/lightning-circle'
	import WalletIcon from '$lib/icons/wallet'
	import TagIcon from '$lib/icons/tag'

	// const features = [
	// 	{
	// 		icon: MagicWandIcon,
	// 		title: 'SYNC.',
	// 		description:
	// 			'Unlimited Wallets and Transactions. Automated Transaction Syncing. Private Local Data Store. Full Lightning and Bitcoin Support.'
	// 	},
	// 	{
	// 		icon: TagIcon,
	// 		title: 'ENHANCE.',
	// 		description:
	// 			'Streamlined Double Entry Accounting. Smart Transfer Matching. Efficient Wallet and Transaction Tagging. Error Detection and Reconciliation.'
	// 	},
	// 	{
	// 		icon: TransactionsIcon,
	// 		title: 'VISUALIZE.',
	// 		description:
	// 			'Dynamic Sats Flow Dashboard. Comprehensive Balance Tracking. Interactive Charts for Insights. Precise Cost Basis Tracker.'
	// 	},
	// 	{
	// 		icon: TransactionsIcon,
	// 		title: 'REPORTS.',
	// 		description:
	// 			'Detailed Cost Basis Analysis. Capital Gains Reporting. Profit and Loss Statements Generation.'
	// 	}
	// ]

	const features = [
		{
			icon: MagicWandIcon,
			title: 'SYNC.',
			highlights: [
				'Unlimited Wallets and Transactions.',
				'Automated Transaction Syncing.',
				'Private Local Data Store.',
				'Full Lightning and Bitcoin Support.'
			]
		},
		{
			icon: TagIcon,
			title: 'ENHANCE.',
			highlights: [
				'Streamlined Double Entry Accounting.',
				'Smart Transfer Matching.',
				'Efficient Wallet and Transaction Tagging.',
				'Error Detection and Reconciliation.'
			]
		},
		{
			icon: TransactionsIcon,
			title: 'VISUALIZE.',
			highlights: [
				'Dynamic Sats Flow Dashboard.',
				'Comprehensive Balance Tracking.',
				'Interactive Charts for Insights.',
				'Precise Cost Basis Tracker.'
			]
		},
		{
			icon: TransactionsIcon,
			title: 'REPORTS.',
			highlights: [
				'Detailed Cost Basis Analysis.',
				'Capital Gains Reporting.',
				'Profit and Loss Statements Generation.'
			]
		}
	]
</script>

<div id="features" class="features overflow-hidden bg-gray-100 dark:bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl sm:text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				Features
			</h2>
		</div>
		<div
			class="mt-16 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
		>
			<div class="lg:pr-8 lg:pt-4">
				<div class="lg:max-w-lg">
					<h2 class="text-base font-semibold leading-7 text-indigo-400">Bitcoin only</h2>
					<p
						class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
					>
						The best money deserves superior features.
					</p>
					<dl
						class="mt-10 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none grid sm:grid-cols-1 md:grid-cols-2 gap-8"
					>
						{#each features as { icon, title, highlights }}
							<div class="relative pl-9">
								<dt class="inline font-semibold text-gray-900 dark:text-white">
									<div class="absolute left-1 top-1 h-5 w-5 text-indigo-500">
										{@html icon}
									</div>
									{title}
								</dt>
								<dd>
									<ul class="list-disc list-inside leading-6">
										{#each highlights as highlight}
											<li>{highlight}</li>
										{/each}
									</ul>
								</dd>
							</div>
						{/each}
					</dl>
				</div>
			</div>
			<img
				src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
				alt="Product screenshot"
				class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
				width="2432"
				height="1442"
			/>
		</div>
	</div>
</div>
