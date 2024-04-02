<script lang="ts">
	import Hero from '$lib/components/Hero.svelte'
	import UserStories from '$lib/components/UserStories.svelte'
	import HowItWorks from '$lib/components/HowItWorks.svelte'
	import Features from '$lib/components/Features.svelte'
	import Connections from '$lib/components/Connections.svelte'
	import Pricing from '$lib/components/Pricing.svelte'
	import FAQ from '$lib/components/FAQ.svelte'
	import Note from '$lib/components/Note.svelte'
</script>

<svelte:head>
	<title>Clams</title>
</svelte:head>

<Hero />
<HowItWorks />
<Features />
<Pricing />
<Connections />
<UserStories />
<FAQ />
<Note />
