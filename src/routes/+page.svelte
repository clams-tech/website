<script lang="ts">
	import ClamsLogo from '$lib/icons/ClamsLogo.svelte'
	import Button from '$lib/elements/Button.svelte'
	import Links from '$lib/components/Links.svelte'
	import lightning from '$lib/images/lightning.png'
	import key from '$lib/images/key.png'
	import accountancy from '$lib/images/accountancy.png'
	import channels from '$lib/images/channels.png'
	import tags from '$lib/images/tags.png'
	import contacts from '$lib/images/contacts.png'
	import backup from '$lib/images/backup.png'
	import { t } from '$lib/i18n/translations'
	import { Parallax, ParallaxLayer, StickyLayer } from 'svelte-parallax'

	let activeFeatureIndex = 0

	let features = [
		{
			title: 'Conections',
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
			imgSrc: channels,
			active: false
		},
		{
			title: 'UTXOs',
			description: 'Monitor and manage your UTXOs via a customizable and interactive dashboard.',
			learnHref: '/utxos',
			imgSrc: channels,
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
			title: 'LNURL',
			description:
				'Full range of LNURL pay and withdraw options. Login to Bitcoin applications via LNURL Auth.',
			learnHref: '/lnurl',
			imgSrc: lightning,
			active: false
		},
		{
			title: 'Accounting',
			description:
				'One-click exports of income event documents for tax services like Koinly and Quickbooks.',
			learnHref: '/accounting',
			imgSrc: accountancy,
			active: false
		},
		{
			title: 'Charts',
			description:
				'Interactive charts to visualize data over time. Everything from node uptime to income events.',
			learnHref: '/charts',
			imgSrc: accountancy,
			active: false
		},
		{
			title: 'Metadata',
			description:
				'Transactions are tagged with intelligent defaults. Further enhance your dataset with custom tags.',
			learnHref: '/metadata',
			imgSrc: tags,
			active: false
		}
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
			title: 'App Store Independence',
			description: 'Rapid iteration and instant releases via any browser of your choice.'
		},
		{
			title: 'Clean and Intuitive UX',
			description:
				'Thoughtful design makes the app accessible to Bitcoin novices and experts alike.'
		},
		{
			title: 'Privacy-Focused Approach',
			description:
				'Privacy is a priority, with no logging, tracking, or Google scripts utilized within the app.'
		},
		{
			title: 'Device-Specific Functionality',
			description:
				'A mobile app optimized for payments and a desktop app with more advanced features.'
		},
		{
			title: 'Internationalization Support',
			description:
				'Multiple languages supported with plans for many more to cater to a global user base.'
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

<Links />
<!-- Hero -->
<section
	class="flex items-center justify-center w-full h-screen bg-[url('$lib/images/background6.png')] bg-cover"
>
	<div class="flex justify-between w-full max-w-4xl bg-black/[.8] p-10 rounded-lg gap-10">
		<div class="flex flex-col w-full gap-10">
			<h1 class="text-6xl">Unify Your Bitcoin.</h1>
			<h2 class="text-4xl">{$t('app.hero.tagline')}</h2>
			<ul class="text-2xl list-disc list-inside">
				<li>Bitcoin only.</li>
				<li>No Tracking or Logging.</li>
				<li>Localized Data Storage.</li>
			</ul>
			<div class="flex">
				<a class="mr-4" href="https://app.clams.tech" target="_blank" rel="noopener noreferrer">
					<Button text="Start now" primary />
				</a>
				<a href="https://docs.clams.tech" target="_blank" rel="noopener noreferrer">
					<Button text="Learn more" />
				</a>
			</div>
		</div>
		<div class="w-full max-w-sm hidden md:block">
			<ClamsLogo />
		</div>
	</div>
</section>
<!-- Features -->
<section class="flex items-center justify-center w-full h-screen border">
	<div class="flex flex-col justify-between w-full max-w-4xl p-10 rounded-lg gap-10">
		<h1 class="text-6xl">Features</h1>
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
				{#each features as { description, learnHref, active }, i}
					{#if active}
						<div class="flex flex-col gap-4 min-w-[300px] w-full">
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
<section class="flex flex-col items-center justify-center w-full h-screen border">
	<div class="flex flex-col justify-between w-full max-w-4xl p-10 rounded-lg gap-10">
		<h1 class="text-6xl">Benefits</h1>
		<div class="flex gap-10 flex-wrap">
			{#each whys as { title, description }}
				<div class="grid gap-5 p-5 border rounded-lg max-w-sm">
					<h2 class="text-2xl">
						{title}
					</h2>
					<p class="">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Connect -->
<section class="flex flex-col items-center justify-center w-full h-screen border">
	<div class="flex flex-col justify-between w-full max-w-4xl p-10 rounded-lg gap-10">
		<h1 class="text-6xl">Get started</h1>
		<p class="text-2xl">
			Unleash the full potential of your Bitcoin holdings with Clams. Connect your wallets, embrace
			the power of Lightning Network transactions, and simplify your Bitcoin management journey.
			Experience the convenience of a single app that empowers you to take control of your financial
			future. Get started with Clams today and discover a new era of Bitcoin management.
		</p>
		<p class="text-2xl">
			Got ideas on how to improve Clams? Want to contribute? Join us in our Discord server.
		</p>
	</div>
</section>
