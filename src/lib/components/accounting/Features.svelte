<script lang="ts">
	import MagicWandIcon from '$lib/icons/magic-wand'
	import HiddenIcon from '$lib/icons/hidden'
	import TransactionsIcon from '$lib/icons/transactions'
	import lightningCircleIcon from '$lib/icons/lightning-circle'
	import WalletIcon from '$lib/icons/wallet'
	import TagIcon from '$lib/icons/tag'

	const features = [
		{
			icon: MagicWandIcon,
			title: 'Connections.',
			description:
				'Auto-sync of transactions. Identification of transfers. Lightning and Bitcoin support. Unlimited connections and transaction imports. Smart transfer matching. Koinly uses AI to detect transfers within your own wallets and excludes them from tax reports.'
		},
		{
			icon: TransactionsIcon,
			title: 'Dashboard.',
			description:
				'View realized and unrealized capital gains. Visualize your sats flow. Wallet and transaction tagging to enhance insights. View your total holdings and portfolio growth over time, across all your wallets and accounts.'
		},
		{
			icon: TransactionsIcon,
			title: 'Reports.',
			description:
				'Export cost basis and cap gains reports for each wallet or your entire stack. Error reconciliation. '
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
					<!-- <h2 class="text-base font-semibold leading-7 text-indigo-400">Bitcoin only</h2> -->
					<p
						class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
					>
						The best money deserves a dedicated accountancy suite.
					</p>
					<dl
						class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none"
					>
						{#each features as { icon, title, description }}
							<div class="relative pl-9">
								<dt class="inline font-semibold text-gray-900 dark:text-white">
									<div class="absolute left-1 top-1 h-5 w-5 text-indigo-500">
										{@html icon}
									</div>
									{title}
								</dt>
								<dd class="inline">
									{description}
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
