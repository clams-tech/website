<script lang="ts">
	import MagicWandIcon from '$lib/icons/magic-wand'
	import HiddenIcon from '$lib/icons/hidden'
	import TransactionsIcon from '$lib/icons/transactions'
</script>

<div id="features" class="features overflow-hidden bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
		>
			<div class="lg:pr-8 lg:pt-4">
				<div class="lg:max-w-lg">
					<!-- <h2 class="text-base font-semibold leading-7 text-indigo-400">Bitcoin only</h2> -->
					<p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						It's time for a superior experience.
					</p>
					<p class="mt-6 text-lg leading-8 text-gray-300">
						We're dedicated to exclusively addressing the tax reporting needs of Bitcoiners.
						Automatically sync or manually import your transaction data to get started.
					</p>
					<dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
						<div class="relative pl-9">
							<dt class="inline font-semibold text-white">
								<div class="absolute left-1 top-1 h-5 w-5 text-indigo-500">
									{@html MagicWandIcon}
								</div>
								Automated calulations.
							</dt>
							<dd class="inline">Cost basis and capital gains/losses.</dd>
						</div>
						<div class="relative pl-9">
							<dt class="inline font-semibold text-white">
								<div class="absolute left-1 top-1 h-5 w-5 text-indigo-500">
									{@html HiddenIcon}
								</div>
								Private.
							</dt>
							<dd class="inline">
								Data never leaves your device unless you want it to. No tracking, no google scripts.
							</dd>
						</div>
						<div class="relative pl-9">
							<dt class="inline font-semibold text-white">
								<div class="absolute left-1 top-1 h-5 w-5 text-indigo-500">
									{@html TransactionsIcon}
								</div>
								Unlimited.
							</dt>
							<dd class="inline">Wallet connections and transactions.</dd>
						</div>
						<div class="relative pl-9">
							<dt class="inline font-semibold text-white">
								<div class="absolute left-1 top-1 h-5 w-5 text-indigo-500">
									{@html TransactionsIcon}
								</div>
								Specialised.
							</dt>
							<dd class="inline">Lightning and onchain transactions.</dd>
						</div>
					</dl>
				</div>
			</div>
			<img
				src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
				alt="Product screenshot"
				class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
				width="2432"
				height="1442"
			/>
		</div>
	</div>
</div>
