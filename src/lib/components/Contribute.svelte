<script lang="ts">
	import * as animateScroll from 'svelte-scrollto'
	import ClamsGradientIcon from '$lib/icons/clams-gradient'
	import ArrowUpIcon from '$lib/icons/arrow-up'
</script>

<section class="px-6 py-[72px] md:py-[96px] flex flex-col items-center gap-20">
	<div class="flex items-center gap-6 w-full max-w-4xl">
		<div class="">
			{@html ClamsGradientIcon}
		</div>
		<div class="flex flex-col gap-2">
			<h2 class="text-2xl text-[20px]">
				Want to contribute or have ideas on how to improve Clams?
			</h2>
			<p>
				Join us in our <a class="text-light-purple dark:text-bitcoin font-bold underline" href="/"
					>Discord</a
				> server
			</p>
		</div>
	</div>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<span
		class="text-bold flex items-center gap-2 cursor-pointer"
		on:click={() => animateScroll.scrollToTop()}
	>
		Scroll to top {@html ArrowUpIcon}</span
	>
</section>
