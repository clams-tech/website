<script lang="ts">
	import { REMOTE_APP_URL } from '$lib/constants'
	import Button from '$lib/elements/Button.svelte'
</script>

<section
	class="px-6 py-[72px] md:py-[96px] flex flex-col items-center justify-center w-full bg-[#F4F6F8] dark:bg-[#1e1e1e]"
>
	<div class="flex flex-col w-full max-w-[680px] text-center gap-2">
		<h1 class="text-[40px] font-bold">
			<span class="text-light-orange">Unleash</span> the full potential of your Lightning Node with Remote.
		</h1>
		<p class="text-[20px]">Discover the new era of node management.</p>
		<div class="mt-4 flex justify-center">
			<a target="_blank" rel="noopener noreferrer" class={'w-[134px]'} href={REMOTE_APP_URL}>
				<Button text="Get Started" primary />
			</a>
		</div>
	</div>
</section>
