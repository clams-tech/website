<script lang="ts">
	import Button from '$lib/elements/Button.svelte'
	import { darkMode } from '$lib/stores'

	let isDarkMode = true

	darkMode.subscribe((value) => {
		isDarkMode = value
	})
</script>

<section class="flex flex-col items-center w-full h-screen">
	<div class="px-6 flex justify-center w-full max-w-[610px] mt-[120px]">
		<div class="z-10 flex flex-col items-center w-full text-center">
			<h1 class="text-6xl font-bold mb-4">
				One Platform to Unify Your <span class="text-light-orange">Bitcoin</span>.
			</h1>
			<h2 class="text-2xl mb-8">
				Helping Businesses and Individuals Operate on a Bitcoin Standard
			</h2>

			<div class="flex gap-6">
				<a
					href="https://docs.clams.tech"
					target="_blank"
					rel="noopener noreferrer"
					class={'w-[134px]'}
				>
					<Button text="Learn more" />
				</a>
				<a
					class={'w-[134px]'}
					href="https://app.clams.tech"
					target="_blank"
					rel="noopener noreferrer"
				>
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
