<script>
	import { APP_URL, DOCS_URL } from '$lib/constants'
	import WindowsIcon from '$lib/icons/windows'
	import AppleIcon from '$lib/icons/apple'
	import LinuxIcon from '$lib/icons/linux'
	import Button from '$lib/elements/Button.svelte'

	export let data
	console.log(`data = `, data)
</script>

<section class="flex flex-col items-center px-6 pt-28 pb-20">
	<div class="flex flex-col w-full max-w-3xl text-center gap-16">
		<h1 class="text-6xl font-bold">Get Started</h1>
		<!-- Desktop app -->
		<div class="flex flex-col items-center">
			<p class="text-[20px]">
				For the optimal experience, we recommend using our Native Desktop App. Please select the
				option that corresponds to your operating system:
			</p>
			<div class="mt-8 flex gap-8">
				<a
					class="flex flex-col items-center underline"
					href="https://github.com/clams-tech/App/archive/refs/tags/1.8.4.zip"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="w-10 xs:w-12">
						{@html WindowsIcon}
					</div>
					<p>Windows</p>
					<p>v2.0</p></a
				>

				<a
					class="flex flex-col items-center underline"
					href="https://github.com/clams-tech/App/archive/refs/tags/1.8.4.zip"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="w-10 xs:w-12">
						{@html AppleIcon}
					</div>
					<p>MacOS</p>
					<p>v2.0</p></a
				>
				<a
					class="flex flex-col items-center underline"
					href="https://github.com/clams-tech/App/archive/refs/tags/1.8.4.zip"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="w-10 xs:w-12">
						{@html LinuxIcon}
					</div>
					<p>Linux</p>
					<p>v2.0</p></a
				>
			</div>
		</div>
		<!-- PWA -->
		<div class="flex flex-col items-center">
			<p class="text-[20px]">
				If you'd like to use Clams on your mobile device, you can do so through our Progressive Web
				App:
			</p>
			<div class="mt-8 flex gap-6">
				<a
					href={`${DOCS_URL}/installation/`}
					target="_blank"
					rel="noopener noreferrer"
					class={'w-[134px]'}
				>
					<Button text="Guide" />
				</a>
				<a class={'w-[134px]'} href="https://app.clams.tech">
					<Button text="App" primary />
				</a>
			</div>
		</div>
	</div>
</section>
