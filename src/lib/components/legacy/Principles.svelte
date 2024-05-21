<script lang="ts">
	import CheckIcon from '$lib/icons/check.svelte'

	const whys = [
		{
			title: 'Non-custodial',
			description:
				'We build technology to improve your Bitcoin experience while you keep full control of your sats.'
		},
		{
			title: 'Bitcoin Only',
			description:
				'Built by Bitcoiners who are passionate about improving the usability of Bitcoin.'
		},
		{
			title: 'Privacy-Focused',
			description:
				'Privacy is a priority, with no logging, tracking, or Google scripts utilized anywhere in our tech stack.'
		},
		{
			title: 'Local Data Storage',
			description:
				'All transaction data is stored locally on your device and never leaves unless you want it to.'
		},
		{
			title: 'Fully Open-Source',
			description:
				'All client-side application code is public. Anyone can verify it and we welcome feedback.'
		},
		{
			title: 'Flexible Access',
			description:
				"Native desktop apps for your home devices and browser-based app for when you're on the move."
		}
	]
</script>

<section
	class="px-6 py-[72px] md:py-[96px] flex flex-col items-center justify-center w-full bg-[#F4F6F8] dark:bg-[#1e1e1e]"
>
	<div class="flex flex-col items-center w-full gap-10">
		<h1 class="text-[40px] text-center font-bold">
			Guiding <span class="text-light-orange">Principles</span>
		</h1>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[640px]">
			{#each whys as { title, description }}
				<div class="flex">
					<div class="w-8 mr-1">
						<CheckIcon />
					</div>
					<div class="flex flex-col gap-1 md:max-w-[280px]">
						<div class="flex items-center">
							<h3 class="text-[18px] font-bold">{title}</h3>
						</div>
						<p>{description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
