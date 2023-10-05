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
	import ArrowUpIcon from '$lib/icons/arrow-up'
	import { darkMode } from '$lib/stores'
	import Roadmap from '$lib/components/Roadmap.svelte'

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
		},
		{
			title: 'Flexible Access',
			description:
				"A native desktop app for your home devices and a browser-based app for when you're on the move."
		}
	]

	const faqs = [
		{
			q: 'How do app permissions work?',
			a: 'When you make a wallet connection, the app will ask you to grant permissions. The app requires read-only access at a minimum to calculate your sats flow. You can update or revoke permissions at any time.'
		},
		{
			q: 'Where is my Bitcoin data stored?',
			a: 'All data is stored locally on your device and encrypted with a password of your choice.'
		},
		{
			q: 'Which lightning implementations do you support?',
			a: 'CLN for now, but we are investigating adding support for LND.'
		},
		{
			q: 'How do you decide which wallet connections to support?',
			a: "We started with CLN. If you don't see an option you want, please join our Discord server and let us know."
		}
	]
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
	id="features"
	class="px-6 py-[72px] md:py-[96px] flex items-center justify-center w-full bg-[#F4F6F8] dark:bg-[#1e1e1e]"
>
	<div class="flex flex-col justify-between w-full max-w-5xl gap-10">
		<h1 class="text-4xl text-center font-bold">
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
							<h3 class="md:text-2xl font-bold">{title}</h3>
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
<!-- Why -->
<section class="px-6 py-[72px] md:py-[96px] flex flex-col items-center justify-center w-full">
	<div class="flex flex-col items-center w-full gap-10">
		<h1 class="text-4xl text-center font-bold">
			<span class="text-light-orange">Why</span> Choose Clams?
		</h1>
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
	id="faq"
	class="px-6 py-[72px] md:py-[96px] flex flex-col items-center w-full bg-[#F4F6F8] dark:bg-[#1e1e1e]"
>
	<div class="flex flex-col justify-between w-full max-w-[850px] gap-10">
		<h1 class="text-4xl font-bold">
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
	<div class="flex flex-col gap-2 text-center">
		<h2 class="text-2xl">Want to contribute or have ideas on how to improve Clams?</h2>
		<p class="text-2xl">
			Join us in our <a class="text-light-purple dark:text-bitcoin font-bold underline" href="/"
				>Discord</a
			> server
		</p>
	</div>
</section>
<!-- Roadmap -->
<section
	id="roadmap"
	class="px-6 py-[72px] md:py-[96px] flex flex-col items-center justify-center w-full gap-10 bg-[#F4F6F8] dark:bg-[#1e1e1e]"
>
	<div class="max-w-4xl flex flex-col gap-10">
		<div class="flex flex-col w-full text-center gap-2">
			<h1 class="text-4xl font-bold">
				<span class="text-light-orange">Roadmap</span>
			</h1>
			<p class="text-2xl">
				Here are some of the features either in planning or actively being developed. Our priorities
				may adjust to accommodate user requests. You can follow progress more closely by monitoring
				our <a
					class="underline"
					href="https://github.com/orgs/clams-tech/projects/1"
					target="_blank"
					rel="noopener noreferrer">public task board on GitHub.</a
				>
			</p>
		</div>
		<Roadmap />
	</div>
</section>
<!-- Note -->
<section class="px-6 py-[72px] md:py-[96px] flex items-center justify-center w-full">
	<div class="flex flex-col justify-between w-full gap-5 max-w-4xl">
		<h1 class="text-4xl text-center font-bold">
			A <span class="text-light-orange">Note</span> from Us
		</h1>
		<h2 class="text-2xl">Hey!</h2>
		<h2 class="text-2xl">
			We're Aaron and John, a couple of musicians turned software engineers who took the orange
			pill, and like so many others, we couldn't think of anything else. Thanks to Bitcoin, we're
			not just excited about the future – we're on a mission to shape it.
		</h2>
		<h2 class="text-2xl">
			Inspired by the optimism and talent found in this community, we decided to use our skills to
			build Clams. Why stop at having the best money? We also need the best tools to help Bitcoiners
			manage their finances in a self-sovereign way.
		</h2>
		<h2 class="text-2xl">
			We are committed to keeping the app accessible to as many people as possible, which is why our
			core features will always be free. To ensure the long-term sustainability and continuous
			improvement of Clams, we're exploring options for paid add-on services. By choosing these
			premium offerings, you'll not only support the project but also unlock even more powerful
			tools to bring you closer to life on a Bitcoin Standard. More details on that soon.
		</h2>
		<h2 class="text-2xl">We are our first customers, and we hope you will join us.</h2>
		<h2 class="text-2xl">Cheers, Aaron & John</h2>
	</div>
</section>
<!-- Scroll to top -->
<section class="px-6 py-[72px] md:py-[96px] flex items-center justify-center w-full">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<span
		class="text-bold flex items-center gap-2 cursor-pointer"
		on:click={() => animateScroll.scrollToTop()}
	>
		Scroll to top {@html ArrowUpIcon}</span
	>
</section>
