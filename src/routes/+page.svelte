<script lang="ts">
	import Button from '$lib/elements/Button.svelte'
	import { t } from '$lib/i18n/translations'
	import { Parallax, ParallaxLayer, StickyLayer } from 'svelte-parallax'
	import FAQ from '$lib/components/FAQ.svelte'
	import * as animateScroll from 'svelte-scrollto'
	import { FEATURE_ICONS } from '$lib/constants'
	import BitcoinIcon from '$lib/icons/bitcoin'
	import chevronRightIcon from '$lib/icons/chevron-right'
	import CheckIcon from '$lib/icons/check.svelte'
	import BlocksImage from '$lib/images/blocks.png'
	import ArrowUpIcon from '$lib/icons/arrow-up'
	import { darkMode } from '$lib/stores'

	let isDarkMode = true

	darkMode.subscribe((value) => {
		isDarkMode = value
	})

	let activeFeatureIndex = 0

	let features = [
		{
			title: 'Wallets',
			description:
				'Establish connections to multiple Lightning nodes to synchronize data and manage funds.',
			route: '/wallets',
			icon: FEATURE_ICONS['wallets'],
			active: true
		},
		{
			title: 'Transactions',
			description:
				'A comprehensive history of all updates to your combined on-chain and off-chain balance.',
			route: '/transactions',
			icon: FEATURE_ICONS['transactions'],
			active: false
		},
		{
			title: 'UTXOs',
			description: 'Manage your UTXOs via a customizable and interactive dashboard.',
			route: '/utxos',
			icon: FEATURE_ICONS['utxos'],
			active: false
		},
		{
			title: 'Channels',
			description:
				'Track the status and liquidity profile of your lightning channels. Adjust fee settings to your needs.',
			route: '/channels',
			icon: FEATURE_ICONS['channels'],
			active: false
		},
		{
			title: 'Offers',
			description:
				'Create and manage BOLT12 reusable static invoices for payments and withdrawals.',
			route: '/offers',
			icon: FEATURE_ICONS['offers'],
			active: false
		},
		{
			title: 'Forwards',
			description: 'Analyze the cumulative income generated over time from routing payments.',
			route: '/forwards',
			icon: FEATURE_ICONS['forwards'],
			active: false
		},
		{
			title: 'Metadata',
			description:
				'Transactions get tagged with intelligent defaults. Enhance your local dataset with custom tags.',
			route: '/metadata',
			icon: FEATURE_ICONS['metadata'],
			active: false
		}
	]

	const whys = [
		{
			title: 'Non-custodial',
			description: 'Enjoy a futuristic payment experience and keep full control of your sats.'
		},
		{
			title: 'Bitcoin Only',
			description:
				'Built by Bitcoiners who are passionate about improving the usability of Bitcoin.'
		},
		{
			title: 'Privacy-Focused',
			description:
				'Privacy is a priority, with no logging, tracking, or Google scripts utilized within the app.'
		},
		{
			title: 'Local Data Storage',
			description:
				'All data is stored locally on your device and never leaves unless you want it to.'
		},
		{
			title: 'Fully Open-Source',
			description:
				'All client-side application code is public. Anyone can verify it and we welcome feedback.'
		}
	]

	const faqs = [
		{
			q: 'Where is my Bitcoin data stored?',
			a: 'All data is stored locally on your device and encrypted with a password of your choice.'
		},
		{
			q: 'Can I back up my data?',
			a: 'Not yet, but we have plans to add this feature soon.'
		},
		{
			q: 'How do app permissions work?',
			a: 'When you make a wallet connection, the app will ask you to grant permissions. The app requires read-only access at a minimum to calculate your sats flow. You can update or revoke permissions at any time.'
		},
		{
			q: 'Which lightning implementations do you support?',
			a: 'CLN only, but we are investigating adding LND support.'
		},
		{
			q: 'Can I sync my data across multiple devices?',
			a: 'This feature is on our roadmap and will be prioritized when there is sufficient demand for it.'
		},
		{
			q: 'How do you decide which wallet connections to support?',
			a: "If you don't see an option you want, please join our Discord server and let us know."
		}
	]

	$: {
		features = features.map((feature, index) => {
			return {
				...feature,
				active: index === activeFeatureIndex ? true : false
			}
		})
	}
</script>

<svelte:head>
	<title>Clams</title>
</svelte:head>

<!-- Hero -->
<section class="flex flex-col items-center w-full h-screen">
	<div class="px-6 flex justify-center w-full max-w-[610px] mt-[120px]">
		<div class="z-10 flex flex-col items-center w-full text-center">
			<h1 class="text-6xl font-bold mb-4">
				One Platform to Unify Your <span class="text-light-orange">Bitcoin</span>.
			</h1>
			<h2 class="text-2xl mb-8">
				Helping Businesses and Individuals Operate on a Bitcoin Standard
			</h2>

			<div class="flex gap-6">
				<a
					href="https://docs.clams.tech"
					target="_blank"
					rel="noopener noreferrer"
					class={'w-[134px]'}
				>
					<Button text="Learn more" />
				</a>
				<a
					class={'w-[134px]'}
					href="https://app.clams.tech"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button text="Start now" primary />
				</a>
			</div>
		</div>
	</div>
	<div
		class={`mt-[-150px] h-full w-full ${
			isDarkMode
				? "bg-[url('$lib/images/network--dark.png')]"
				: "bg-[url('$lib/images/network--light.png')]"
		}`}
	/>
</section>
<!-- What -->
<section class="px-6 py-[72px] md:py-[96px] flex items-center justify-center w-full gap-4">
	<div class="flex flex-col justify-between w-full max-w-[704px] gap-5">
		<h2 class="text-2xl">
			With transactions spread across cold storage, lightning nodes, exchanges, mobile apps, and
			more, managing your finances can be a daunting task for Bitcoiners.
		</h2>
		<h2 class="text-2xl">
			Clams simplifies this process by consolidating your wallets into one secure hub. Effortlessly
			manage, track, and report on your transactions with a single click.
		</h2>
		<h2 class="text-2xl">
			Our mission is to solve the accountancy problem for Bitcoiners, enabling them to kickstart
			circular economies.
		</h2>
		<div class="flex items-center gap-2">
			<h2 class="text-4xl text-bold">
				Get started to <span class="text-light-orange">visualize</span> your
				<span class="text-light-orange">sats flow</span>.
			</h2>
			<div class="md:hidden max-w-[100px]">
				{@html BitcoinIcon}
			</div>
		</div>
	</div>
	<div class="hidden md:block w-[204px]">
		{@html BitcoinIcon}
	</div>
</section>
<!-- Features -->
<section
	class="px-6 py-[72px] md:py-[96px] flex items-center justify-center w-full bg-[#F4F6F8] dark:bg-[#1e1e1e]"
>
	<div class="flex flex-col justify-between w-full max-w-4xl gap-10">
		<h1 class="text-4xl text-center">Key <span class="text-light-orange">Features</span></h1>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			{#each features as { icon, title, description, route }}
				<a class="border p-4 rounded-lg flex flex-col gap-2 bg-white text-black" href={route}>
					<div class="flex items-center justify-between gap-2">
						<div class="flex items-center gap-1">
							<div class="w-10 xs:w-12">
								{@html icon}
							</div>
							<h3 class="md:text-2xl font-bold">{title}</h3>
						</div>
						<div class="flex md:hidden">
							<p class="text-light-purple font-bold">Learn More</p>
							<div class="w-8">
								{@html chevronRightIcon}
							</div>
						</div>
					</div>
					<!-- hide on mobile -->
					<p class="hidden md:block">{description}</p>
					<!-- hide on mobile -->
					<div class="hidden md:flex justify-end">
						<p class="text-light-purple font-bold">Learn More</p>
						<div class="w-8">
							{@html chevronRightIcon}
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
<!-- Why -->
<section class="px-6 py-[72px] md:py-[96px] flex flex-col items-center justify-center w-full">
	<div class="flex flex-col items-center w-full gap-10">
		<h1 class="text-4xl text-center"><span class="text-light-orange">Why</span> Choose Clams?</h1>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[640px]">
			{#each whys as { title, description }}
				<div class="flex">
					<div class="w-8">
						<CheckIcon />
					</div>
					<div class="flex flex-col gap-1 md:max-w-[280px]">
						<div class="flex items-center">
							<h3 class="font-bold">{title}</h3>
						</div>
						<p>{description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- FAQ -->
<section
	class="px-6 py-[72px] md:py-[96px] flex flex-col items-center w-full bg-[#F4F6F8] dark:bg-[#1e1e1e]"
>
	<div class="flex flex-col justify-between w-full max-w-[850px] gap-10">
		<h1 class="text-4xl">
			Frequently asked <span class="text-light-orange">questions</span>
		</h1>
		<FAQ {faqs} />
	</div>
</section>
<!-- Get Started -->
<section
	class="px-6 py-[72px] md:py-[96px] flex flex-col items-center justify-center w-full gap-10"
>
	<div class="flex flex-col w-full max-w-[680px] text-center gap-2">
		<h1 class="text-4xl font-bold">
			<span class="text-light-orange">Unleash</span> the full potential of your Bitcoin holdings with
			Clams.
		</h1>
		<p class="text-2xl">
			Experience the convenience of a single app that does it all and discover the new era of
			Bitcoin management.
		</p>
		<div class="mt-4 flex justify-center">
			<a
				class={'w-[134px]'}
				href="https://app.clams.tech"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Button text="Get Started" primary />
			</a>
		</div>
	</div>
	<div class="grid grid-cols1 md:grid-cols-2 gap-4">
		<div class=""><img src={BlocksImage} alt="blocks" /></div>
		<div class="flex flex-col gap-2 max-w-[544px] justify-center">
			<h2 class="text-2xl">Want to contribute or have ideas on how to improve Clams?</h2>
			<p>
				Join us in our <a class="text-light-purple dark:text-bitcoin font-bold underline" href="/"
					>Discord</a
				> server
			</p>
		</div>
	</div>
</section>
<!-- Who? -->
<section
	class="px-6 py-[72px] md:py-[96px] flex items-center justify-center w-full bg-[#F4F6F8] dark:bg-[#1e1e1e]"
>
	<div class="flex flex-col justify-between w-full gap-5 max-w-4xl">
		<h1 class="text-4xl text-center">A <span class="text-light-orange">Note</span> from Us</h1>
		<h2 class="text-2xl">Hey!</h2>
		<h2 class="text-2xl">
			We're Aaron and John, a couple of musicians who took the orange pill, and like so many others,
			we couldn't think of anything else. Thanks to Bitcoin, we're not just excited about the future
			– we're on a mission to shape it.
		</h2>
		<h2 class="text-2xl">
			Inspired by the optimism and talent found in this community, we decided to use our skills to
			build Clams. Why stop at having the best money? We also need the best tools to help Bitcoiners
			manage their finances in a self-sovereign way.
		</h2>
		<h2 class="text-2xl">We are our first customers, and we hope you will join us.</h2>
		<h2 class="text-2xl">Cheers, Aaron & John</h2>
	</div>
</section>
<!-- Scroll to top -->
<section class="px-6 py-[72px] md:py-[96px] flex items-center justify-center w-full">
	<a
		class="text-bold flex items-center gap-2"
		href="/"
		on:click={() => animateScroll.scrollToTop()}
	>
		Scroll to top {@html ArrowUpIcon}</a
	>
</section>
