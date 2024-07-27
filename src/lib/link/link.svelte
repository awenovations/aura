<script lang="ts">
	import classNames from 'classnames';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type $$Props = Omit<Partial<SvelteHTMLElements['a']>, 'href'> & {
		href: string;
	};

	export let href: string;
</script>

<a {href} {...$$props} class={classNames($$props.class, 'aura-link')}>
	<slot />
</a>

<style lang="scss">
	.aura-link {
		cursor: pointer;
		color: var(--aura-link-color);
		text-decoration: none;

		&:hover,
		&:active {
			text-decoration: underline;
		}

		&:active {
			font: var(--aura-default-semibold);
		}
	}
</style>
