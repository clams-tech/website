<script lang="ts">
	import '../app.css'
	import HeaderNav from '$lib/components/HeaderNav.svelte'
	import BurgerNav from '$lib/components/BurgerNav.svelte'
	import AppButton from '$lib/components/AppButton.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<div class="flex flex-col min-h-screen p-6 dark:text-white dark:bg-black">
	<div class="sm:hidden flex justify-between">
		<BurgerNav />
		<AppButton />
	</div>
	<div class="hidden sm:block">
		<HeaderNav />
	</div>
	<main class="grow max-w-5xl w-full m-auto">
		<slot />
	</main>
	<Footer />
</div>
