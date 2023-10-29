<script lang="ts">
	import ClamsIcon from '$lib/icons/clams'
	import Socials from './Socials.svelte'
</script>

<section
	class="bg-white dark:bg-black flex flex-col items-center dark:text-white px-5 py-10 gap-10"
>
	<div class="w-40">
		{@html ClamsIcon}
	</div>
	<Socials showThemeToggle={false} />
</section>
