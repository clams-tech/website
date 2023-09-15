<script lang="ts">
	import ClamsLogo from '$lib/icons/ClamsLogo.svelte'
	import Button from '$lib/elements/Button.svelte'
	import lightning from '$lib/images/lightning.png'
	import key from '$lib/images/key.png'
	import accountancy from '$lib/images/accountancy.png'
	import channels from '$lib/images/channels.png'
	import tags from '$lib/images/tags.png'
	import contacts from '$lib/images/contacts.png'
	import book from '$lib/images/book.png'
	import lock from '$lib/images/lock.png'
	import chart from '$lib/images/chart.png'
	import lightning2 from '$lib/images/lightning2.png'
	import backup from '$lib/images/backup.png'
	import { t } from '$lib/i18n/translations'
	import { Parallax, ParallaxLayer, StickyLayer } from 'svelte-parallax'
	import FAQ from '$lib/components/FAQ.svelte'
	import * as animateScroll from 'svelte-scrollto'

	let activeFeatureIndex = 0

	let features = [
		{
			title: 'Wallets',
			description:
				'Establish connections to multiple Lightning nodes to synchronize data and manage funds.',
			learnHref: '/connections',
			imgSrc: lightning,
			active: true
		},
		{
			title: 'Transactions',
			description: 'View a full history of updates to your unified on-chain and off-chain balance.',
			learnHref: '/transactions',
			imgSrc: contacts,
			active: false
		},
		{
			title: 'UTXOs',
			description: 'Monitor and manage your UTXOs via a customizable and interactive dashboard.',
			learnHref: '/utxos',
			imgSrc: key,
			active: false
		},
		{
			title: 'Channels',
			description:
				'Monitor the status and liquidity profile of your lightning channels. Update fee settings to your needs.',
			learnHref: '/channels',
			imgSrc: channels,
			active: false
		},
		{
			title: 'Offers',
			description:
				'Create and manage BOLT12 reusable static invoices for payments and withdrawals.',
			learnHref: '/offers',
			imgSrc: key,
			active: false
		},
		{
			title: 'Forwards',
			description:
				'Examine all of the income you have generated over time forwarding sats through your lightning nodes.',
			learnHref: '/forwards',
			imgSrc: key,
			active: false
		},
		{
			title: 'Metadata',
			description:
				'Transactions are tagged with intelligent defaults. Further enhance your local dataset with custom tags.',
			learnHref: '/metadata',
			imgSrc: tags,
			active: false
		}
		// {
		// 	title: 'LNURL',
		// 	description:
		// 		'Full range of LNURL pay and withdraw options. Login to Bitcoin applications via LNURL Auth.',
		// 	learnHref: '/lnurl',
		// 	imgSrc: lightning,
		// 	active: false
		// },
		// {
		// 	title: 'Accounting',
		// 	description:
		// 		'One-click exports of income event documents for tax services like Koinly and Quickbooks.',
		// 	learnHref: '/accounting',
		// 	imgSrc: accountancy,
		// 	active: false
		// },
		// {
		// 	title: 'Charts',
		// 	description:
		// 		'Interactive charts to visualize data over time. Everything from node uptime to income events.',
		// 	learnHref: '/charts',
		// 	imgSrc: accountancy,
		// 	active: false
		// },
		// {
		// 	title: 'Exports',
		// 	description:
		// 		'Export data with a single click for upload to tax services such as Koinly and Quickbooks.',
		// 	learnHref: '/exports',
		// 	imgSrc: accountancy,
		// 	active: false
		// }
		// {
		// 	title: 'Contacts',
		// 	description:
		// 		'Address book for effortless management and execution of recurring transactions with friends, customers, or merchants.',
		// 	learnHref: '/contacts',
		// 	imgSrc: contacts,
		// 	active: false
		// },
		// {
		// 	title: 'Backups',
		// 	description:
		// 		'Export password-encrypted data to device. Simple synchronization to multiple devices.',
		// 	learnHref: '/backups',
		// 	imgSrc: backup,
		// 	active: false
		// }
	]

	const whys = [
		{
			title: 'Reliable and Secure',
			description: 'Enjoy a futuristic payment experience and keep full control of your sats.'
		},
		{
			title: 'Bitcoin Only',
			description:
				'Built by Bitcoiners that are focused on improving the user-experience of Bitcoin.'
		},
		{
			title: 'Privacy-Focused Approach',
			description:
				'Privacy is a priority, with no logging, tracking, or Google scripts utilized within the app.'
		},
		{
			title: 'Localized Data Storage',
			description:
				'All data is stored locally on your device and never leaves unless you want it to.'
		},
		{
			title: 'Non-custodial',
			description:
				'keep control of your keys. App permissions range from read-only to admin access.'
		},
		{
			title: 'Fully Open-Source Software',
			description:
				'All client-side application code is public. Anyone can verify and we welcome feedback.'
		}
	]

	const faqs = [
		{
			q: 'Where is my Bitcoin data stored?',
			a: 'All data is stored locally on your device and encrypted with a password of your choice.'
		},
		{
			q: 'Can I back up my data?',
			a: "Yes, you can. Navigate to the app's settings section to download your data."
		},
		{
			q: 'How do app permissions work?',
			a: 'When you make a connection, you will be prompted to grant permissions to the app for that specific connection. The app requires read-only access at a minimum to calculate your sats flow. You can update or revoke permissions at any time.'
		},
		{
			q: 'Which lightning implementations do you support?',
			a: 'Currently, we support LND and CLN.'
		},
		{
			q: 'Can I connect my own Electrum Server?',
			a: 'Not at the moment, but we plan to offer this as an option in the future. For now, there are multiple public Electrum Servers available, and users can choose which one they want to use.'
		},
		{
			q: 'Can I sync my data across multiple devices?',
			a: 'This feature is on our roadmap and will be prioritized when there is sufficient demand for it.'
		},
		{
			q: 'How do you decide which wallet connections to support?',
			a: "We started with the connections that we needed. If you don't see an option you want, please join our Discord server and let us know."
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
<section class=" flex items-center justify-center w-full h-screen">
	<div class="flex justify-center w-full max-w-xl">
		<div class="flex flex-col items-center w-full gap-10 text-center">
			<h1 class="text-6xl font-bold">One Platform to Unify Your Bitcoin.</h1>
			<!-- <h2 class="text-4xl">{$t('app.hero.tagline')}</h2> -->
			<h2 class="text-4xl text-purple-500">
				Financial Management and Reporting Across All Your Wallets.
			</h2>
			<div class="flex">
				<a class="mr-4" href="https://app.clams.tech" target="_blank" rel="noopener noreferrer">
					<Button text="Start now" primary />
				</a>
				<a href="https://docs.clams.tech" target="_blank" rel="noopener noreferrer">
					<Button text="Learn more" />
				</a>
			</div>
		</div>
	</div>
</section>
<!-- What -->
<section class="flex items-center justify-center w-full">
	<div class="flex flex-col justify-between w-full max-w-4xl gap-10">
		<h1 class="text-4xl text-purple-500">Background</h1>
		<h2 class="text-2xl">
			Managing your finances can be a complex task when your Bitcoin is spread across cold storage,
			lightning nodes, exchanges, mobile apps and more.
		</h2>
		<h2 class="text-2xl">
			Clams simplifies this process by consolidating all your wallets in one place, allowing you to
			visualize your sats flow and streamline reporting with a single click.
		</h2>
		<h2 class="text-2xl">
			Our mission is to make it effortless for anyone to access and leverage critical financial and
			transaction data, empowering them to embrace the Bitcoin Standard.
		</h2>
	</div>
</section>
<!-- Features -->
<section class="mt-16 md:mt-28 flex items-center justify-center w-full">
	<div class="flex flex-col justify-between w-full max-w-4xl gap-10">
		<h1 class="text-4xl text-purple-500">Features</h1>
		<div class="flex gap-8 flex-wrap">
			<!-- Buttons -->
			<div class="flex-1 flex flex-wrap gap-4 min-w-[300px] w-full">
				{#each features as { title, active }, i}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-mouse-events-have-key-events -->
					<div
						class={`flex flex-col gap-4 border max-w-sm rounded-lg cursor-pointer p-2 ${
							active ? 'bg-white text-black' : ''
						}`}
						on:click={() => {
							activeFeatureIndex = i
						}}
					>
						<h1 class="text-2xl">{title}</h1>
					</div>
				{/each}
			</div>
			<!-- Active feature -->
			<div class="flex-1">
				{#each features as { title, description, learnHref, imgSrc, active }, i}
					{#if active}
						<div class="flex flex-col gap-4 min-w-[300px] w-full">
							<img src={imgSrc} alt={title} />
							<h2 class="text-2xl">{description}</h2>
							<a href={learnHref}>
								<Button text="Learn more" />
							</a>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>
<!-- Why -->
<section class="mt-16 md:mt-28 flex flex-col items-center justify-center w-full">
	<div class="flex flex-col justify-between w-full max-w-4xl gap-10">
		<h1 class="text-4xl text-purple-500">Why Choose Clams?</h1>
		<div class="flex gap-10 flex-wrap">
			{#each whys as { title, description }}
				<div class="grid gap-5 p-5 border rounded-lg max-w-sm bg-white">
					<h2 class="text-2xl">
						{title}
					</h2>
					<p class="">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- FAQ -->
<section class="mt-16 md:mt-28 flex flex-col items-center justify-center w-full">
	<div class="flex flex-col justify-between w-full max-w-4xl gap-10">
		<h1 class="text-4xl text-purple-500">FAQ</h1>
		<FAQ {faqs} />
	</div>
</section>
<!-- Get Started -->
<section class="mt-16 md:mt-28 pb-16 md:pb-20 flex flex-col items-center justify-center w-full">
	<div class="flex flex-col justify-between w-full max-w-4xl gap-10">
		<h1 class="text-4xl text-purple-500">Get started</h1>
		<p class="text-2xl">
			Unleash the full potential of your Bitcoin holdings with Clams. Experience the convenience of
			a single app that does it all and discover the new era of Bitcoin management.
		</p>
		<p class="text-2xl">
			Got ideas on how to improve Clams? Want to contribute? Join us in our Discord server.
		</p>
	</div>
</section>
<a on:click={() => animateScroll.scrollToTop()}> Scroll to top </a>
