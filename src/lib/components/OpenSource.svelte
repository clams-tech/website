<script lang="ts">
	import { GITHUB_URL } from '$lib/constants'
	import BitcoinIcon from '$lib/icons/bitcoin'
</script>

<div class="bg-gray-100 dark:bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
		>
			<div class="lg:pr-4">
				<div class="w-full max-w-[400px] m-auto">
					{@html BitcoinIcon}
				</div>
			</div>
			<div>
				<div class="text-base leading-7 lg:max-w-lg">
					<h1
						class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
					>
						Open-Source Software
					</h1>
					<div class="max-w-xl text-gray-900 dark:text-white">
						<p class="mt-6">
							Here are some projects that we actively maintain or have contributed to:
						</p>
						<ul class="mt-8 list-disc list-inside">
							<li>Remote; interface for CLN</li>
							<li>LN-message; library to help apps "speak lightning"</li>
							<li>ROYGIBIV: BOLT12 "prism" plugin for CLN</li>
							<li>LNPlay: interactive lightning educational tool</li>
						</ul>
					</div>
				</div>
				<div class="mt-10 flex">
					<a
						href={GITHUB_URL}
						rel="noopener noreferrer"
						target="_blank"
						class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400"
						>Learn more <span aria-hidden="true">&rarr;</span></a
					>
				</div>
			</div>
		</div>
	</div>
</div>
