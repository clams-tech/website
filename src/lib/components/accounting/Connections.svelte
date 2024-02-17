<script lang="ts">
	import { DISCORD_URL } from '$lib/constants'
	import CoreLightningIcon from '$lib/icons/core-lightning'
</script>

<div class="bg-gray-100 dark:bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="flex flex-col items-center gap-x-8 gap-y-16 text-center max-w-3xl m-auto">
			<div class="mx-auto w-full lg:mx-0">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
					Fully integrated wallets
				</h2>
				<p class="mt-16 text-lg leading-8 text-gray-600 dark:text-gray-300">
					These wallets are fully integrated into our system to streamline the data import. If your
					wallet isn't listed, let us know and we'll strive to prioritize its inclusion.
				</p>
				<div class="mt-8 flex items-center gap-x-6">
					<a
						href={DISCORD_URL}
						target="_blank"
						rel="noopener noreferrer"
						class="mx-auto rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
						>Join our Discord</a
					>
				</div>
				<div class="mt-16">
					<div class="w-40 m-auto p-3 bg-black rounded-md">
						{@html CoreLightningIcon}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
