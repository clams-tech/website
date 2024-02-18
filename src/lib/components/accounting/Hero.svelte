<script lang="ts">
	import { scrollto } from 'svelte-scrollto'
	import ClamsIcon from '$lib/icons/clams'
	import ClamsAltIcon from '$lib/icons/clams-alt'
	import AbacusIcon from '$lib/icons/abacus'
	import BitcoinIcon from '$lib/icons/bitcoin-symbol'
	import LightningIcon from '$lib/icons/lightning-circle'
	import { ACCOUNTING_APP_URL } from '$lib/constants'

	let showMobileMenu = false
</script>

<div class="bg-white dark:bg-gray-900">
	<header class="absolute inset-x-0 top-0 z-50">
		<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
			<div class="flex lg:flex-1">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">Clams</span>
					<div class="w-10">
						{@html ClamsAltIcon}
					</div>
				</a>
			</div>
			<div class="flex lg:hidden">
				<button
					on:click={() => (showMobileMenu = true)}
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
			<div class="hidden lg:flex lg:gap-x-12">
				<span
					use:scrollto={'#features'}
					class="cursor-pointer text-sm font-semibold leading-6 text-gray-900 dark:text-white dark:text-white"
					>Features</span
				>
				<span
					use:scrollto={'#pricing'}
					class="cursor-pointer text-sm font-semibold leading-6 text-gray-900 dark:text-white dark:text-white"
					>Pricing</span
				>
			</div>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={ACCOUNTING_APP_URL}
					class="text-sm font-semibold leading-6 text-gray-900 dark:text-white dark:text-white"
					>Get Started<span aria-hidden="true">&rarr;</span></a
				>
			</div>
		</nav>
		<!-- Mobile menu, show/hide based on menu open state. -->
		<div class:hidden={!showMobileMenu} role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="fixed inset-0 z-50" />
			<div
				class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">Clams</span>
						<div class="w-10">
							{@html ClamsAltIcon}
						</div>
					</a>
					<button
						on:click={() => (showMobileMenu = false)}
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<span
								use:scrollto={'#features'}
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
								>Features</span
							>
							<span
								use:scrollto={'#pricing'}
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
								>Pricing</span
							>
						</div>
						<div class="py-6">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={ACCOUNTING_APP_URL}
								class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
								>Get Started</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>

	<div class="relative isolate px-6 lg:px-8">
		<div
			class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			/>
		</div>
		<div class="mx-auto max-w-2xl py-32">
			<div class="text-center">
				<div class="w-64 m-auto">
					{@html ClamsIcon}
				</div>
				<div class="mt-8 flex items-center justify-center gap-4">
					<!-- <div class="w-12">
						{@html AbacusIcon}
					</div> -->
					<h2
						class="font-bold tracking-tight text-gray-900 dark:text-white dark:text-white text-6xl"
					>
						Accounting
					</h2>
				</div>
				<div class="mt-8 flex justify-center items-center gap-2">
					<!-- <div class="w-10">
						{@html BitcoinIcon}
					</div> -->
					<div>
						<p class="text-4xl leading-8 text-gray-600 dark:text-gray-300 font-bold italic">
							Visualize Your Sats Flow.
						</p>
					</div>
					<!-- <div class="w-10">
						{@html LightningIcon}
					</div> -->
				</div>

				<div class="mt-8 flex items-center justify-center gap-x-6">
					<a
						href={ACCOUNTING_APP_URL}
						target="_blank"
						rel="noopener noreferrer"
						class="flex gap-2 rounded-md bg-indigo-600 px-7 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						<div class="w-6">
							{@html AbacusIcon}
						</div>
						App</a
					>
					<a
						href="#"
						class="text-md font-semibold leading-6 text-gray-900 dark:text-white dark:text-white"
						>Video <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
		</div>
		<div
			class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			/>
		</div>
	</div>
</div>
