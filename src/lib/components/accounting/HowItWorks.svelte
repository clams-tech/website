<script>
	import { ACCOUNTING_APP_URL, DOCS_URL } from '$lib/constants'
</script>

<div class="bg-white dark:bg-gray-900">
	<div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				How it works
			</h2>
			<nav class="mt-16" aria-label="Progress">
				<ol role="list" class="overflow-hidden">
					<li class="relative pb-10">
						<div
							class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600"
							aria-hidden="true"
						/>
						<!-- Complete Step -->
						<a href="#" class="group relative flex items-start">
							<span class="flex h-9 items-center">
								<span
									class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800"
								>
									<svg
										class="h-5 w-5 text-white"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
							</span>
							<span class="ml-4 flex min-w-0 flex-col">
								<span class="text-sm font-medium">Create account</span>
								<span class="text-sm text-gray-500">Vitae sed mi luctus laoreet.</span>
							</span>
						</a>
					</li>
					<li class="relative pb-10">
						<div
							class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
							aria-hidden="true"
						/>
						<!-- Current Step -->
						<a href="#" class="group relative flex items-start" aria-current="step">
							<span class="flex h-9 items-center" aria-hidden="true">
								<span
									class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white"
								>
									<span class="h-2.5 w-2.5 rounded-full bg-indigo-600" />
								</span>
							</span>
							<span class="ml-4 flex min-w-0 flex-col">
								<span class="text-sm font-medium text-indigo-600 dark:text-indigo-400"
									>Profile information</span
								>
								<span class="text-sm text-gray-500"
									>Cursus semper viverra facilisis et et some more.</span
								>
							</span>
						</a>
					</li>
					<li class="relative pb-10">
						<div
							class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
							aria-hidden="true"
						/>
						<!-- Upcoming Step -->
						<a href="#" class="group relative flex items-start">
							<span class="flex h-9 items-center" aria-hidden="true">
								<span
									class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400"
								>
									<span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
								</span>
							</span>
							<span class="ml-4 flex min-w-0 flex-col">
								<span class="text-sm font-medium text-gray-500">Business information</span>
								<span class="text-sm text-gray-500">Penatibus eu quis ante.</span>
							</span>
						</a>
					</li>
					<li class="relative pb-10">
						<div
							class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
							aria-hidden="true"
						/>
						<!-- Upcoming Step -->
						<a href="#" class="group relative flex items-start">
							<span class="flex h-9 items-center" aria-hidden="true">
								<span
									class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400"
								>
									<span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
								</span>
							</span>
							<span class="ml-4 flex min-w-0 flex-col">
								<span class="text-sm font-medium text-gray-500">Theme</span>
								<span class="text-sm text-gray-500">Faucibus nec enim leo et.</span>
							</span>
						</a>
					</li>
					<li class="relative">
						<!-- Upcoming Step -->
						<a href="#" class="group relative flex items-start">
							<span class="flex h-9 items-center" aria-hidden="true">
								<span
									class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400"
								>
									<span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
								</span>
							</span>
							<span class="ml-4 flex min-w-0 flex-col">
								<span class="text-sm font-medium text-gray-500">Preview</span>
								<span class="text-sm text-gray-500"
									>Iusto et officia maiores porro ad non quas.</span
								>
							</span>
						</a>
					</li>
				</ol>
			</nav>

			<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
				Import Your Wallets & Exchanges
			</p>
			<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
				Classify Your Transactions Automatically
			</p>
			<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
				Track Cost Basis And Historical Prices
			</p>
			<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
				Download Cap Gains report
			</p>
			<!-- <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
				With transactions spread across cold storage, lightning nodes, exchanges, mobile apps, and
				more, managing your finances can be a daunting task for Bitcoiners.
			</p>
			<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
				Clams simplifies this process by consolidating your transactions into one secure and local
				hub. Effortlessly track and report on your transactions with a single click.
			</p> -->
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={ACCOUNTING_APP_URL}
					class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Get Started</a
				>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={DOCS_URL}
					class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
					>Learn More <span aria-hidden="true">→</span></a
				>
			</div>
		</div>
	</div>
</div>
