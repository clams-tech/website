<script lang="ts">
	import { GITHUB_URL } from '$lib/constants'
	import BitcoinIcon from '$lib/icons/bitcoin'

	const links = [
		{
			title: 'Remote; interface for CLN',
			link: 'https://clams.tech/remote'
		},
		{
			title: 'LN-message; library to help apps "speak lightning"',
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

<div class="bg-gray-100 dark:bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-5xl px-6 lg:px-8">
		<div
			class="mx-auto grid grid-cols-1 items-start gap-x-8 gap-8 md:gap-12 lg:mx-0 lg:grid-cols-2"
		>
			<div class="lg:pr-4">
				<div class="w-full max-w-[400px] m-auto">
					{@html BitcoinIcon}
				</div>
			</div>
			<div>
				<div class="text-base leading-7">
					<h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
						Open-Source Software
					</h1>
					<div class="text-gray-900 dark:text-white">
						<p class="mt-8 md:mt-12">
							Here are some projects that we actively maintain or have contributed to:
						</p>
						<ul class="mt-4 list-disc list-inside">
							{#each links as { title, link }}
								<li>
									<a rel="noopener noreferrer" target="_blank" class="underline" href={link}
										>{title}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				</div>
				<div class="mt-8 md:mt-12 flex">
					<a
						href={GITHUB_URL}
						rel="noopener noreferrer"
						target="_blank"
						class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400"
						>View our GitHub <span aria-hidden="true">&rarr;</span></a
					>
				</div>
			</div>
		</div>
	</div>
</div>
