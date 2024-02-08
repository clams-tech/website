<script>
	import { ACCOUNTING_APP_URL } from '$lib/constants'
</script>

<div class="bg-white dark:bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<p class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
				Pricing
			</p>
		</div>
		<!-- xs to lg -->
		<div class="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
			<section class="p-8">
				<h3 id="tier-basic" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
					Basic
				</h3>
				<p class="mt-2 flex items-baseline gap-x-1 text-gray-900 dark:text-white">
					<span class="text-4xl font-bold">$9</span>
					<span class="text-sm font-semibold">/month</span>
				</p>
				<a
					href="#"
					aria-describedby="tier-basic"
					class="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-indigo-600 dark:text-indigo-400 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
					>Buy plan</a
				>
				<ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-900 dark:text-white">
					<li>
						<ul role="list" class="space-y-4">
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
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
								<span> Integrations </span>
							</li>
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
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
								<span> Shared links </span>
							</li>
						</ul>
					</li>
					<li>
						<ul role="list" class="space-y-4">
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
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
								<span> Advanced analytics </span>
							</li>
						</ul>
					</li>
					<li>
						<ul role="list" class="space-y-4">
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
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
								<span> 24/7 online support </span>
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<section class="p-8 rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200">
				<h3
					id="tier-essential"
					class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
				>
					Essential
				</h3>
				<p class="mt-2 flex items-baseline gap-x-1 text-gray-900 dark:text-white">
					<span class="text-4xl font-bold">$29</span>
					<span class="text-sm font-semibold">/month</span>
				</p>
				<a
					href="#"
					aria-describedby="tier-essential"
					class="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600 text-white hover:bg-indigo-500"
					>Buy plan</a
				>
				<ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-900 dark:text-white">
					<li>
						<ul role="list" class="space-y-4">
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
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
								<span> Integrations </span>
							</li>
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
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
								<span> Shared links </span>
							</li>
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
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
								<span> Importing and exporting </span>
							</li>
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
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
								<span>
									Team members
									<span class="text-sm leading-6 text-gray-500 dark:text-400">(Up to 20 users)</span
									>
								</span>
							</li>
						</ul>
					</li>
					<li>
						<ul role="list" class="space-y-4">
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
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
								<span> Advanced analytics </span>
							</li>
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
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
								<span> Basic reports </span>
							</li>
						</ul>
					</li>
					<li>
						<ul role="list" class="space-y-4">
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
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
								<span> 24/7 online support </span>
							</li>
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
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
								<span> Quarterly product workshops </span>
							</li>
							<li class="flex gap-x-3">
								<svg
									class="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
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
								<span> Priority phone support </span>
							</li>
						</ul>
					</li>
				</ul>
			</section>
		</div>

		<!-- lg+ -->
		<div class="isolate mt-20 hidden lg:block">
			<div class="relative -mx-8">
				<div class="absolute inset-x-4 inset-y-0 -z-10 flex">
					<div class="flex w-1/3 px-4" style="margin-left: 65%" aria-hidden="true">
						<div
							class="w-full rounded-t-xl border-x border-t border-gray-900/10 dark:border-white/10 bg-gray-400/5 dark:bg-white/5"
						/>
					</div>
				</div>
				<table class="w-full table-fixed border-separate border-spacing-x-8 text-left">
					<caption class="sr-only"> Pricing plan comparison </caption>
					<colgroup>
						<col class="w-1/3" />
						<col class="w-1/3" />
						<col class="w-1/3" />
					</colgroup>
					<thead>
						<tr>
							<td />
							<th scope="col" class="px-6 pt-6 xl:px-8 xl:pt-8">
								<div class="text-sm font-semibold leading-7 text-gray-900 dark:text-white">
									Basic
								</div>
							</th>
							<th scope="col" class="px-6 pt-6 xl:px-8 xl:pt-8">
								<div class="text-sm font-semibold leading-7 text-gray-900 dark:text-white">
									Essential
								</div>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row"><span class="sr-only">Price</span></th>
							<td class="px-6 pt-2 xl:px-8">
								<div class="flex items-baseline gap-x-1 text-gray-900 dark:text-white">
									<span class="text-4xl font-bold">$9</span>
									<span class="text-sm font-semibold leading-6">/month</span>
								</div>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={ACCOUNTING_APP_URL}
									class="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-indigo-600 dark:text-indigo-400 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
									>Get Started</a
								>
							</td>
							<td class="px-6 pt-2 xl:px-8">
								<div class="flex items-baseline gap-x-1 text-gray-900 dark:text-white">
									<span class="text-4xl font-bold">$29</span>
									<span class="text-sm font-semibold leading-6">/month</span>
								</div>
								<a
									href="#"
									class="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600 text-white hover:bg-indigo-500"
									>Buy plan</a
								>
							</td>
						</tr>
						<tr>
							<th
								scope="colgroup"
								colspan="4"
								class="pb-4 text-sm font-semibold leading-6 text-gray-900 dark:text-white pt-8"
							>
								Features

								<div class="absolute inset-x-8 mt-4 h-px bg-gray-900/10 dark:bg-white/10" />
							</th>
						</tr>
						<tr>
							<th
								scope="row"
								class="py-4 text-sm font-normal leading-6 text-gray-900 dark:text-white"
							>
								Integrations
								<div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5 dark:bg-white/5" />
							</th>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-indigo-600 dark:text-indigo-400"
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
								<span class="sr-only">Included in Basic</span>
							</td>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-indigo-600 dark:text-indigo-400"
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
								<span class="sr-only">Included in Essential</span>
							</td>
						</tr>
						<tr>
							<th
								scope="row"
								class="py-4 text-sm font-normal leading-6 text-gray-900 dark:text-white"
							>
								Shared links
								<div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5 dark:bg-white/5" />
							</th>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-indigo-600 dark:text-indigo-400"
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
								<span class="sr-only">Included in Basic</span>
							</td>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-indigo-600 dark:text-indigo-400"
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
								<span class="sr-only">Included in Essential</span>
							</td>
						</tr>
						<tr>
							<th
								scope="row"
								class="py-4 text-sm font-normal leading-6 text-gray-900 dark:text-white"
							>
								Importing and exporting
								<div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5 dark:bg-white/5" />
							</th>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="sr-only">Not included in Basic</span>
							</td>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-indigo-600 dark:text-indigo-400"
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
								<span class="sr-only">Included in Essential</span>
							</td>
						</tr>
						<tr>
							<th
								scope="row"
								class="py-4 text-sm font-normal leading-6 text-gray-900 dark:text-white"
							>
								Team members
								<div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5 dark:bg-white/5" />
							</th>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="sr-only">Not included in Basic</span>
							</td>
							<td class="px-6 py-4 xl:px-8">
								<div class="text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
									Up to 20 users
								</div>
							</td>
						</tr>

						<tr>
							<th
								scope="colgroup"
								colspan="4"
								class="pb-4 text-sm font-semibold leading-6 text-gray-900 dark:text-white pt-16"
							>
								Reporting
								<div class="absolute inset-x-8 mt-4 h-px bg-gray-900/10 dark:bg-white/10" />
							</th>
						</tr>
						<tr>
							<th
								scope="row"
								class="py-4 text-sm font-normal leading-6 text-gray-900 dark:text-white"
							>
								Advanced analytics
								<div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5 dark:bg-white/5" />
							</th>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-indigo-600 dark:text-indigo-400"
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
								<span class="sr-only">Included in Basic</span>
							</td>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-indigo-600 dark:text-indigo-400"
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
								<span class="sr-only">Included in Essential</span>
							</td>
						</tr>
						<tr>
							<th
								scope="row"
								class="py-4 text-sm font-normal leading-6 text-gray-900 dark:text-white"
							>
								Basic reports
								<div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5 dark:bg-white/5" />
							</th>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="sr-only">Not included in Basic</span>
							</td>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-indigo-600 dark:text-indigo-400"
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
								<span class="sr-only">Included in Essential</span>
							</td>
						</tr>
						<tr>
							<th
								scope="row"
								class="py-4 text-sm font-normal leading-6 text-gray-900 dark:text-white"
							>
								Professional reports
								<div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5 dark:bg-white/5" />
							</th>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="sr-only">Not included in Basic</span>
							</td>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="sr-only">Not included in Essential</span>
							</td>
						</tr>
						<tr>
							<th
								scope="row"
								class="py-4 text-sm font-normal leading-6 text-gray-900 dark:text-white"
							>
								Custom report builder
								<div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5 dark:bg-white/5" />
							</th>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="sr-only">Not included in Basic</span>
							</td>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="sr-only">Not included in Essential</span>
							</td>
						</tr>

						<tr>
							<th
								scope="colgroup"
								colspan="4"
								class="pb-4 text-sm font-semibold leading-6 text-gray-900 dark:text-white pt-16"
							>
								Support
								<div class="absolute inset-x-8 mt-4 h-px bg-gray-900/10 dark:bg-white/10" />
							</th>
						</tr>
						<tr>
							<th
								scope="row"
								class="py-4 text-sm font-normal leading-6 text-gray-900 dark:text-white"
							>
								24/7 online support
								<div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5 dark:bg-white/5" />
							</th>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-indigo-600 dark:text-indigo-400"
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
								<span class="sr-only">Included in Basic</span>
							</td>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-indigo-600 dark:text-indigo-400"
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
								<span class="sr-only">Included in Essential</span>
							</td>
						</tr>
						<tr>
							<th
								scope="row"
								class="py-4 text-sm font-normal leading-6 text-gray-900 dark:text-white"
							>
								Quarterly product workshops
								<div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5 dark:bg-white/5" />
							</th>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="sr-only">Not included in Basic</span>
							</td>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-indigo-600 dark:text-indigo-400"
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
								<span class="sr-only">Included in Essential</span>
							</td>
						</tr>
						<tr>
							<th
								scope="row"
								class="py-4 text-sm font-normal leading-6 text-gray-900 dark:text-white"
							>
								Priority phone support
								<div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5 dark:bg-white/5" />
							</th>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="sr-only">Not included in Basic</span>
							</td>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-indigo-600 dark:text-indigo-400"
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
								<span class="sr-only">Included in Essential</span>
							</td>
						</tr>
						<tr>
							<th
								scope="row"
								class="py-4 text-sm font-normal leading-6 text-gray-900 dark:text-white"
							>
								1:1 onboarding tour
								<div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5 dark:bg-white/5" />
							</th>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="sr-only">Not included in Basic</span>
							</td>
							<td class="px-6 py-4 xl:px-8">
								<svg
									class="mx-auto h-5 w-5 text-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="sr-only">Not included in Essential</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
