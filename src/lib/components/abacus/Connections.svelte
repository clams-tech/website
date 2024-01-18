<script lang="ts">
	import CoreLightningIcon from '$lib/icons/core-lightning'
</script>

<div class="bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
			<div class="mx-auto w-full max-w-xl lg:mx-0">
				<h2 class="text-3xl font-bold tracking-tight text-white">Fully integrated wallets</h2>
				<p class="mt-6 text-lg leading-8 text-gray-300">
					All wallets listed here are fully integrated into our system to streamline the data
					import. If your wallet isn't listed, let us know and we'll strive to prioritize its
					inclusion.
				</p>
				<div class="mt-8 flex items-center gap-x-6">
					<a
						href="https://discord.gg/eWfHuJZVaB"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
						>Join our Discord</a
					>
				</div>
			</div>
			<div
				class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8"
			>
				<div class="w-40 m-auto">
					{@html CoreLightningIcon}
				</div>
			</div>
		</div>
	</div>
</div>
