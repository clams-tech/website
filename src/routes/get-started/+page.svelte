<script>
	import { REMOTE_APP_URL, DOCS_URL } from '$lib/constants'
	import WindowsIcon from '$lib/icons/windows'
	import AppleIcon from '$lib/icons/apple'
	import LinuxIcon from '$lib/icons/linux'
	import UbuntuIcon from '$lib/icons/ubuntu'
	import Button from '$lib/elements/Button.svelte'

	export let data
	// @TODO = use the data from github to dynamically update the download links for each OS
</script>

<section class="flex flex-col items-center px-6 pt-32 pb-20">
	<div class="flex flex-col w-full max-w-2xl text-center gap-16">
		<h1 class="text-6xl font-bold">Get Started</h1>
		<!-- Desktop app -->
		<div class="flex flex-col items-center">
			<h2 class="text-[20px] font-bold text-light-purple dark:text-dark-purple">DESKTOP DEVICES</h2>
			<p class="mt-4 text-[20px]">
				For the optimal experience, we recommend downloading the Native Desktop App. Please select
				the option that corresponds to your operating system:
			</p>
			<div class="mt-8 flex gap-8 flex-wrap">
				<a
					class="flex flex-col items-center underline"
					href="https://github.com/clams-tech/App/releases/download/clams-2.0.0-beta.4/Clams_2.0.0_x64-setup.exe"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="w-10 xs:w-12">
						{@html WindowsIcon}
					</div>
					<p>Windows</p>
					<p>Clams_2.0.0_x64-setup.exe</p></a
				>
				<a
					class="flex flex-col items-center underline"
					href="https://github.com/clams-tech/App/releases/download/clams-2.0.0-beta.4/Clams_2.0.0_x64.dmg"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="w-10 xs:w-12">
						{@html AppleIcon}
					</div>
					<p>MacOS</p>
					<p>Clams_2.0.0_x64.dmg</p></a
				>
				<a
					class="flex flex-col items-center underline"
					href="https://github.com/clams-tech/App/releases/download/clams-2.0.0-beta.4/clams_2.0.0_amd64.AppImage"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="w-10 xs:w-12">
						{@html LinuxIcon}
					</div>
					<p>Linux</p>
					<p>clams_2.0.0_amd64.AppImage</p></a
				>
				<a
					class="flex flex-col items-center underline"
					href="https://github.com/clams-tech/App/releases/download/clams-2.0.0-beta.4/clams_2.0.0_amd64.deb"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="w-10 xs:w-12">
						{@html UbuntuIcon}
					</div>
					<p>Ubuntu</p>
					<p>clams_2.0.0_amd64.deb</p></a
				>
			</div>
		</div>
		<!-- PWA -->
		<div class="flex flex-col items-center">
			<h2 class="text-[20px] font-bold text-light-purple dark:text-dark-purple">MOBILE DEVICES</h2>
			<p class="mt-4 text-[20px]">
				If you'd like to use Clams on your mobile device, you can use the Progressive Web App:
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
				<a class={'w-[134px]'} href={REMOTE_APP_URL}>
					<Button text="App" primary />
				</a>
			</div>
		</div>
	</div>
</section>
