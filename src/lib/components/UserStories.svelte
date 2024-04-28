<script lang="ts">
	import PersonaOne from '$lib/images/persona-1.jpg'
	import PersonaTwo from '$lib/images/persona-2.png'
	import PersonaThree from '$lib/images/persona-3.jpg'

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

<div class="bg-gray-100 dark:bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto px-6 lg:px-8 max-w-5xl ">
		<div class="mx-auto max-w-5xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				We've heard you Bitcoiners
			</h2>
		</div>
		<div class="m-auto flow-root mt-8 md:mt-12 lg:mx-0">
			<div class="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
				{#each users as { quote, img, name, title }}
					<div class="sm:inline-block sm:w-full">
						<figure class="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 text-sm leading-6">
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
	</div>
</div>
