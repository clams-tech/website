<script lang="ts">
	import { FEATURE_ICONS } from '$lib/constants'
	import { darkMode } from '$lib/stores'
	import chevronRightIcon from '$lib/icons/chevron-right'

	let isDarkMode = true

	darkMode.subscribe((value) => {
		isDarkMode = value
	})

	let iconColor: string
	$: isDarkMode ? (iconColor = '#B182F8') : (iconColor = '#6305F0')

	let features = [
		{
			title: 'Wallets',
			description:
				'Establish connections to multiple wallets to synchronize data and manage funds.',
			route: '/remote/features/wallets',
			icon: FEATURE_ICONS['Wallets'],
			active: true
		},
		{
			title: 'Payments',
			description:
				'A comprehensive history of all updates to your combined on-chain and off-chain balance.',
			route: '/remote/features/payments',
			icon: FEATURE_ICONS['Payments'],
			active: false
		},
		{
			title: 'UTXOs',
			description: 'Manage your UTXOs via a customizable and interactive dashboard.',
			route: '/remote/features/utxos',
			icon: FEATURE_ICONS['UTXOs'],
			active: false
		},
		{
			title: 'Channels',
			description:
				'Track the status and liquidity profile of your lightning channels. Adjust fee settings to your needs.',
			route: '/remote/features/channels',
			icon: FEATURE_ICONS['Channels'],
			active: false
		},
		{
			title: 'Offers',
			description:
				'Create and manage BOLT12 reusable static invoices for payments and withdrawals.',
			route: '/remote/features/offers',
			icon: FEATURE_ICONS['Offers'],
			active: false
		},
		{
			title: 'Forwards',
			description: 'Analyze the cumulative income generated over time from routing payments.',
			route: '/remote/features/forwards',
			icon: FEATURE_ICONS['Forwards'],
			active: false
		}
	]
</script>

<section
	id="features"
	class="px-6 py-[72px] md:py-[96px] flex items-center justify-center w-full bg-[#F4F6F8] dark:bg-[#1e1e1e]"
>
	<div class="flex flex-col justify-between w-full max-w-5xl gap-10">
		<h1 class="text-[40px] text-center font-bold">
			Key <span class="text-light-orange">Features</span>
		</h1>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
			{#each features as { icon, title, description, route }}
				<a
					class="h-30 border dark:border-dark-border p-4 rounded-lg flex flex-col justify-between gap-3 bg-white dark:bg-black"
					href={route}
				>
					<div class="flex items-center justify-between gap-2">
						<div class="flex items-center gap-1">
							<div class="w-10 xs:w-12">
								{@html `<div style="stroke: ${iconColor}">${icon}</div>`}
							</div>
							<h3 class="md:text-[24px] font-bold">{title}</h3>
						</div>
						<div class="flex md:hidden">
							<p class="text-light-purple dark:text-dark-purple font-bold">Learn More</p>
							<div class="w-8">
								{@html `<div style="fill: ${iconColor}">${chevronRightIcon}</div>`}
							</div>
						</div>
					</div>
					<!-- hide on mobile -->
					<p class="hidden md:block">{description}</p>
					<!-- hide on mobile -->
					<div class="hidden md:flex justify-end">
						<p class="text-light-purple dark:text-dark-purple font-bold">Learn More</p>
						<div class="w-8">
							{@html `<div style="fill: ${iconColor}">${chevronRightIcon}</div>`}
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
