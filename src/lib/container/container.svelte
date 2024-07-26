<script lang="ts">
	import type * as Props from './props';
  import classNames from 'classnames';

	export let kind: Props.ContainerKind = 'filled';
	export let variant: Props.ContainerVariants = 'flat';
</script>

<div
	{...$$restProps}
	class:isFilled={kind === 'filled'}
	class:isOutlined={kind === 'outlined'}
	class:isFlat={variant === 'flat'}
	class:isElevated={variant === 'elevated'}
	class={classNames('aura-container', $$restProps.class)}
>
	<slot />
</div>

<style lang="scss">
	.aura-container {
		&.isFilled {
			--bg: var(--aura-container-background);
		}

		&.isOutlined {
			--bg: var(--aura-background);
		}

		&.isFlat {
			--box-shadow: none;
		}

		&.isElevated {
			--box-shadow: var(--aura-container-drop-shadow);
		}

    width: fit-content;
    height: fit-content;
		text-align: center;
		border: 1px solid var(--aura-container-border-color);
		border-radius: var(--aura-container-border-radius);
		background-color: var(--bg);
		box-shadow: var(--box-shadow);
		padding: var(--aura-container-padding);
	}
</style>
