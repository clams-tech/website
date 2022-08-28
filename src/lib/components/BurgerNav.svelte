<script lang="ts">
	import { fly } from 'svelte/transition'
	import { page } from '$app/stores'
	import { routes } from '$lib/constants'
	import { t } from '$lib/i18n/translations'
	import Burger from '$lib/icons/Burger.svelte'
	import Cross from '$lib/icons/Cross.svelte'
	import ThemeToggle from './ThemeToggle.svelte'

	let showMenu = false

	function getInnerWidth() {
		const { innerWidth } = window
		return innerWidth > 500 ? 500 : innerWidth
	}
</script>

<section>
	<div class="w-12 cursor-pointer" on:click={() => (showMenu = true)}>
		<Burger />
	</div>
	{#if showMenu}
		<div
			in:fly={{ x: -getInnerWidth(), duration: 500 }}
			out:fly={{ x: -getInnerWidth(), duration: 500 }}
			class="w-full h-full fixed top-0 left-0 bg-white dark:bg-black p-6"
		>
			<div class="flex justify-between items-center">
				<div class="w-12 cursor-pointer" on:click={() => (showMenu = false)}>
					<Cross />
				</div>
				<ThemeToggle />
			</div>
			<ul>
				{#each routes as route}
					<li on:click={() => (showMenu = false)} class="my-4">
						<a class:underline={$page.url.pathname === route.path} href={route.path}>
							{$t(`app.navigation.${route.text}`)}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</section>
