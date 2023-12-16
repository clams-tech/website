<script lang="ts">
	import { t } from '$lib/i18n/translations'
	import { Parallax, ParallaxLayer, StickyLayer } from 'svelte-parallax'
	import Hero from '$lib/components/Hero.svelte'
	import Mission from '$lib/components/Mission.svelte'
	import Features from '$lib/components/Features.svelte'
	// import Roadmap from '$lib/components/Roadmap.svelte'
	import WhyClams from '$lib/components/WhyClams.svelte'
	import FAQ from '$lib/components/FAQ.svelte'
	import GetStarted from '$lib/components/GetStarted.svelte'
	import Note from '$lib/components/Note.svelte'
	import Contribute from '$lib/components/Contribute.svelte'
</script>

<svelte:head>
	<title>Clams</title>
</svelte:head>

<Hero />
<Mission />
<Features />
<!-- <Roadmap /> -->
<WhyClams />
<FAQ />
<GetStarted />
<Note />
<Contribute />
