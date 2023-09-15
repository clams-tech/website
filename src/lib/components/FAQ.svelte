<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton'

	export let faqs: { q: string; a: string }[]
</script>

<Accordion class="text-left">
	{#each faqs as { q, a }}
		<AccordionItem class="border rounded mb-2">
			<div class="font-bold mt-3 mb-3" slot="summary">{q}</div>
			<div slot="content" class="pb-3">{a}</div>
		</AccordionItem>
	{/each}
</Accordion>
