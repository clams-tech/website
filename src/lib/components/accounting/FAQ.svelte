<script>
	import { DISCORD_URL } from '$lib/constants'

	const faqs = [
		{
			q: 'How is Bitcoin taxed?',
			a: 'Jurisdictions may differ, but in general - any gain or loss from the sale or exchange of Bitcoin is treated as a capital gain or loss.',
			selected: true
		},
		{
			q: 'I got paid in Bitcoin. How do I report this?',
			a: 'By calculating the cost basis of the Bitcoin you received at time of payment, then reporting this as income.',
			selected: false
		},
		{
			q: 'How are transaction fees treated?',
			a: 'Technically, those are considered a spend. So cap gains or losses must be calculated and reported.',
			selected: false
		},
		{
			q: 'How is Bitcoin that I send between my wallets treated?',
			a: 'Transfers are not considered taxable events. It is good practice to label transfers so you remember come tax season.',
			selected: false
		},
		{
			q: 'Any other transactions tax free?',
			a: 'Yes. Gifts, up to a certain limit (16K in USA at time of writing). Some charitable donations can also reduce your tax burden. Consider Opensats.',
			selected: false
		},
		{
			q: 'What personal information do I need to provide to use Clams?',
			a: "None. No sign up is required. We don't ask for or obtain personally identifiable information.",
			selected: false
		},
		{
			q: "Can I still use Clams if I don't see my wallet on the integration list?",
			a: 'Yes. All wallet types are supported via the custom import tool. We extend the integration list via user requests.',
			selected: false
		},
		{
			q: 'Where is my data stored?',
			a: 'Your data never leaves your device unless you want it to. ',
			selected: false
		}
	]

	function toggleFaq(index) {
		faqs[index].selected = !faqs[index].selected
	}
</script>

<div class="bg-white dark:bg-gray-900">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
		<div class="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-100/10">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
					Frequently asked questions
				</h2>
				<p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
					Can’t find the answer you’re looking for? Reach out to us on <a
						href={DISCORD_URL}
						target="_blank"
						rel="noopener noreferrer"
						class="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
						>discord</a
					>.
				</p>
			</div>
			<dl class="mt-16 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-100/10">
				{#each faqs as { q, a, selected }, i}
					<div class="pt-6">
						<dt on:click={() => toggleFaq(i)}>
							<button
								type="button"
								class="flex w-full items-start justify-between text-left text-gray-900 dark:text-white"
								aria-controls="faq-0"
								aria-expanded="false"
							>
								<span class="text-base font-semibold leading-7">{q}</span>
								<span class="ml-6 flex h-7 items-center">
									{#if selected}
										<!-- Minus icon -->
										<svg
											class="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
										</svg>
									{:else}
										<!-- Plus icon -->
										<svg
											class="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
										</svg>
									{/if}
								</span>
							</button>
						</dt>
						{#if selected}
							<dd class="mt-2 pr-12" id="faq-0">
								<p class="text-base leading-7 text-gray-600 dark:text-gray-300">
									{a}
								</p>
							</dd>
						{/if}
					</div>
				{/each}
			</dl>
		</div>
	</div>
</div>
