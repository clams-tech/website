<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton'

	export let faqs: { q: string; a: string }[]
</script>

<Accordion regionControl={'flex justify-between'} regionCaret={'w-5'} caretOpen={'rotate-180'}>
	{#each faqs as { q, a }, i}
		<AccordionItem open={i === 0} class="border rounded mb-2 bg-white">
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
