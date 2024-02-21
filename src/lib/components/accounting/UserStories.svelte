<script lang="ts">
	const users = [
		{
			quote: '“ milk for sats this year. How do taxes work for Bitcoin?”',
			img: 'https://i.kym-cdn.com/photos/images/newsfeed/001/682/115/749.jpg',
			name: 'Mary',
			title: 'Based Farms'
		},
		{
			quote: '“All that stacking, zapping and boosting. How do I explain this to my accountant?”',
			img: 'https://i.kym-cdn.com/photos/images/newsfeed/000/993/875/084.png',
			name: 'Pleb',
			title: 'Memelord'
		},
		{
			quote: '“Some of my clients are now getting paid in Bitcoin! What is a UTXO?!”',
			img: 'https://i.imgflip.com/1oyfyy.jpg',
			name: 'Mike',
			title: 'Accountant'
		}
	]
</script>

<div class="bg-gray-100 dark:bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-xl text-center">
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				We've heard you Bitcoiners
			</p>
		</div>
		<div class="mx-auto mt-8 md:mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
			<div class="grid sm:grid-cols-1 md:grid-cols-3 -mt-8 sm:-mx-4 lg:-mx-4">
				{#each users as { quote, img, name, title }}
					<div class="pt-8 sm:inline-block sm:w-full sm:px-4">
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
