<script lang="ts">
	import { GITHUB_URL } from '$lib/constants'
	import BitcoinIcon from '$lib/icons/bitcoin'
	import ContentContainer from './shared/ContentContainer.svelte'

	const links = [
		{
			title: 'Remote: interface for CLN',
			link: 'https://clams.tech/remote'
		},
		{
			title: 'LN-message: library to help apps "speak lightning"',
			link: 'https://github.com/aaronbarnardsound/lnmessage'
		},
		{
			title: 'ROYGIBIV: BOLT12 "prism" plugin for CLN',
			link: 'https://www.roygbiv.guide/'
		},
		{
			title: 'LNPlay: interactive lightning educational tool',
			link: 'https://www.lnplay.guide/'
		}
	]
</script>

<ContentContainer title="Open source software">
	<div class="flex flex-wrap gap-8 md:gap-12">
		<div class="flex-1 w-full min-w-[200px] max-w-[350px] m-auto">
			{@html BitcoinIcon}
		</div>
		<div class="flex-2 text-base leading-7">
			<div class="text-gray-900 dark:text-white">
				<p>Here are some projects that we actively maintain or have contributed to:</p>
				<ul class="mt-4 list-disc list-inside">
					{#each links as { title, link }}
						<li>
							<a rel="noopener noreferrer" target="_blank" class="underline" href={link}>{title}</a>
						</li>
					{/each}
				</ul>
				<div class="mt-8 md:mt-12 flex">
					<a
						href={GITHUB_URL}
						rel="noopener noreferrer"
						target="_blank"
						class="text-base font-semibold leading-7 text-light-purple dark:text-dark-purple"
						>View our GitHub <span aria-hidden="true">&rarr;</span></a
					>
				</div>
			</div>
		</div>
	</div>
</ContentContainer>
