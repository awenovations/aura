<script lang="ts">
	import classNames from 'classnames';
	import { createEventDispatcher } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type $$Props = Omit<Partial<SvelteHTMLElements['a']>, 'href'> & {
		href: string;
	};

	const dispatch = createEventDispatcher<{
		click: Event & { target: HTMLAnchorElement };
	}>();

	function forwardEvent(e: Event) {
		dispatch(e.type as any, e as Event & { target: HTMLAnchorElement });
	}

	export let href: string;
</script>

<a {href} {...$$props} class={classNames($$props.class, 'aura-link')} on:click={forwardEvent}>
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
