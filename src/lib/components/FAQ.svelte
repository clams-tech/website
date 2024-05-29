<script lang="ts">
	import { DISCORD_URL } from '$lib/constants'
	import ContentContainer from './shared/ContentContainer.svelte'

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
			q: "What if I don't know the cost basis of my Bitcoin?",
			a: "If you have records of your Bitcoin transactions from when you first purchased, Clams can calculate your cost basis. However, if determining the exact cost basis isn't feasible, you might need to estimate it based on available information. To ensure compliance with tax regulations or if you're uncertain about the process, consulting a tax professional for assistance is advisable."
		},
		{
			q: 'How are transaction fees treated?',
			a: 'Transaction fees can be treated as expenses, similar to trading fees or bank fees, depending on your situation.',
			selected: false
		},
		{
			q: 'How is Bitcoin that I send between my wallets treated?',
			a: 'Transfers are not considered taxable events. It is good practice to label transfers so you remember come tax season.',
			selected: false
		},
		{
			q: 'Are some transactions tax free?',
			a: 'Yes. Transfers between wallets you control are one example. Gifts, up to a certain limit (16K in USA at time of writing). Some charitable donations can also reduce your tax burden. Consider <a class="underline" target="_blank" rel="noopener noreferrer" href="https://opensats.org/">Opensats</a>.',
			selected: false
		},
		{
			q: 'What personal information do I need to provide to use Clams?',
			a: "None. No sign up is required. We don't ask for or obtain personally identifiable information.",
			selected: false
		},
		{
			q: "Can I still use Clams if I don't see my wallet on the integration list?",
			a: 'Yes. All wallet types will be supported via the custom import tool (coming soon). We extend the integration list via user requests.',
			selected: false
		},
		{
			q: 'Where is my data stored?',
			a: 'Your data never leaves your device unless you want it to. ',
			selected: false
		}
	]

	function toggleFaq(index: number) {
		faqs[index].selected = !faqs[index].selected
	}
</script>

<ContentContainer title="Frequently asked questions" scrollTo="faq">
	<div class="mx-auto divide-y divide-gray-900/10 dark:divide-gray-100/10">
		<div class="mx-auto text-center">
			<p class="text-base leading-7 text-gray-600 dark:text-gray-300">
				Can’t find the answer you’re looking for? Reach out to us on <a
					href={DISCORD_URL}
					target="_blank"
					rel="noopener noreferrer"
					class="underline font-semibold text-light-purple dark:text-dark-purple hover:text-indigo-500"
					>discord</a
				>.
			</p>
		</div>
		<dl class="mt-8 md:mt-12 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-100/10">
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
								{@html a}
							</p>
						</dd>
					{/if}
				</div>
			{/each}
		</dl>
	</div>
</ContentContainer>
