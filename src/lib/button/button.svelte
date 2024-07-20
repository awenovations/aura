<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type * as Props from './props';

	import ProgressRing from '$lib/progress/progress-ring.svelte';

	export let kind: Props.ButtonKind = 'filled';
	export let variant: Props.ButtonVariant = 'primary';
	export let size: Props.ButtonSize = 'default';
	export let fullWidth: boolean = false;
	export let loading: boolean = false;
	export let left: boolean = false;

	const dispatch = createEventDispatcher<{
		click: NonNullable<unknown>;
	}>();

	/**
	 * Optional click handler
	 */
	function onClick(event) {
		dispatch('click', event);
	}
</script>

<button
	{...$$restProps}
	class:loading
	class:isFilled={kind === 'filled'}
	class:isOutlined={kind === 'outlined'}
	class:isPrimary={variant === 'primary'}
	class:isSecondary={variant === 'secondary'}
	class:isTertiary={variant === 'tertiary'}
	class:isDefaultSize={size === 'default'}
	class:isSmall={size === 'small'}
	class:fullWidth
	class:left
	on:click={onClick}
	class={`aura-button ${$$restProps.class}`}
>
	<div class="content">
		<slot name="icon-before" />
		<slot>Aura Button</slot>
		{#if loading}
			<ProgressRing {variant} />
		{/if}
	</div>
</button>

<style lang="scss">
	.aura-button {
		&.loading {
			padding-right: 22px;

			:global(.aura-progress-ring) {
				width: 24px;
				height: 24px;
			}

			&.isSmall {
				padding-right: 12px;

				:global(.aura-progress-ring) {
					width: 14px;
					height: 14px;
				}
			}
		}

		&.isFilled {
			&.isPrimary {
				--bg: var(--aura-primary-30);
				--bg-hover: var(--aura-primary-40);
				--bg-active: var(--aura-primary-20);
				--text-color: var(--aura-font-color);
				--text-hover-opacity: 0.5;
			}

			&.isSecondary {
				--bg: var(--aura-secondary-30);
				--bg-hover: var(--aura-secondary-40);
				--bg-active: var(--aura-secondary-20);
				--text-color: var(--aura-white-smoke);
				--text-hover-opacity: 1;
			}

			&.isTertiary {
				--bg: var(--aura-tertiary-60);
				--bg-hover: var(--aura-tertiary-70);
				--bg-active: var(--aura-tertiary-30);
				--text-color: var(--aura-white-smoke);
				--text-hover-opacity: 1;
			}
		}

		&.isOutlined {
			--bg: none;
			--bg-hover: none;
			--bg-active: none;
			--text-hover-opacity: 0.4;
			--border-size: 1px;
			--border: var(--border-size) solid;
			--text-color: var(--aura-font-color);

			&.isPrimary {
				--border-color: var(--aura-primary-40);
				--border-hover-color: var(--aura-primary-50);
				--border-active-color: var(--aura-primary-20);
			}

			&.isSecondary {
				--border-color: var(--aura-secondary-20);
				--border-hover-color: var(--aura-secondary-30);
				--border-active-color: var(--aura-secondary-10);
			}

			&.isTertiary {
				--border-color: var(--aura-tertiary-60);
				--border-hover-color: var(--aura-tertiary-70);
				--border-active-color: var(--aura-tertiary-30);
			}
		}

		&.isDefaultSize {
			--gap: var(--aura-button-default-padding-vertical);
			--padding-horizontal: var(--aura-button-default-padding-horizontal);
			--padding-vertical: var(--aura-button-default-padding-vertical);
			--font-size: var(--aura-button-default);
		}

		&.isSmall {
			--gap: var(--aura-button-small-padding-vertical);
			--padding-horizontal: var(--aura-button-small-padding-horizontal);
			--padding-vertical: var(--aura-button-small-padding-vertical);
			--font-size: var(--aura-button-small);
		}

		&.fullWidth {
			width: 100%;
			& .content {
				justify-content: center;
			}

			&.left .content {
				justify-content: left;
			}
		}

		--icon-color: var(--text-color);

		flex-shrink: 0;

		padding: var(--padding-vertical) var(--padding-horizontal);
		font: var(--font-size);

		cursor: pointer;
		border-radius: var(--aura-button-border-radius);

		outline: var(--border);
		outline-offset: calc(var(--border-size) * -1px);
		border: 0;
		outline-color: var(--border-color);
		background-color: var(--bg);
		color: var(--text-color);

		.content {
			display: flex;
			gap: var(--gap);
			align-items: center;
		}

		&:hover {
			background-color: var(--bg-hover);
			outline-color: var(--border-hover-color);
		}

		&:active {
			background-color: var(--bg-active);
			outline-color: var(--border-active-color);
			.content {
				opacity: var(--text-hover-opacity);
			}
		}
	}
</style>
