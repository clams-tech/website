<script lang="ts">
	import ClamsIcon from '$lib/icons/clams'
	import ClamsAltIcon from '$lib/icons/clams-alt'
	import NostrIcon from '$lib/icons/nostr'
	import DiscordIcon from '$lib/icons/discord'
	import XIcon from '$lib/icons/x'
	import GithubIcon from '$lib/icons/github'
	import { DISCORD_URL, DOCS_URL } from '$lib/constants'

	let socials = [
		{
			icon: NostrIcon,
			title: 'Nostr',
			href: 'https://nostr.at/npub136hk9wu6xnrz64kfaapsvgc5rfnylz4djlx4w30w66h6cy48vhws3gth6q'
		},
		{ icon: DiscordIcon, title: 'Discord', href: DISCORD_URL },
		{ icon: GithubIcon, title: 'GitHub', href: 'https://github.com/clams-tech' },
		{ icon: XIcon, title: 'Twitter', href: 'https://twitter.com/clamstech' }
	]
</script>

<footer class="bg-gray-900" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<div class="w-6">
					{@html ClamsAltIcon}
				</div>
				<p class="text-sm leading-6 text-gray-300">Building for a Bitcoin Standard.</p>
				<div class="flex items-center space-x-6">
					{#each socials as { href, title, icon }}
						<a
							{href}
							class="text-gray-500 hover:text-gray-400"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span class="sr-only">{title}</span>
							<div class="w-6 mx-2">
								{@html icon}
							</div>
						</a>
					{/each}
				</div>
			</div>
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-white">Apps</h3>
						<ul class="mt-6 space-y-4">
							<li>
								<a href="/remote" class="text-sm leading-6 text-gray-300 hover:text-white">Remote</a
								>
							</li>
							<li>
								<a href="/abacus" class="text-sm leading-6 text-gray-300 hover:text-white">Abacus</a
								>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-white">Resources</h3>
						<ul class="mt-6 space-y-4">
							<li>
								<a
									href={DOCS_URL}
									class="text-sm leading-6 text-gray-300 hover:text-white"
									target="_blank"
									rel="noopener noreferrer">Documentation</a
								>
							</li>
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-white">Company</h3>
						<ul class="mt-6 space-y-4">
							<li>
								<a href="/#note" class="text-sm leading-6 text-gray-300 hover:text-white">About</a>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
						<ul class="mt-6 space-y-4">
							<li>
								<a href="/privacy" class="text-sm leading-6 text-gray-300 hover:text-white"
									>Privacy Policy</a
								>
							</li>
							<li>
								<a href="/terms" class="text-sm leading-6 text-gray-300 hover:text-white"
									>Terms of Service</a
								>
							</li>
							<li>
								<a href="/disclaimer" class="text-sm leading-6 text-gray-300 hover:text-white"
									>Disclaimer</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-xs leading-5 text-gray-400">&copy; 2024 Clams, LLC. All rights reserved.</p>
		</div>
	</div>
</footer>
