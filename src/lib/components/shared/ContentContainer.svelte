<script lang="ts">
	export let title
	export let scrollTo = ''
</script>

<div id={scrollTo} class="bg-white dark:bg-gray-900">
	<div class="px-6 lg:px-8 py-24 sm:py-32 max-w-5xl mx-auto">
		<h2
			class="mb-8 md:mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
		>
			{title}
		</h2>
		<slot />
	</div>
</div>
