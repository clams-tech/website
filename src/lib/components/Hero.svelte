<script lang="ts">
	import { DOCS_URL } from '$lib/constants'
	import Button from '$lib/elements/Button.svelte'
	import ClamsIcon from '$lib/icons/clams'
	// import ClamsMask from '$lib/icons/clams-mask'
	// import { darkMode } from '$lib/stores'

	// let isDarkMode = true

	// darkMode.subscribe((value) => {
	// 	isDarkMode = value
	// })
</script>

<section class="flex flex-col items-center w-full md:h-screen">
	<div class="px-6 flex justify-center w-full max-w-[650px] mt-[120px]">
		<div class="z-10 flex flex-col gap-8 items-center w-full text-center">
			<h1 class="text-6xl font-bold">Secure. Private. Fast.</h1>
			<div class="w-80">
				{@html ClamsIcon}
			</div>
			<h2 class="text-2xl">
				The essential interface for your Core <span class="text-light-orange">Lightning</span> Node.
			</h2>
			<div class="flex gap-6">
				<a href={DOCS_URL} target="_blank" rel="noopener noreferrer" class={'w-[134px]'}>
					<Button text="Learn more" />
				</a>
				<a class={'w-[134px]'} href="/get-started">
					<Button text="Start now" primary />
				</a>
			</div>
		</div>
	</div>
	<!-- <div
		class={`mt-[-150px] h-full w-full ${
			isDarkMode
				? "bg-[url('$lib/images/network--dark.png')]"
				: "bg-[url('$lib/images/network--light.png')]"
		}`}
	/> -->
</section>
