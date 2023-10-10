<script lang="ts">
	import CheckIcon from '$lib/icons/check.svelte'

	const whys = [
		{
			title: 'Non-custodial',
			description: 'Enjoy a futuristic payment experience and keep full control of your sats.'
		},
		{
			title: 'Bitcoin Only',
			description:
				'Built by Bitcoiners who are passionate about improving the usability of Bitcoin.'
		},
		{
			title: 'Privacy-Focused',
			description:
				'Privacy is a priority, with no logging, tracking, or Google scripts utilized within the app.'
		},
		{
			title: 'Local Data Storage',
			description:
				'All data is stored locally on your device and never leaves unless you want it to.'
		},
		{
			title: 'Fully Open-Source',
			description:
				'All client-side application code is public. Anyone can verify it and we welcome feedback.'
		},
		{
			title: 'Flexible Access',
			description:
				"A native desktop app for your home devices and a browser-based app for when you're on the move."
		}
	]
</script>

<section class="px-6 py-[72px] md:py-[96px] flex flex-col items-center justify-center w-full">
	<div class="flex flex-col items-center w-full gap-10">
		<h1 class="text-4xl text-center font-bold">
			<span class="text-light-orange">Why</span> Choose Clams?
		</h1>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[640px]">
			{#each whys as { title, description }}
				<div class="flex">
					<div class="w-8">
						<CheckIcon />
					</div>
					<div class="flex flex-col gap-1 md:max-w-[280px]">
						<div class="flex items-center">
							<h3 class="font-bold">{title}</h3>
						</div>
						<p>{description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
