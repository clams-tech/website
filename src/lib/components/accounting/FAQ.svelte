<script>
	import { DISCORD_URL } from '$lib/constants'

	const faqs = [
		{
			q: 'How is Bitcoin taxed?',
			a: 'Jurisdictions may differ, but in general - any gain or loss from the sale or exchange of Bitcoin is treated as a capital gain or loss.'
		},
		{
			q: 'I got paid in Bitcoin. How do I report this?',
			a: 'By calculating the cost basis of the Bitcoin you received at time of payment, then reporting this as income.'
		},
		{
			q: 'How are transaction fees treated?',
			a: 'Technically, those are considered a spend. So cap gains or losses must be calculated and reported.'
		},
		{
			q: 'How is Bitcoin that I send between my wallets treated?',
			a: 'Transfers are not considered taxable events. It is good practice to label transfers so you remember come tax season.'
		},
		{
			q: 'Any other transactions tax free?',
			a: 'Yes. Gifts, up to a certain limit (16K in USA at time of writing). Some charitable donations can also reduce your tax burden. Consider Opensats.'
		},
		{
			q: 'What personal information do I need to provide to use Clams?',
			a: "None. No sign up is required. We don't ask for or obtain personally identifiable information."
		},
		{
			q: "Can I still use Clams if I don't see my wallet on the integration list?",
			a: 'Yes. All wallet types are supported via the custom import tool. We extend the integration list via user requests.'
		},
		{
			q: 'Where is my data stored?',
			a: 'Your data never leaves your device unless you want it to. '
		}
		// {
		// 	q: 'How do you justify charging?',
		// 	a: 'We spend considerable time creating & maintaining accounting algorithims that provide detailed reports. How much is your time worth?'
		// }
	]
</script>

<div class="bg-white dark:bg-gray-900">
	<div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
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
		<div class="mt-20">
			<dl
				class="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10"
			>
				{#each faqs as { q, a }}
					<div>
						<dt class="text-base font-semibold leading-7 text-gray-900 dark:text-white">
							{q}
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
							{a}
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</div>
