<script lang="ts">
	import { darkMode } from '$lib/stores'
	import Spinner from './Spinner.svelte'

	export let text = ''
	export let disabled = false
	export let requesting = false
	export let small = false
	export let primary = false
	let isDarkMode = true

	darkMode.subscribe((value) => {
		isDarkMode = value
	})

	export const click = () => {
		button && button.click()
	}

	let button: HTMLButtonElement

	// ==== 👇 comments are need to prevent styles from being stripped from build when used dynamically 👇 ==== //
	// px-2
	// px-4
	// hover:shadow-light-purple
	// hover:shadow-md
	// hover:shadow-current
	// border-light-purple
	// border-current
</script>

<button
	bind:this={button}
	on:click
	style={`opacity: ${disabled ? '0.4' : '1'}`}
	class="{primary ? 'bg-light-purple' : 'bg-white'} {primary
		? 'text-white'
		: 'text-black'} no-underline text-{small
		? 'xs'
		: 'base'} active:shadow-sm shadow-sm hover:shadow-lg disabled:bg-disabled disabled:border-disabled w-full flex items-center justify-center rounded-md py-3 px-{small
		? '2'
		: '4'} border-2 border-solid border-{primary ? 'light-purple' : 'current'} font-semibold"
	disabled={disabled || requesting}
>
	{#if requesting}
		<Spinner size="1.5rem" />
	{:else}
		<slot name="iconLeft" />
		<span>
			{text}
		</span>
		<slot name="iconRight" />
	{/if}
</button>
