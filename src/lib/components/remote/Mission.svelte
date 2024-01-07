<script lang="ts">
	import BitcoinIcon from '$lib/icons/bitcoin'
</script>

<section class="px-6 py-[72px] md:py-[96px] flex items-center justify-center w-full gap-4">
	<div class="flex flex-col justify-between w-full max-w-[704px] gap-5">
		<h2 class="text-[24px]">
			Connect to your node securely via the lightning network with Clams <span
				class="text-light-orange">Remote</span
			>. Send and receive lightning and onchain transactions, create BOLT12 offers and view the
			status of your channels remotely on your phone or desktop devices.
		</h2>
		<div class="flex items-center gap-5 flex-wrap">
			<div class="md:hidden max-w-[200px] m-auto">
				{@html BitcoinIcon}
			</div>
			<h2 class="text-4xl text-[32px]">
				Get started to <span class="text-light-orange">streamline</span> and
				<span class="text-light-orange">enhance</span> the management of your Lightning Node.
			</h2>
		</div>
	</div>
	<div class="hidden md:block max-w-[200px]">
		{@html BitcoinIcon}
	</div>
</section>
