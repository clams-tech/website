<script lang="ts">
	type Status = 'planned' | 'inProgress'

	const roadMap: { title: string; description: string; status: Status }[] = [
		{
			title: 'Transaction Tagging',
			description: 'Giver users option to tag transactions for enhanced accounting insights.',
			status: 'inProgress'
		},
		{
			title: 'LND Integration',
			description: 'Integrate LND lightning implementation support to improve accessibility.',
			status: 'inProgress'
		},
		{
			title: 'Interactive Charts',
			description:
				'Bring data to life with interactive charts that provide deep accounting insights.',
			status: 'planned'
		},
		{
			title: 'Exchange Integration',
			description: 'Connect with popular exchanges to automatically track buy and sell activities.',
			status: 'planned'
		},
		{
			title: 'xPUB Wallet Support',
			description: 'Expand wallet feature with extended public key (xPUB) connection support.',
			status: 'planned'
		},
		{
			title: 'Historical Pricing Server',
			description:
				'Implement a dedicated server infrastructure for precise cost-basis calculations.',
			status: 'planned'
		},
		{
			title: 'Capital Gains Algorithms',
			description:
				'Comprehensive algorithms for calculating cost basis, profit, and loss across all connected wallets.',
			status: 'planned'
		}
	]
</script>

<div class="grid md:grid-cols-2 gap-5">
	<div class="flex flex-col gap-3">
		<h2 class="font-bold">Planned</h2>
		{#each roadMap as { title, description, status }}
			{#if status === 'planned'}
				<div class="w-full">
					<p class="font-bold">{title}</p>
					<p>{description}</p>
				</div>
			{/if}
		{/each}
	</div>
	<div class="flex flex-col gap-3">
		<h2 class="font-bold">In Progress</h2>
		{#each roadMap as { title, description, status }}
			{#if status === 'inProgress'}
				<div class="w-full">
					<p class="font-bold">{title}</p>
					<p>{description}</p>
				</div>
			{/if}
		{/each}
	</div>
</div>
