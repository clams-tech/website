<script lang="ts">
	import { darkMode } from '$lib/stores'
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton'

	let isDarkMode = true

	darkMode.subscribe((value) => {
		isDarkMode = value
	})

	const faqs = [
		{
			q: 'How do app permissions work?',
			a: 'When you make a node connection, the app will ask you to grant permissions. The app requires read-only access at a minimum. You can update or revoke permissions at any time.'
		},
		{
			q: 'Where is my Bitcoin data stored?',
			a: 'All data is stored locally on your device and encrypted with a password of your choice.'
		},
		{
			q: 'Which lightning implementations do you support?',
			a: 'CLN only.'
		}
	]
</script>

<section id="faq" class="px-6 py-[72px] md:py-[96px] flex flex-col items-center w-full">
	<div class="flex flex-col justify-between w-full max-w-[850px] gap-10">
		<h1 class="text-[40px] font-bold">
			Frequently asked <span class="text-light-orange">questions</span>
		</h1>
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
	</div>
</section>
