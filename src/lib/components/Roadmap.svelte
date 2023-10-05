<script lang="ts">
	type Status = 'todo' | 'started'

	const roadMap: { title: string; description: string; status: Status }[] = [
		{
			title: 'Metadata',
			description: 'Add feature to tag transactions to provide accounting insights.',
			status: 'started'
		},
		{
			title: 'LND Support',
			description: 'Enhance wallet feature by including LND as a connection option.',
			status: 'started'
		},
		{
			title: 'Charts',
			description: 'Interactive charts feature to provide accounting insights',
			status: 'todo'
		},
		{
			title: 'Trades',
			description:
				'Integration with exchanges to track buys and sells to inform accountancy algorithims.',
			status: 'todo'
		},
		{
			title: 'xPUB Wallet Support',
			description: 'This is the metadata description',
			status: 'todo'
		},
		{
			title: 'Historical Pricing Server',
			description: 'Server infra to help with cost-basic calculations.',
			status: 'todo'
		},
		{
			title: 'Cap Gains Algorithims',
			description:
				'Cost-basis, profit and loss etc. Will cover all activity across all connected wallets.',
			status: 'todo'
		}
	]
</script>

<div class="grid md:grid-cols-2 gap-5">
	<div class="flex flex-col gap-3">
		<h2 class="font-bold">TODO</h2>
		{#each roadMap as { title, description, status }}
			{#if status === 'todo'}
				<div class="w-full">
					<p class="font-bold">{title}</p>
					<p>{description}</p>
				</div>
			{/if}
		{/each}
	</div>
	<div class="flex flex-col gap-3">
		<h2 class="font-bold">STARTED</h2>
		{#each roadMap as { title, description, status }}
			{#if status === 'started'}
				<div class="w-full">
					<p class="font-bold">{title}</p>
					<p>{description}</p>
				</div>
			{/if}
		{/each}
	</div>
</div>
