<script>
	import ContentContainer from './shared/ContentContainer.svelte'

	const basic = [
		{
			category: 'Connections',
			features: ['Unlimited']
		},
		{
			category: 'Dashboard',
			features: ['Balance tracker', 'Cost basis']
		}
	]

	const pro = [
		{
			category: 'Connections',
			features: ['Unlimited']
		},
		{
			category: 'Dashboard',
			features: ['Balance tracker', 'Cost basis']
		},
		{
			category: 'Reports',
			features: ['Cap gains', 'Profit and loss']
		},
		{
			category: 'Operational',
			features: [
				'Secure data sharing',
				'Multi-user access',
				'Cross-device sync',
				'Encrypted data backups'
			]
		}
	]
</script>

<ContentContainer title="Pricing" scrollTo="pricing">
	<div class="mx-auto max-w-5xl flex gap-4 justify-between flex-wrap">
		<section class="p-8 w-full md:flex-1">
			<h3 id="tier-basic" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
				Basic
			</h3>
			<p class="mt-2 flex items-baseline gap-x-1 text-gray-900 dark:text-white">
				<span class="text-4xl font-bold">FREE</span>
				<span class="text-sm font-semibold">/forever</span>
			</p>
			<a
				href="/downloads"
				aria-describedby="tier-basic"
				class="mt-8 block rounded-md py-2 px-3 text-center text-md font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-light-purple dark:text-dark-purple ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
				>Get Started</a
			>
			<ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-900 dark:text-white">
				{#each basic as { category, features }}
					<li class="flex flex-col gap-2">
						<span class="font-bold">{category}</span>
						<ul
							role="list"
							class="ml-10d space-y-4 text-sm leading-6 text-gray-900 dark:text-white"
						>
							{#each features as feature}
								<li class="flex gap-x-3">
									<svg
										class="h-6 w-5 flex-none text-light-purple dark:text-dark-purple"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>{feature}</span>
								</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
		</section>
		<section class="p-8 w-full md:flex-1 rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200">
			<h3 id="tier-pro" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
				Pro
			</h3>
			<p class="mt-2 flex items-baseline gap-x-1 text-gray-900 dark:text-white">
				<span class="text-4xl font-bold">$TBD</span>
				<span class="text-sm font-semibold">/month</span>
			</p>
			<a
				href="#"
				aria-describedby="tier-pro"
				class="pointer-events-none mt-8 block rounded-md py-2 px-3 text-center text-md font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600 text-white hover:bg-indigo-500"
				>Coming Soon...</a
			>
			<ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-900 dark:text-white">
				{#each pro as { category, features }}
					<li class="flex flex-col gap-2">
						<span class="font-bold">{category}</span>
						<ul
							role="list"
							class="ml-10d space-y-4 text-sm leading-6 text-gray-900 dark:text-white"
						>
							{#each features as feature}
								<li class="flex gap-x-3">
									<svg
										class="h-6 w-5 flex-none text-light-purple dark:text-dark-purple"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>{feature}</span>
								</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
		</section>
	</div>
</ContentContainer>
