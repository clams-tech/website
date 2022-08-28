<script lag ts>
	import Button from '$lib/elements/Button.svelte'
	import Link from '$lib/icons/Link.svelte'
	import { t } from '$lib/i18n/translations'
</script>

<a href="https://app.clams.tech">
	<Button text={$t('app.navigation.app')}>
		<div slot="iconRight" class="w-8">
			<Link />
		</div>
	</Button>
</a>
