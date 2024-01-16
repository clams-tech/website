<script lang="ts">
	import { t } from '$lib/i18n/translations'
	import { Parallax, ParallaxLayer, StickyLayer } from 'svelte-parallax'
	import Nav from '$lib/components/Nav.svelte'
	import Hero from '$lib/components/Hero.svelte'
	import Products from '$lib/components/Products.svelte'
	import Principles from '$lib/components/Principles.svelte'
	import Note from '$lib/components/Note.svelte'
	import Contribute from '$lib/components/Contribute.svelte'
</script>

<svelte:head>
	<title>Clams</title>
</svelte:head>

<Nav />
<Hero />
<Products />
<Principles />
<Note />
<Contribute />
