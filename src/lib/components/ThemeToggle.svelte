<script lang="ts">
	import Toggle from '$lib/elements/Toggle.svelte'
	import { settings$ } from '$lib/streams'
	import MoonIcon from '$lib/icons/Moon.svelte'
	import SunIcon from '$lib/icons/Sun.svelte'

	const toggleDarkmode = () => {
		const currentSettings = settings$.value

		settings$.next({
			...currentSettings,
			darkmode: !currentSettings.darkmode
		})
	}
</script>

<div class="flex">
	<div class="w-8 mr-1">
		<SunIcon />
	</div>
	<Toggle slot="element" toggled={$settings$.darkmode} handleChange={toggleDarkmode} />
	<div class="w-8 ml-1">
		<MoonIcon />
	</div>
</div>
