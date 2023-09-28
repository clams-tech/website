<script lang="ts">
	export let header: { title: string; subtitle: string }
	export let overview: string[] = []
	export let features: { title: string; description: string }[] = []
	export let comingSoon: { title: string }[]

	import CheckIcon from '$lib/icons/check'
</script>

<section class="flex flex-col items-center px-6 pt-28 pb-20">
	<div class="w-full max-w-4xl">
		<!-- Header -->
		<div class="text-center max-w-[630px] m-auto">
			<h1 class="text-6xl font-bold">{header.title}</h1>
			<h2 class="text-2xl mt-2">
				{header.subtitle}
			</h2>
		</div>
		<!-- Overview -->
		<div class="mt-8 grid gap-3">
			<h2 class="text-2xl font-bold text-light-purple ">OVERVIEW</h2>
			{#each overview as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
		<!-- Features -->
		<div class="mt-8 grid gap-3">
			<h2 class="text-2xl font-bold text-light-purple ">FEATURES</h2>
			<div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
				{#each features as { title, description }}
					<div class="flex">
						<div class="w-8">
							{@html CheckIcon}
						</div>
						<div class="flex flex-col gap-1 ">
							<div class="flex items-center">
								<h3 class="font-bold">{title}</h3>
							</div>
							<p>{description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<!-- Coming Soon -->
		<div class="mt-8 grid gap-3">
			<h2 class="text-2xl font-bold text-light-purple ">COMING SOON!</h2>
			<div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
				{#each comingSoon as { title }}
					<div class="flex">
						<div class="w-8">
							{@html CheckIcon}
						</div>
						<div class="flex flex-col gap-1 md:max-w-[280px]">
							<div class="flex items-center">
								<h3 class="font-bold">{title}</h3>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
