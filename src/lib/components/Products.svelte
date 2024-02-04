<script lang="ts">
	import Button from '$lib/elements/Button.svelte'
	import RemoteIcon from '$lib/icons/remote'
	import AbacusIcon from '$lib/icons/abacus'

	const products = [
		{
			icon: RemoteIcon,
			title: 'REMOTE',
			description: 'The essential interface for your Core Lightning node.',
			href: '/remote'
		},
		{
			icon: AbacusIcon,
			title: 'ACCOUNTING',
			description: 'The accountancy suite for Bitcoin financial management.',
			href: '/accounting'
		}
	]
</script>

<section class="px-6 py-[72px] md:py-[96px] flex items-center justify-center w-full">
	<div class="flex flex-col justify-between w-full gap-10 text-center max-w-[900px]">
		<div class="flex flex-wrap justify-between gap-10">
			{#each products as { icon, title, description, href }}
				<div
					class="m-auto grid gap-5 w-full max-w-[400px] py-10 px-6 rounded-2xl border border-slate-300 dark:border-dark-border hover:shadow-lg hover:dark:shadow-slate-900"
				>
					<div class="max-w-[150px] m-auto">
						{@html icon}
					</div>
					<h2 class="text-3xl font-bold text-light-orange">{title}</h2>
					<h2 class="text-2xl">
						{description}
					</h2>
					<a class="w-[145px] m-auto mt-5" {href}>
						<Button text={href ? 'Learn More' : 'Coming soon'} disabled={!href} />
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
