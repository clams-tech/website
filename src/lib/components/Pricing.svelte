<script>
	import CheckIcon from '$lib/icons/check.svelte'
	import BitcoinSymbol from '$lib/icons/bitcoin-symbol'
	import Button from '$lib/elements/Button.svelte'
</script>

<div class="grid grid-cols-2 gap-10">
	<!-- Commnunity -->
	<div class="w-full p-8 bg-white text-center rounded-3xl shadow-xl">
		<h1 class="text-black font-semibold text-2xl">Community</h1>
		<div class="pt-2 tracking-wide flex justify-center gap-1">
			<span class="flex justify-center text-3xl font-semibold">
				<div class="w-6">
					{@html BitcoinSymbol}
				</div>
				0
			</span>
			<span class="text-gray-400 font-medium mt-3">/ forever</span>
		</div>
		<hr class="mt-4 border-1" />
		<div class="pt-8 flex flex-col gap-3 justify-between">
			<div class="flex items-center gap-2">
				<div class="w-8">
					<CheckIcon />
				</div>
				<span> Awesome feature one </span>
			</div>
			<div class="flex items-center gap-2">
				<div class="w-8">
					<CheckIcon />
				</div>
				<span> Awesome feature two </span>
			</div>
			<div class="flex items-center gap-2">
				<div class="w-8">
					<CheckIcon />
				</div>
				<span> Awesome feature three </span>
			</div>
			<div class="flex mt-3">
				<Button primary text="LFG!" />
			</div>
		</div>
	</div>
	<!-- Premium -->
	<div class="w-full p-8 bg-white text-center rounded-3xl shadow-xl">
		<h1 class="text-black font-semibold text-2xl">Community</h1>
		<div class="pt-2 tracking-wide flex justify-center gap-1">
			<span class="flex justify-center text-3xl font-semibold">
				<div class="w-6">
					{@html BitcoinSymbol}
				</div>
				TBD
			</span>
			<span class="text-gray-400 font-medium mt-3">/ year</span>
		</div>
		<hr class="mt-4 border-1" />
		<div class="pt-8 flex flex-col gap-3 justify-between">
			<div class="flex items-center gap-2">
				<div class="w-8">
					<CheckIcon />
				</div>
				<span> Awesome feature one </span>
			</div>
			<div class="flex items-center gap-2">
				<div class="w-8">
					<CheckIcon />
				</div>
				<span> Awesome feature two </span>
			</div>
			<div class="flex items-center gap-2">
				<div class="w-8">
					<CheckIcon />
				</div>
				<span> Awesome feature three </span>
			</div>
			<div class="flex mt-3">
				<Button primary text="Coming Soon..." />
			</div>
		</div>
	</div>
</div>
