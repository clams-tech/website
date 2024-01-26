<script lang="ts">
	const users = [
		{
			quote: '“I forwarded a lot of payments this year. How do I report this?”',
			img: 'https://www.kindpng.com/picc/m/296-2964757_wojak-png-7-png-image-know-that.png',
			name: 'Anon',
			title: 'Lightning node operator'
		},
		{
			quote: '“Damn I sold a lot of raw milk for sats this year. How do taxes work for Bitcoin?”',
			img: 'https://ih1.redbubble.net/image.2343882018.2162/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
			name: 'Mary',
			title: 'Based Farms'
		},
		{
			quote: '“All that stacking, zapping and boosting. How do I explain this to my accountant?”',
			img: 'https://i.imgflip.com/qiev6.jpg',
			name: 'Pleb',
			title: 'Memelord'
		},
		{
			quote: '“I have 12 wallets on the go right now. How do I calculate cost basis?”',
			img: 'https://i.redd.it/k3yz0qleztq71.jpg',
			name: 'Dave',
			title: 'Humble sat stacker'
		},
		{
			quote: '“Some of my clients are now getting paid in Bitcoin! What is a UTXO?!”',
			img: 'https://i.imgflip.com/1oyfyy.jpg',
			name: 'Mike',
			title: 'Accountant'
		}
	]
</script>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-xl text-center">
			<!-- <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">We get it</h2> -->
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				We hear you Bitcoiners
			</p>
		</div>
		<div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
			<div class="grid sm:grid-cols-1 md:grid-cols-3 -mt-8 sm:-mx-4 lg:-mx-4">
				{#each users as { quote, img, name, title }}
					<div class="pt-8 sm:inline-block sm:w-full sm:px-4">
						<figure class="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
							<blockquote class="text-lg leading-8 text-gray-900">
								<p>
									{quote}
								</p>
							</blockquote>
							<figcaption class="mt-6 flex items-center gap-x-4">
								<img class="h-16 w-16 rounded-full bg-gray-50" src={img} alt="" />
								<div>
									<div class="font-semibold text-gray-900">{name}</div>
									<div class="text-gray-600">{title}</div>
								</div>
							</figcaption>
						</figure>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
