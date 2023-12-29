<script lang="ts">
	import { t } from '$lib/i18n/translations'
	import { Parallax, ParallaxLayer, StickyLayer } from 'svelte-parallax'
	import Hero from '$lib/components/remote/Hero.svelte'
	import Mission from '$lib/components/remote/Mission.svelte'
	import Features from '$lib/components/remote/Features.svelte'
	import GetStarted from '$lib/components/remote/GetStarted.svelte'
	import FAQ from '$lib/components/remote/FAQ.svelte'
</script>

<svelte:head>
	<title>Clams</title>
</svelte:head>

<Hero />
<Mission />
<Features />
<GetStarted />
<FAQ />
