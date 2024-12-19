<script lang="ts">
	import { BLOG_URL } from '$lib/constants'
	import NostrIcon from '$lib/icons/nostr'
	import ContentContainer from './shared/ContentContainer.svelte'
</script>

<ContentContainer title="A note from us" scrollTo="note">
	<div class="mt-8 md:mt-12 flex flex-wrap md:flex-nowrap gap-10">
		<div class="flex flex-col gap-5">
			<h2 class="">Hey!</h2>
			<h2 class="">
				We're Aaron and John, a couple of musicians turned software engineers who took the orange
				pill, and like so many others, we couldn't think of anything else. Thanks to Bitcoin, we're
				not just excited about the future – we're on a mission to shape it.
			</h2>
			<h2 class="">
				Inspired by the optimism and talent found in this community, we decided to use our skills to
				build Clams. Why stop at having the best money? We also need the best tools to help
				Bitcoiners manage their finances in a self-sovereign way.
			</h2>
			<h2 class="">
				We are committed to keeping the app accessible to as many people as possible, which is why
				our core features will always be free. To ensure the long-term sustainability and continuous
				improvement of Clams, we're exploring options for paid add-on services. By choosing these
				premium offerings, you'll not only support the project but also unlock even more powerful
				tools to bring you closer to life on a Bitcoin Standard. More details on that <a
					class="underline"
					href={`${BLOG_URL}/hello-world`}
					target="_blank"
					rel="noopener noreferrer">here</a
				>.
			</h2>
			<h2 class="">We are our first customers, and we hope you will join us.</h2>
			<h2 class="">Cheers, Aaron & John</h2>
		</div>
		<div class="flex flex-wrap justify-around gap-5 w-full">
			<!-- Aaron -->
			<div class="flex flex-col items-center gap-3 w-1/2 md:w-auto">
				<div class="w-[200px] h-[200px] rounded-full overflow-hidden">
					<img
						class="w-full h-full object-cover"
						src="https://avatars.githubusercontent.com/u/29873495?v=4"
						alt="aaron"
					/>
				</div>
				<a
					class="font-bold text-[14px] text-light-purple dark:text-dark-purple flex items-center"
					href="https://njump.me/nprofile1qqstz6qhucarrd9dhf04klcp3ewfesr2a2h05jaz5j7gc9kps2x7m6scpu9hy"
					target="_blank"
					rel="noopener noreferrer"
				>
					AARON
					<div class="w-6 mx-2">
						{@html NostrIcon}
					</div>
				</a>
			</div>
			<!-- John -->
			<div class="flex flex-col items-center gap-3 w-1/2 md:w-auto">
				<div class="w-[200px] h-[200px] rounded-full overflow-hidden">
					<img
						class="w-full h-full object-cover"
						src="https://avatars.githubusercontent.com/u/30157175?v=4"
						alt="john"
					/>
				</div>
				<a
					class="font-bold text-[14px] text-light-purple dark:text-dark-purple flex items-center"
					href="https://njump.me/nprofile1qqs9zfzdczszd6amf8d8lnxq92kpqx8hulucfwtmfxmyg7ma4dv422stjxth3"
					target="_blank"
					rel="noopener noreferrer"
				>
					JOHN
					<div class="w-6 mx-2">
						{@html NostrIcon}
					</div>
				</a>
			</div>
		</div>
	</div>
</ContentContainer>
