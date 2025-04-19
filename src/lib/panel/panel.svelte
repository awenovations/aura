<script lang="ts">
	import type * as Props from './props';
	import classNames from 'classnames';

	export let placement: Props.PanePlacement = 'right';
	export let width: string | undefined = '41%';
	export let height: string | undefined = '41%';
	export let open: boolean = false;
</script>

<div
	style:--width={['right', 'left'].includes(placement) ? width : '100%'}
	style:--height={['top', 'bottom'].includes(placement) ? height : '100%'}
	class:open
	class={classNames('panel', placement, $$restProps.class)}
>
	<div class="internal-wrapper">
		<slot />
	</div>
</div>

<style lang="scss">
	.panel {
		width: 0;
		height: 0;
		border-color: var(--aura-panel-border-color);
		background: var(--aura-panel-background);
		position: absolute;
		border-style: solid;
		overflow: hidden;
    transition: all 500ms;

		.internal-wrapper {
			white-space: nowrap;
			min-width: max-content;
			min-height: max-content;
			width: 100%;
			height: 100%;
		}

		&.right,
		&.left {
			top: 0;
			height: var(--height);

			&.open {
				width: var(--width);
			}
		}

		&.top,
		&.bottom {
			left: 0;
			width: var(--width);

			&.open {
				height: var(--height);
			}
		}

		&.open {
			&.right {
				border-left-width: var(--aura-panel-border-width);
				box-shadow: var(--aura-panel-box-shadow-right);
			}

			&.left {
				border-right-width: var(--aura-panel-border-width);
				box-shadow: var(--aura-panel-box-shadow-left);
			}

			&.top {
				border-bottom-width: var(--aura-panel-border-width);
				box-shadow: var(--aura-panel-box-shadow-top);
			}

			&.bottom {
				border-top-width: var(--aura-panel-border-width);
				box-shadow: var(--aura-panel-box-shadow-bottom);
			}
		}

		&.right {
			right: 0;
		}

		&.left {
			left: 0;
		}

		&.top {
			top: 0;
		}

		&.bottom {
			bottom: 0;
		}
	}
</style>
