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

	const features = [
		{
			title: 'Conections',
			description:
				'Establish multiple connections to Xpubs and Lightning nodes to synchronize data and manage funds.',
			learnHref: '/connections',
			imgSrc: lightning
		},
		{
			title: 'Charts',
			description:
				'Interactive charts to visualize data over time. Everything from node uptime to income events.',
			learnHref: '/charts',
			imgSrc: accountancy
		},
		{
			title: 'Offers',
			description: '@TODO - talk about current support',
			learnHref: '/offers',
			imgSrc: key
		},
		{
			title: 'LNURL',
			description: '@TODO - full LNURL, pay and withdraw supported.',
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
			title: 'Channels',
			description:
				'Visualize and monitor the status and balance of channels on your Lightning channels.',
			learnHref: '/channels',
			imgSrc: channels
		},
		{
			title: 'Tags',
			description:
				'Automatic data tagging with intelligent defaults. Enhance your data with custom tags to enable more comprehensive data analysis and insights.',
			learnHref: '/tags',
			imgSrc: tags
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
	<div class="flex justify-between w-full max-w-4xl bg-black/[.6] p-10 rounded-lg gap-10">
		<div class="flex flex-col max-w-md gap-10">
			<h1 class="text-8xl">Unified Bitcoin.</h1>
			<!-- TODO - add helvetica to subtitle copy -->
			<h2 class="text-4xl">Track and manage your Bitcoin in one place.</h2>
			<!-- @TODO - add summary of why would you use clams? privacy focused, local data, no logging, not tracking, all data stays on your device, bitcoin first, private, local -->
			<div class="flex">
				<a class="mr-4" href="https://app.clams.tech" target="_blank" rel="noopener noreferrer">
					<Button text="Start now" primary />
				</a>
				<!-- TODO - add helvetica to button copy -->
				<a href="https://docs.clams.tech" target="_blank" rel="noopener noreferrer">
					<Button text="Learn more" />
				</a>
			</div>
		</div>
		<div class="w-full max-w-sm invisible md:visible">
			<ClamsLogo />
		</div>
	</div>
</section>
<!-- Features -->
{#each features as { title, description, learnHref, imgSrc }, i}
	<section class="flex items-center justify-center w-full h-screen">
		<div class="flex justify-between w-full max-w-4xl bg-white/[.2] p-10 rounded-lg gap-10">
			<div class="flex flex-col max-w-md gap-10">
				<div class="flex flex-col items-start max-w-md gap-10">
					<a href={learnHref}>
						<h1 class="text-8xl">{title}</h1>
					</a>
					<h2 class="text-2xl">{description}</h2>
					<a href={learnHref}>
						<Button text="Learn more" />
					</a>
				</div>
			</div>
			<div class="w-full max-w-sm invisible md:visible">
				<img src={imgSrc} alt={`${title}`} />
			</div>
		</div>
	</section>
{/each}

<!-- Why? -->
<!-- <section class="w-full max-w-4xl">
	<h1>Why use Clams?</h1>
</section> -->
