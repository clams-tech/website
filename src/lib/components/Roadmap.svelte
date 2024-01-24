<script lang="ts">
	type Status = 'planned' | 'inProgress'

	const roadMap: { title: string; description: string; status: Status }[] = [
		// In Progress
		{
			title: 'Transaction Tagging',
			description: 'Giver users option to tag transactions for enhanced accounting insights.',
			status: 'inProgress'
		},
		{
			title: 'Historical Pricing Server',
			description:
				'Implement a dedicated server infrastructure for precise cost-basis calculations.',
			status: 'inProgress'
		},
		// Planned
		{
			title: 'Capital Gains Algorithms',
			description:
				'Comprehensive algorithms for calculating cost basis, profit, and loss across all connected wallets.',
			status: 'planned'
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
		}
	]
</script>

<section id="roadmap" class="px-6 py-[72px] md:py-[96px] flex flex-col items-center w-full gap-10">
	<div class="max-w-4xl flex flex-col gap-10">
		<div class="flex flex-col w-full gap-2">
			<h1 class="text-[40px] font-bold">
				<span class="text-light-orange">Roadmap</span>
			</h1>
			<p class="text-[20px] text-left">
				Here are some of the features either in planning or actively being developed. Our priorities
				may adjust to accommodate user requests.
			</p>
		</div>
		<div class="flex flex-col gap-4">
			<h2 class="font-[20px] font-bold text-light-purple dark:text-dark-purple">IN PROGRESS</h2>
			<div class="grid md:grid-cols-2 gap-4">
				{#each roadMap as { title, description, status }}
					{#if status === 'inProgress'}
						<div class="w-full p-5 bg-[#F4F6F8] dark:bg-[#1e1e1e] rounded-sm">
							<p class="font-bold text-[18px]">{title}</p>
							<p class="">{description}</p>
						</div>
					{/if}
				{/each}
			</div>
			<h2 class="font-[20px] mt-4 font-bold text-light-purple dark:text-dark-purple">PLANNED</h2>
			<div class="grid md:grid-cols-2 gap-4">
				{#each roadMap as { title, description, status }}
					{#if status === 'planned'}
						<div class="w-full p-5 bg-[#F4F6F8] dark:bg-[#1e1e1e] rounded-sm">
							<p class="font-bold text-[18px]">{title}</p>
							<p>{description}</p>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>
