<script lang="ts">
	import { darkMode } from '$lib/stores'
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton'

	let isDarkMode = true

	darkMode.subscribe((value) => {
		isDarkMode = value
	})

	export let faqs: { q: string; a: string }[]
</script>

<Accordion
	regionControl={'flex justify-between gap-2'}
	regionCaret={'w-5 dark:fill-white'}
	caretOpen={'rotate-180'}
>
	{#each faqs as { q, a }, i}
		<AccordionItem
			open={i === 0}
			class="text-left border dark:border-dark-border rounded mb-2 bg-white dark:bg-black"
		>
			<svelte:fragment slot="summary"
				><div class="font-bold mt-3 mb-3">
					<p>{q}</p>
				</div></svelte:fragment
			>
			<svelte:fragment slot="content">
				<div class="pb-3">
					<p>
						{a}
					</p>
				</div></svelte:fragment
			>
		</AccordionItem>
	{/each}
</Accordion>
