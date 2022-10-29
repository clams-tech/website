<script lang="ts">
	import ClamsLogo from '$lib/icons/ClamsLogo.svelte'
	import Button from '$lib/elements/Button.svelte'
</script>

<svelte:head>
	<title>Clams</title>
</svelte:head>

<div class="p-12 w-screen h-screen flex flex-col items-center justify-center">
	<div class="w-full max-w-md mb-4">
		<ClamsLogo />
	</div>

	<p class="mt-6 text-3xl text-center max-w-sm">Secure • Private • Fast</p>
	<p class="mb-6 italic text-lg text-center text-neutral-500">
		Browser UI for Core Lightning nodes
	</p>

	<div class="flex items-center">
		<a href="https://docs.clams.tech" target="_blank" rel="noopener noreferrer">
			<Button text="Documentation" />
		</a>
		<a class="ml-4" href="https://app.clams.tech" target="_blank" rel="noopener noreferrer">
			<Button text="App" primary />
		</a>
	</div>
</div>
