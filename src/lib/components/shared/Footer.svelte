<script lang="ts">
	import ClamsAltIcon from '$lib/icons/clams-alt'
	import NostrIcon from '$lib/icons/nostr'
	import DiscordIcon from '$lib/icons/discord'
	import XIcon from '$lib/icons/x'
	import GithubIcon from '$lib/icons/github'
	import { BLOG_URL, DISCORD_URL, DOCS_URL, GITHUB_URL } from '$lib/constants'
	import ThemeToggle from '$lib/components/shared/ThemeToggle.svelte'

	export let isRemoteRoute = false
	$: backgroundStyles = isRemoteRoute ? 'bg-white dark:bg-black' : 'bg-white dark:bg-gray-900'

	let socials = [
		{
			icon: NostrIcon,
			title: 'Nostr',
			href: 'https://nostr.at/npub136hk9wu6xnrz64kfaapsvgc5rfnylz4djlx4w30w66h6cy48vhws3gth6q'
		},
		{ icon: DiscordIcon, title: 'Discord', href: DISCORD_URL },
		{ icon: GithubIcon, title: 'GitHub', href: GITHUB_URL },
		{ icon: XIcon, title: 'Twitter', href: 'https://twitter.com/clamstech' }
	]

	const currentDate = new Date()
	const currentYear = currentDate.getFullYear()
</script>

<footer class={backgroundStyles} aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-5xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<div class="w-12">
					{@html ClamsAltIcon}
				</div>
				<p class="leading-6 text-gray-600 dark:text-gray-300">Building for a Bitcoin Standard.</p>
				<div class="flex items-center space-x-6">
					{#each socials as { href, title, icon }}
						<a
							{href}
							class="text-gray-600 dark:text-gray-300 hover:text-gray-400"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span class="sr-only">{title}</span>
							<div class="w-8 mx-2">
								{@html icon}
							</div>
						</a>
					{/each}
				</div>
			</div>
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Apps</h3>
						<ul class="mt-6 space-y-4">
							<li>
								<a
									href="/remote"
									class="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white"
									>Remote</a
								>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Resources</h3>
						<ul class="mt-6 space-y-4">
							<li>
								<a
									href={BLOG_URL}
									class="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white"
									target="_blank"
									rel="noopener noreferrer">Blog</a
								>
							</li>
							<li>
								<a
									href={DOCS_URL}
									class="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white"
									target="_blank"
									rel="noopener noreferrer">Documentation</a
								>
							</li>
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Company</h3>
						<ul class="mt-6 space-y-4">
							<li>
								<a
									href="/#note"
									class="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white"
									>About</a
								>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Legal</h3>
						<ul class="mt-6 space-y-4">
							<li>
								<a
									href="/privacy"
									class="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white"
									>Privacy Policy</a
								>
							</li>
							<li>
								<a
									href="/terms"
									class="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white"
									>Terms of Service</a
								>
							</li>
							<li>
								<a
									href="/disclaimer"
									class="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white"
									>Disclaimer</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-16 border-t border-gray-200 dark:border-gray-600 pt-8 sm:mt-20 lg:mt-24">
			<ThemeToggle />
			<div class="flex gap-1 mt-6 text-xs leading-5 text-gray-600 dark:text-gray-300">
				<p>&copy;</p>
				<p>{`${currentYear} Clams, LLC. All rights reserved.`}</p>
			</div>
		</div>
	</div>
</footer>
