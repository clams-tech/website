<script>
	import { DISCORD_URL } from '$lib/constants'

	const faqs = [
		{
			q: 'Why does the app ask for jurisdiction?',
			a: 'Under the hood, each jurisdiction is tied to a fiat currency and an algorithim - both of which are used for calculations.'
		},
		{
			q: 'When will you support my jurisdiction?',
			a: 'We are always working to add more. Join our discord server if you want to propose yours for inclusion.'
		},
		{
			q: "Can I still use this service if I don't see my wallet on the integration list?",
			a: 'Yes. All wallet types are supported via the custom import tool. We extend the integration list via user requests.'
		},
		{
			q: 'Why Bitcoin only?',
			a: 'We believe Bitcoin is the best money and as such want to provide the best possible service for the Bitcoin community.'
		},
		{
			q: 'What personal information do I need to provide to use this service?',
			a: 'None. No sign up required. We do not track users. All user data remains on their device.'
		}
	]
</script>

<div class="bg-white">
	<div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
				Frequently asked questions
			</h2>
			<p class="mt-6 text-base leading-7 text-gray-600">
				Can’t find the answer you’re looking for? Reach out to us on <a
					href={DISCORD_URL}
					target="_blank"
					rel="noopener noreferrer"
					class="font-semibold text-indigo-600 hover:text-indigo-500">discord</a
				>.
			</p>
		</div>
		<div class="mt-20">
			<dl
				class="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10"
			>
				{#each faqs as { q, a }}
					<div>
						<dt class="text-base font-semibold leading-7 text-gray-900">
							{q}
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600">
							{a}
						</dd>
					</div>
				{/each}

				<!-- More questions... -->
			</dl>
		</div>
	</div>
</div>
