<script lang="ts">
	import Downloads from '$lib/components/shared/Downloads.svelte'
</script>

<section class="h-full bg-white dark:bg-gray-900 py-24 sm:py-32">
	<div class="text-center h-screen flex-col w-full max-w-5xl px-6 lg:px-8 m-auto">
		<h2 class="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
			Downloads
		</h2>
		<div class="flex flex-col">
			<p class="text-gray-900 dark:text-white">
				Clams <span class="text-light-purple dark:text-dark-purple">beta</span> is available as a Desktop
				app.
			</p>
			<p class="mt-2 text-gray-900 dark:text-white">
				View all of the available download options <a
					class="underline"
					href="https://web.crabnebula.cloud/clams/clams/releases"
					target="_blank"
					rel="noopener noreferrer">here</a
				> or choose from this list:
			</p>
			<div class="flex mt-8 md:mt-12">
				<Downloads />
			</div>
		</div>
	</div>
</section>
