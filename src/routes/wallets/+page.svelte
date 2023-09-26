<script lang="ts">
	import CheckIcon from '$lib/icons/check'

	const overviews = [
		'Once a connection is established, data synchronization begins.',
		'Power users that manage multiple nodes can connect them all, allowing them to seamlessly sync data from different sources.',
		'For example, you might have one node for personal matters and another for business transactions. With Clams, you can gain insights and control over both once both nodes are connected.',
		'Node operators always maintain full control through customizable permissions, ranging from read-only to full administrative control. Access to nodes is available for as long as needed, secured by a strong password of your choice.'
	]

	const features = [
		{
			title: 'CLN support',
			description: 'Establish connections using commando.'
		},
		{
			title: 'Payments',
			description:
				'BOLT11 Invoices, KeySend, LNURL, Lightning Address (pay only) and BOLT12 offers.'
		},
		{
			title: 'Monitoring',
			description: 'Real-time updates for connection status.'
		},
		{
			title: 'Easy Connections',
			description: 'Disconnect and reconnect to nodes at anytime.'
		},
		{
			title: 'Logs',
			description: 'Node logs for monitoring and troubleshooting.'
		},
		{
			title: 'Error Tracking',
			description: 'Clean, precise error messaging for prompt issue resolution.'
		}
	]

	const comingSoon = [
		{
			title: 'LND support'
		},
		{
			title: 'XPub Connection'
		},
		{
			title: 'Advanced Notications'
		}
	]
</script>

<section class="flex flex-col items-center px-6 pt-28 pb-20">
	<div class="w-full max-w-4xl">
		<!-- Header -->
		<div class="text-center max-w-[630px] m-auto">
			<h1 class="text-6xl font-bold">Wallets</h1>
			<h2 class="text-2xl mt-2">
				The Wallets feature acts as a central hub for managing connections to your nodes.
			</h2>
		</div>
		<!-- Overview -->
		<div class="mt-8 grid gap-3">
			<h2 class="text-2xl font-bold text-light-purple ">OVERVIEW</h2>
			{#each overviews as overview}
				<p>{overview}</p>
			{/each}
		</div>
		<!-- TODO - add all the logos for supported implementations -->
		<!-- Features -->
		<div class="mt-8 grid gap-3">
			<h2 class="text-2xl font-bold text-light-purple ">FEATURES</h2>
			<div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
				{#each features as { title, description }}
					<div class="flex">
						<div class="w-8">
							{@html CheckIcon}
						</div>
						<div class="flex flex-col gap-1 ">
							<div class="flex items-center">
								<h3 class="font-bold">{title}</h3>
							</div>
							<p>{description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<!-- Coming Soon -->
		<div class="mt-8 grid gap-3">
			<h2 class="text-2xl font-bold text-light-purple ">COMING SOON!</h2>
			<div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
				{#each comingSoon as { title }}
					<div class="flex">
						<div class="w-8">
							{@html CheckIcon}
						</div>
						<div class="flex flex-col gap-1 md:max-w-[280px]">
							<div class="flex items-center">
								<h3 class="font-bold">{title}</h3>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
