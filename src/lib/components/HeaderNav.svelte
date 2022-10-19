<script lang="ts">
	import { page } from '$app/stores'
	import { routes } from '$lib/constants'
	import ThemeToggle from './ThemeToggle.svelte'
	import { t } from '$lib/i18n/translations'
</script>

<header class="backdrop-blur w-full">
	<ul class="flex justify-end items-center py-6">
		{#each routes as route}
			<li class="mr-4 cursor-pointer underline-offset-2">
				<a
					class:underline={$page.params.slug
						? `${route.path}/${$page.params.slug}` === $page.url.pathname
						: route.path === $page.url.pathname}
					href={route.path}>{$t(`app.navigation.${route.text}`)}</a
				>
			</li>
		{/each}
		<li class="ml-2 mr-4">
			<ThemeToggle />
		</li>
	</ul>
</header>
