<script>
	import CheckIcon from '$lib/icons/check.svelte'
	import BitcoinSymbolIcon from '$lib/icons/bitcoin-symbol'
	import PlusIcon from '$lib/icons/plus'
	import Button from '$lib/elements/Button.svelte'
	import { APP_URL } from '$lib/constants'

	const communityFeatures = [
		'Unlimited Wallet Connections',
		'Onchain Payments',
		'Lightning Payments',
		'Channel Management',
		'BOLT12 Offers',
		'Forwards Dashboard',
		'Premium Features'
	]

	const premiumFeatures = [
		'All Community Features',
		'Lightning Addresses',
		'Cost Basis Calculations',
		'Profit and Loss Statements',
		'Sync Data Across Devices',
		'Hosted Payment Pages',
		'Advanced Notifications'
	]
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
	<!-- Community -->
	<div class="w-full p-8 bg-white dark:bg-black text-center rounded-3xl shadow-xl">
		<h1 class="font-semibold text-2xl">Community</h1>
		<div class="pt-2 tracking-wide flex justify-center gap-1">
			<span class="flex justify-center text-3xl font-semibold">
				<div class="w-6">
					{@html BitcoinSymbolIcon}
				</div>
				0
			</span>
			<span class="text-gray-400 dark:text-gray-200 font-medium mt-3">/ forever</span>
		</div>
		<hr class="mt-4 border-1" />
		<div class="pt-8 flex flex-col gap-3 justify-between">
			{#each communityFeatures as feature, i}
				<div class="flex items-center gap-2">
					{#if i === communityFeatures.length - 1}
						<div class="w-8 stroke-red-500 fill-red-500 transform rotate-45">
							{@html PlusIcon}
						</div>
					{:else}
						<div class="w-8">
							<CheckIcon />
						</div>
					{/if}
					<span>{feature}</span>
				</div>
			{/each}
			<a class="flex mt-3" href={APP_URL} target="_blank" rel="noopener noreferrer">
				<Button primary text="LFG!" />
			</a>
		</div>
	</div>
	<!-- Premium -->
	<div class="w-full p-8 bg-white dark:bg-black text-center rounded-3xl shadow-xl">
		<h1 class="font-semibold text-2xl">Premium</h1>
		<div class="pt-2 tracking-wide flex justify-center gap-1">
			<span class="flex justify-center text-3xl font-semibold">
				<div class="w-6">
					{@html BitcoinSymbolIcon}
				</div>
				TBD
			</span>
			<span class="text-gray-400 dark:text-gray-200 font-medium mt-3">/ year</span>
		</div>
		<hr class="mt-4 border-1" />
		<div class="pt-8 flex flex-col gap-3 justify-between">
			{#each premiumFeatures as feature}
				<div class="flex items-center gap-2">
					<div class="w-8">
						<CheckIcon />
					</div>
					<span>{feature}</span>
				</div>
			{/each}
			<div class="flex mt-3">
				<Button disabled text="Coming Soon..." />
			</div>
		</div>
	</div>
</div>
