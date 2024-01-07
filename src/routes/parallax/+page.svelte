<script lang="ts">
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import { Parallax, ParallaxLayer } from 'svelte-parallax'

	let parallax: Parallax
	let disabled = false

	onMount(() => {
		goto('/')
	})
</script>

<button class="disable" on:click={() => (disabled = !disabled)}>disable</button>

<Parallax sections={6} bind:this={parallax} {disabled}>
	<!-- {#each fancy as char, index (index)}
		<ParallaxLayer
			rate={(index + 1) / (fancy.length - 1)}
			offset={1}
			style="
			  margin-left: {38 + index * 5}%; 
				display: flex; 
				justify-content: flex-start; 
				align-items: center;
		  "
		>
			<p class="fancy">
				{char}
			</p>
		</ParallaxLayer>
	{/each} -->

	<ParallaxLayer
		offset={0}
		rate={1}
		style="
		background-color: pink; 
		display: flex; 
		justify-content: center; 
		align-items: center; 
		flex-direction: column;
	"
	>
		<h1>TOP</h1>
		<ul class="text-2xl list-disc list-inside">
			<li>Clams Logo</li>
			<li>Tagline</li>
			<li>Ethos</li>
		</ul>
		<button
			class="bottom-btn"
			on:click={() => parallax.scrollTo(6, { selector: '.top-btn', duration: 4000 })}
		>
			Scroll to bottom
		</button>
	</ParallaxLayer>

	<ParallaxLayer offset={1} rate={2.5} style="display: flex; justify-content: flex-start;">
		<div
			style="background-color: orange; display: flex; 
		justify-content: center; 
		align-items: center; width: 50%; height: 100%;"
		>
			FEATURE 1 DESCRIPTION
		</div>
	</ParallaxLayer>
	<ParallaxLayer offset={1} rate={-2.5} style="display: flex; justify-content: flex-end;">
		<div
			style="background-color: lightblue; display: flex; 
		justify-content: center; 
		align-items: center; width: 50%; height: 100%;"
		>
			FEATURE 1 ICON
		</div>
	</ParallaxLayer>

	<ParallaxLayer offset={2} rate={0} style="display: flex; justify-content: flex-end;">
		<div
			style="border: 1px solid red; display: flex; 
		justify-content: center; 
		align-items: center; width: 100%; height: 100%;"
		>
			INFORMATION 1
		</div>
	</ParallaxLayer>

	<ParallaxLayer offset={3} rate={2.5} style="display: flex; justify-content: flex-start;">
		<div
			style="background-color: orange; display: flex; 
		justify-content: center; 
		align-items: center; width: 50%; height: 100%;"
		>
			FEATURE 2 DESCRIPTION
		</div>
	</ParallaxLayer>
	<ParallaxLayer offset={3} rate={-2.5} style="display: flex; justify-content: flex-end;">
		<div
			style="background-color: lightblue; display: flex; 
		justify-content: center; 
		align-items: center; width: 50%; height: 100%;"
		>
			FEATURE 2 IMAGE
		</div>
	</ParallaxLayer>

	<ParallaxLayer offset={4} rate={0} style="display: flex; justify-content: flex-end;">
		<div
			style="border: 1px solid red; display: flex; 
		justify-content: center; 
		align-items: center; width: 100%; height: 100%;"
		>
			INFORMATION 2
		</div>
	</ParallaxLayer>

	<ParallaxLayer
		offset={5}
		rate={2}
		style="
		  background-color: pink; 
			display: flex; 
			justify-content: center; 
			align-items: center; 
			flex-direction: column;
		"
	>
		<h1>BOTTOM</h1>
		<button
			class="top-btn"
			on:click={() => parallax.scrollTo(1, { selector: '.bottom-btn', duration: 1000 })}
		>
			scroll to top
		</button>
	</ParallaxLayer>
</Parallax>

<style>
	:global(body) {
		padding: 0;
		color: white;
		font-family: monospace;
	}

	h1 {
		font-size: 2rem;
	}

	button {
		font-size: 1rem;
		cursor: pointer;
		text-decoration: underline;
	}

	.disable {
		position: fixed;
		top: 1rem;
		left: 1rem;
		z-index: 10;
	}

	/* .fancy {
		font-size: 2.5rem;
	} */
</style>
