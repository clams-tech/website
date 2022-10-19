<script lang="ts">
	import '../app.css'
	import HeaderNav from '$lib/components/HeaderNav.svelte'
	import BurgerNav from '$lib/components/BurgerNav.svelte'
	import Links from '$lib/components/Links.svelte'
</script>

<div class="flex flex-col h-screen dark:text-white dark:bg-black relative">
	<div class="sm:hidden flex justify-between z-10 fixed top-0 left-0">
		<BurgerNav />
	</div>
	<div class="hidden sm:block fixed top-0 right-0 w-full">
		<HeaderNav />
	</div>
	<main class="h-full w-full border-b-8 border-purple-500 overflow-hidden">
		<slot />
	</main>

	<Links />
</div>
