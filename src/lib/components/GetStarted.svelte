<script lang="ts">
	import { APP_URL } from '$lib/constants'
	import Button from '$lib/elements/Button.svelte'
</script>

<section
	class="px-6 py-[72px] md:py-[96px] flex flex-col items-center justify-center w-full gap-10"
>
	<div class="flex flex-col w-full max-w-[680px] text-center gap-2">
		<h1 class="text-[40px] font-bold">
			<span class="text-light-orange">Unleash</span> the full potential of your Lightning Node with Clams.
		</h1>
		<p class="text-[20px]">Discover the new era of node management.</p>
		<div class="mt-4 flex justify-center">
			<a class={'w-[134px]'} href="/get-started">
				<Button text="Get Started" primary />
			</a>
		</div>
	</div>
</section>
