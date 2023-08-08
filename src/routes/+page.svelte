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

	const features = [
		{
			title: 'Conections',
			description:
				'Establish multiple connections to Xpubs and Lightning nodes to synchronize data and manage funds.',
			learnHref: '/connections',
			imgSrc: lightning
		},
		{
			title: 'UTXOs',
			description:
				'Monitor and manage all of your UTXOs via a customizable and interactive dashboard.',
			learnHref: '/utxos',
			imgSrc: channels
		},
		{
			title: 'Channels',
			description:
				'Visualize and monitor the status and balance of channels on your Lightning channels.',
			learnHref: '/channels',
			imgSrc: channels
		},
		{
			title: 'Charts',
			description:
				'Interactive charts to visualize data over time. Everything from node uptime to income events.',
			learnHref: '/charts',
			imgSrc: accountancy
		},
		{
			title: 'Tags',
			description:
				'Automatic data tagging with intelligent defaults. Enhance your data with custom tags to enable more comprehensive data analysis and insights.',
			learnHref: '/tags',
			imgSrc: tags
		},
		{
			title: 'Offers',
			description:
				'Utilize BOLT12 for generating reusable static invoices for payments and withdrawals.',
			learnHref: '/offers',
			imgSrc: key
		},
		{
			title: 'LNURL',
			description:
				'Full range of LNURL pay and withdraw options. Seamless login to Bitcoin applications with LNURL Auth.',
			learnHref: '/lnurl',
			imgSrc: lightning
		},
		{
			title: 'Exports',
			description:
				'Export data with a single click for upload to tax services such as Koinly and Quickbooks.',
			learnHref: '/exports',
			imgSrc: accountancy
		},
		{
			title: 'Contacts',
			description:
				'Address book for effortless management and execution of recurring transactions with friends, customers, or merchants.',
			learnHref: '/contacts',
			imgSrc: contacts
		},
		{
			title: 'Backups',
			description:
				'Export password-encrypted data to device. Simple synchronization to multiple devices.',
			learnHref: '/backups',
			imgSrc: backup
		}
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

	let scroll = 0
</script>

<!-- @TODO - parallax https://www.youtube.com/watch?v=K3CM7j9GIxk -->
<svelte:window bind:scrollY={scroll} />

<svelte:head>
	<title>Clams</title>
</svelte:head>

<!-- <h1 class="fixed">{scroll}</h1> -->
<Links />
<!-- Hero -->
<section
	class="flex items-center justify-center w-full h-screen bg-[url('$lib/images/background6.png')] bg-cover"
>
	<div class="flex justify-between w-full max-w-4xl bg-black/[.8] p-10 rounded-lg gap-10">
		<div class="flex flex-col w-full gap-10">
			<h1 class="text-8xl">Unified Bitcoin.</h1>
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
{#each features as { title, description, learnHref, imgSrc }, i}
	<section class="flex items-center justify-center w-full h-screen border">
		<div class="flex justify-between w-full max-w-4xl p-10 rounded-lg">
			<div class="flex flex-col w-full max-w-md">
				<div class="flex flex-col gap-10 items-start max-w-md">
					<a href={learnHref}>
						<h1 class="text-8xl">{title}</h1>
					</a>
					<h2 class="text-2xl">{description}</h2>
					<a href={learnHref}>
						<Button text="Learn more" />
					</a>
				</div>
			</div>
			<div class="w-full max-w-sm hidden md:block">
				<img src={imgSrc} alt={`${title}`} />
			</div>
		</div>
	</section>
{/each}

<!-- Why? -->
<section class="flex flex-col items-center justify-center w-full h-screen border">
	<div class="flex flex-col justify-between w-full max-w-4xl p-10 rounded-lg gap-10">
		<h1 class="text-6xl">Why use Clams?</h1>
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
