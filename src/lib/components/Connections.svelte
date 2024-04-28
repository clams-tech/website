<script lang="ts">
	import { DISCORD_URL } from '$lib/constants'
	import CoreLightningIcon from '$lib/icons/connections/core-lightning'
	import LndIcon from '$lib/icons/connections/lnd'
	import NwcIcon from '$lib/icons/connections/nwc'
	import OnchainIcon from '$lib/icons/connections/onchain'
	import PhoenixIcon from '$lib/icons/connections/phoenix'
	import RiverIcon from '$lib/icons/connections/river'
	import StrikeIcon from '$lib/icons/connections/strike'
	import UnchainedIcon from '$lib/icons/connections/unchained'
	import WalletOfSatoshiIcon from '$lib/icons/connections/walletofsatoshi'

	const connections = [
		{
			name: 'Core Lightning',
			icon: CoreLightningIcon,
			link: 'https://corelightning.org/'
		},
		{
			name: 'LND',
			icon: LndIcon,
			link: 'https://lightning.engineering/'
		}
	]

	const comingSoon = [
		{
			name: 'Nostr Wallet Connect',
			icon: NwcIcon,
			link: 'https://nwc.dev/'
		},
		{
			name: 'Phoenix',
			icon: PhoenixIcon,
			link: 'https://phoenix.acinq.co/'
		},
		{
			name: 'Wallet of Satoshi',
			icon: WalletOfSatoshiIcon,
			link: 'https://www.walletofsatoshi.com/'
		},
		{
			name: 'Onchain',
			icon: OnchainIcon,
			link: 'https://bitcoin.org/en/'
		},
		{
			name: 'Unchained',
			icon: UnchainedIcon,
			link: 'https://unchained.com/'
		},
		{
			name: 'Strike',
			icon: StrikeIcon,
			link: 'https://strike.me/'
		},
		{
			name: 'River',
			icon: RiverIcon,
			link: 'https://river.com/'
		}
	]
</script>

<div class="bg-white dark:bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="flex flex-col items-center gap-x-8 gap-y-16 max-w-3xl m-auto">
			<div class="mx-auto w-full lg:mx-0">
				<h2
					class="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
				>
					Fully integrated wallets
				</h2>
				<p class="mt-12 text-lg leading-8 text-gray-600 dark:text-gray-300">
					These wallets are fully integrated into our system to streamline the data import. If your
					wallet isn't listed, let us know and we'll strive to prioritize its inclusion.
				</p>
				<div class="flex gap-8 justify-center mt-8">
					{#each connections as { name, icon, link }}
						<a
							class="flex-col justify-between"
							href={link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div
								class="flex-shrink-0 h-28 w-28 rounded-full flex items-center justify-center w-32 m-auto p-3"
							>
								{@html icon}
							</div>
							<p class="text-center">{name}</p>
						</a>
					{/each}
				</div>
				<p class="text-left mt-12 text-lg leading-8 text-gray-600 dark:text-gray-300">
					These wallets are on our roadmap for integration. Let us know and we'll strive to
					prioritize your favorite wallet.
				</p>
				<div class="flex flex-wrap gap-8 justify-center mt-8">
					{#each comingSoon as { name, icon, link }}
						<a
							class="flex-col w-full max-w-[100px] opacity-[50%]"
							href={link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div class="w-16 m-auto p-3">
								{@html icon}
							</div>
							<p class="text-center">{name}</p>
						</a>
					{/each}
				</div>
				<div class="mt-12 flex wrap items-center gap-x-6">
					<a
						href={DISCORD_URL}
						target="_blank"
						rel="noopener noreferrer"
						class="block rounded-md py-2 px-3 text-center text-md font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600 text-white hover:bg-indigo-500 mx-auto"
						>Join our Discord</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
