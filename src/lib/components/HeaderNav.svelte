<script lang="ts">
	import { page } from '$app/stores'
	import { routes } from '$lib/constants'
	import AppButton from './AppButton.svelte'
	import ThemeToggle from './ThemeToggle.svelte'
	import { t } from '$lib/i18n/translations'
	import { onMount } from 'svelte'

	onMount(() => {
		// @TODO
		console.log('window.location.path = ', window.location.pathname)
	})
</script>

<header>
	<ul class="flex justify-end items-center">
		{#each routes as route}
			<li class="mr-4 cursor-pointer underline-offset-2">
				<a class:underline={$page.url.pathname.includes(route.path)} href={route.path}
					>{$t(`app.navigation.${route.text}`)}</a
				>
			</li>
		{/each}
		<li class="ml-2 mr-4">
			<ThemeToggle />
		</li>
		<li>
			<AppButton />
		</li>
	</ul>
</header>
