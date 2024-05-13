<script lang="ts">
	import PersonaOne from '$lib/images/persona-1.jpg'
	import PersonaTwo from '$lib/images/persona-2.png'
	import PersonaThree from '$lib/images/persona-3.jpg'
	import ContentContainer from './shared/ContentContainer.svelte'

	const users = [
		{
			quote: '“Damn I sold a lot of raw milk for sats this year. How do taxes work for Bitcoin?”',
			img: PersonaOne,
			name: 'Mary',
			title: 'Based Farms'
		},
		{
			quote: '“All that stacking, zapping and boosting. How do I explain this to my accountant?”',
			img: PersonaTwo,
			name: 'Anon',
			title: 'Memelord'
		},
		{
			quote: '“Some of my clients are now getting paid in Bitcoin! What is a UTXO?!”',
			img: PersonaThree,
			name: 'Mike',
			title: 'Accountant'
		}
	]
</script>

<ContentContainer title="We've heard you Bitcoiners">
	<div class="m-auto flow-root mt-8 md:mt-12 lg:mx-0">
		<div class="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
			{#each users as { quote, img, name, title }}
				<div class="sm:inline-block sm:w-full">
					<figure
						class="flex flex-col justify-between rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 text-sm leading-6 h-full"
					>
						<blockquote class="text-lg leading-8 text-gray-900 dark:text-white">
							<p>
								{quote}
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img class="h-16 w-16 rounded-full bg-gray-50 dark:bg-gray-800" src={img} alt="" />
							<div>
								<div class="font-semibold text-gray-900 dark:text-white">
									{name}
								</div>
								<div class="text-gray-600 dark:text-gray-300">{title}</div>
							</div>
						</figcaption>
					</figure>
				</div>
			{/each}
		</div>
	</div>
</ContentContainer>
