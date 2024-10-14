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
	import ContentContainer from './shared/ContentContainer.svelte'

	const connections = [
		{
			name: 'Onchain',
			icon: OnchainIcon,
			link: 'https://bitcoin.org/en/'
		},
		{
			name: 'Core Lightning',
			icon: CoreLightningIcon,
			link: 'https://corelightning.org/'
		},
		{
			name: 'LND',
			icon: LndIcon,
			link: 'https://lightning.engineering/'
		},
		{
			name: 'Nostr Wallet Connect',
			icon: NwcIcon,
			link: 'https://nwc.dev/'
		}
	]

	const comingSoon = [
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

<ContentContainer title="Fully integrated wallets">
	<div class="text-center">
		<p class="mt-8 md:mt-12 text-lg leading-8 text-gray-600 dark:text-gray-300">
			These wallets are fully integrated into our system to streamline the data import.
		</p>
		<div class="flex flex-wrap gap-8 justify-center mt-8">
			{#each connections as { name, icon, link }}
				<a class="flex-col justify-between" href={link} target="_blank" rel="noopener noreferrer">
					<div
						class="flex-shrink-0 h-28 w-28 rounded-full flex items-center justify-center w-32 m-auto p-3"
					>
						{@html icon}
					</div>
					<p class="text-center">{name}</p>
				</a>
			{/each}
		</div>
		<p class="mt-8 md:mt-12 text-lg leading-8 text-gray-600 dark:text-gray-300">
			These wallets are coming soon. Let us know and we'll prioritize your favorite.
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
</ContentContainer>
