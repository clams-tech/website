<script lang="ts">
	import { DOCS_URL, REMOTE_APP_URL } from '$lib/constants'
	import Button from '$lib/elements/Button.svelte'
	import RemoteIcon from '$lib/icons/remote'
</script>

<section class="flex justify-center items-center w-full md:h-screen">
	<div class="px-6 flex justify-center w-full max-w-[1000px] mt-28 md:mt-0">
		<div class="flex flex-col text-center gap-8">
			<div class="w-80 m-auto">
				{@html RemoteIcon}
			</div>
			<div>
				<h1 class="text-6xl font-bold">Secure. Private. Fast.</h1>
				<div class="flex flex-col text-center mt-4">
					<h2 class="text-2xl">
						The essential interface for your Core <span class="text-light-orange">Lightning</span> Node.
					</h2>
					<div class="flex gap-6 mt-8 m-auto">
						<a
							href={`${DOCS_URL}/remote`}
							target="_blank"
							rel="noopener noreferrer"
							class={'w-[134px]'}
						>
							<Button text="Learn More" />
						</a>
						<a class={'w-[134px]'} target="_blank" rel="noopener noreferrer" href={REMOTE_APP_URL}>
							<Button text="Get Started" primary />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
