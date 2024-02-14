<script>
	import { ACCOUNTING_APP_URL, DOCS_URL } from '$lib/constants'
</script>

<div class="bg-white dark:bg-gray-900">
	<div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				How it works
			</h2>
			<div class="mt-16 flex items-center justify-center gap-x-6">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={ACCOUNTING_APP_URL}
					class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Get Started</a
				>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={DOCS_URL}
					class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
					>Learn More <span aria-hidden="true">→</span></a
				>
			</div>
		</div>
	</div>
</div>
