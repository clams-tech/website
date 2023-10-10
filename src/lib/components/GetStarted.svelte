<script lang="ts">
	import Button from '$lib/elements/Button.svelte'
</script>

<section
	class="px-6 py-[72px] md:py-[96px] flex flex-col items-center justify-center w-full gap-10"
>
	<div class="flex flex-col w-full max-w-[680px] text-center gap-2">
		<h1 class="text-[40px] font-bold">
			<span class="text-light-orange">Unleash</span> the full potential of your Bitcoin holdings with
			Clams.
		</h1>
		<p class="text-[20px]">
			Experience the convenience of a single app that does it all and discover the new era of
			Bitcoin management.
		</p>
		<div class="mt-4 flex justify-center">
			<a
				class={'w-[134px]'}
				href="https://app.clams.tech"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Button text="Get Started" primary />
			</a>
		</div>
	</div>
</section>
