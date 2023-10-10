<script lang="ts">
	import BitcoinIcon from '$lib/icons/bitcoin'
</script>

<section class="px-6 py-[72px] md:py-[96px] flex items-center justify-center w-full gap-4">
	<div class="flex flex-col justify-between w-full max-w-[704px] gap-5">
		<h2 class="text-[24px]">
			With transactions spread across cold storage, lightning nodes, exchanges, mobile apps, and
			more, managing your finances can be a daunting task for Bitcoiners.
		</h2>
		<h2 class="text-[24px]">
			Clams simplifies this process by consolidating your wallets into one secure hub. Effortlessly
			manage, track, and report on your transactions with a single click.
		</h2>
		<h2 class="text-[24px]">
			Our mission is to solve the accountancy problem for Bitcoiners, enabling them to kickstart
			circular economies.
		</h2>
		<div class="flex items-center gap-2">
			<h2 class="text-4xl text-[32px]">
				Get started to <span class="text-light-orange">visualize</span> your
				<span class="text-light-orange">sats flow</span>.
			</h2>
			<div class="md:hidden max-w-[100px]">
				{@html BitcoinIcon}
			</div>
		</div>
	</div>
	<div class="hidden md:block w-[204px]">
		{@html BitcoinIcon}
	</div>
</section>
