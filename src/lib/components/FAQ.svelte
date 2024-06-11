<script lang="ts">
	import { DISCORD_URL } from '$lib/constants'
	import ContentContainer from './shared/ContentContainer.svelte'

	const faqs = [
		{
			q: 'What personal information do I need to provide to use Clams?',
			a: "None. No sign-up is required. We don't ask for or obtain personally identifiable information. Just download the app to get started.",
			selected: true
		},
		{
			q: "Can I still use Clams if I don't see my wallet on the integration list?",
			a: `For the initial beta launch, we support LND and Core Lightning nodes, but we plan to rapidly start adding support for many more wallets soon. The goal is to support all of the major wallets and Bitcoin exchanges in the ecosystem. We are also working on a custom import tool that will allow for importing transaction data for wallets that we do not directly support. If there is a wallet that you would like us to support, jump into our <a class="underline" target="_blank" rel="noopener noreferrer" href="https://discord.gg/eWfHuJZVaB">Discord</a> to let us know. If you are not currently running LND or CoreLN, it is probably best to wait until you see your favorite wallets directly supported to get value out of using Clams.`,
			selected: false
		},
		{
			q: 'Where is my data stored?',
			a: 'Clams syncs transaction data from your Bitcoin wallets, derives double-entry accounting journals from that data, and automatically adds metadata. All of that data is stored directly on your device and remains private at all times.',
			selected: false
		},
		{
			q: 'Does Clams have access to spend funds from my wallets?',
			a: 'No. Clams requires only read access to your wallets and never has access to spending your funds.',
			selected: false
		},
		{
			q: 'Is the app open-source?',
			a: `No, it isn't. We are major proponents of open source, and you can view all of our open-source work on our <a class="underline" target="_blank" rel="noopener noreferrer" href="https://github.com/clams-tech">GitHub</a>. We want to build Clams into a long-term sustainable business, and we think that open sourcing it at this time does not contribute to that. Since Clams does not have access to user funds, we do not think that open sourcing it is critical.`,
			selected: false
		},
		{
			q: 'Does Clams leak metadata or make requests to external services that contain any of my private data?',
			a: `In some cases, Clams does need to make requests to external services to maintain a complete data set for deriving journal entries. The current external requests that are made are the following:
        
        <ul class='list-decimal list-inside ml-4 mt-2 mb-2 flex flex-col gap-2'>
            <li>Older CoreLN on-chain transactions sometimes do not have a timestamp, so we need to look up a block by its height to get the timestamp. No real metadata is leaked here other than that you are interested in a particular block.</li>
            <li>LND nodes will often not have the on-chain transaction details of a channel close, so we need to look up the full transaction by its hash. This leaks that this hash is of interest to you.</li>
            <li>We look up historical Bitcoin price data from the coincap API. We make a single request with a date range from the first to the last transaction in your data set. This does not really leak any specific information since we are not looking up specific timestamps.</li>
        </ul>

        For all required chain data lookups, for each request we randomly select from a list of public Electrum servers which is currently made up of mempool.space and blockstream. In a future update, we will allow users to input a custom list of Electrum servers they would like Clams to use instead. This would allow for using a locally running instance to prevent any metadata from leaving your device. We also recommend using a VPN while using the app so that the public Electrum servers cannot correlate your personal IP address with transaction metadata.
        
        <p class='mt-2'>We will update this FAQ if we add any more requests to external services. We are also considering running our own Electrum instance for these lookups.</p>
        `,
			selected: false
		},
		{
			q: 'How can I verify that my data remains private and never leaves my device?',
			a: `There are many tools for monitoring network traffic coming from your device to ensure that your private data is not being sent to external servers. We are currently working on a tutorial video for how to do this with <a class="underline" target="_blank" rel="noopener noreferrer" href="https://www.wireshark.org/">Wireshark</a> so that you can follow along and verify for yourself.`,
			selected: false
		},
		{
			q: 'Does Clams include any trackers or analytics scripts?',
			a: 'No. As much as we want to be able to gain insight into how people are using the app and where they are running into issues, we simply do not want to compromise on user privacy through tracking and analytics. Instead, we hope that you will jump into our <a class="underline" target="_blank" rel="noopener noreferrer" href="https://discord.gg/eWfHuJZVaB">Discord</a> and provide us with feedback directly :).',
			selected: false
		},
		{
			q: 'If you are not monetizing user data, have no ads, and the app is free, how is that sustainable long term?',
			a: 'Once Clams has a full feature set for importing, syncing, and tagging transaction data, we plan on adding additional, paid-only features that can be opted into if you feel that those features save you time and/or money. We also have some ideas around specific products for large businesses and enterprise customers. We want to build a sustainable business that aligns the incentives between us and our customers and not compromise on our values at the same time.',
			selected: false
		}
	]

	function toggleFaq(index: number) {
		faqs[index].selected = !faqs[index].selected
	}
</script>

<ContentContainer title="Frequently asked questions" scrollTo="faq">
	<div class="mx-auto divide-y divide-gray-900/10 dark:divide-gray-100/10">
		<div class="mx-auto text-center">
			<p class="text-base leading-7 text-gray-600 dark:text-gray-300">
				Can’t find the answer you’re looking for? Reach out to us on <a
					href={DISCORD_URL}
					target="_blank"
					rel="noopener noreferrer"
					class="underline font-semibold text-light-purple dark:text-dark-purple hover:text-indigo-500"
					>discord</a
				>.
			</p>
		</div>
		<dl class="mt-8 md:mt-12 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-100/10">
			{#each faqs as { q, a, selected }, i}
				<div class="pt-6">
					<dt on:click={() => toggleFaq(i)}>
						<button
							type="button"
							class="flex w-full items-start justify-between text-left text-gray-900 dark:text-white"
							aria-controls="faq-0"
							aria-expanded="false"
						>
							<span class="text-base font-semibold leading-7">{q}</span>
							<span class="ml-6 flex h-7 items-center">
								{#if selected}
									<!-- Minus icon -->
									<svg
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
									</svg>
								{:else}
									<!-- Plus icon -->
									<svg
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
									</svg>
								{/if}
							</span>
						</button>
					</dt>
					{#if selected}
						<dd class="mt-2 pr-12" id="faq-0">
							<p class="text-base leading-7 text-gray-600 dark:text-gray-300">
								{@html a}
							</p>
						</dd>
					{/if}
				</div>
			{/each}
		</dl>
	</div>
</ContentContainer>
