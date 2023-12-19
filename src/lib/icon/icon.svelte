<script lang="ts">
	import type * as Props from './props';

	export let forceColor: boolean = false;
	export let size: Props.IconSize = 'medium';
	export let name: string = undefined;
	$: hasColor = name?.includes('-color') || forceColor;
</script>

<div
	class="aura-icon"
	class:isLarge={size === 'large'}
	class:isMedium={size === 'medium'}
	class:isSmall={size === 'small'}
>
	<slot>
		{#if name}
			<div
				class="icon"
				class:color={hasColor}
				style:--icon-url={`url('/icons/${name}-${size}.svg')`}
			/>
		{/if}
	</slot>
</div>

<style lang="scss">
	.aura-icon {
		& .icon,
		:global(svg) {
			width: 100%;
			height: 100%;
		}

		&.isLarge {
			--icon-width: var(--aura-icon-large-size);
			--icon-height: var(--aura-icon-large-size);
		}

		&.isMedium {
			--icon-width: var(--aura-icon-medium-size);
			--icon-height: var(--aura-icon-medium-size);
		}

		&.isSmall {
			--icon-width: var(--aura-icon-small-size);
			--icon-height: var(--aura-icon-small-size);
		}

		&,
		& .icon {
			width: var(--icon-width);
			height: var(--icon-height);
		}

		& .icon {
			--icon-bg-color: var(--icon-color, var(--aura-secondary-30, currentColor));
		}

		/* Non color icons are set via a mask-image, so we can change the color
		 * by setting the background */
		& .icon:not(.color) {
			background: var(--icon-bg-color);
			-webkit-mask-image: var(--icon-url);
			mask-image: var(--icon-url);
			-webkit-mask-repeat: no-repeat;
			mask-repeat: no-repeat;
			-webkit-mask-position: center;
			mask-position: center;
		}

		/* Color icons need to be set via a background rather than a mask so we
		 * don't remove the color */
		& .icon.color {
			background: var(--icon-url);
			background-repeat: no-repeat;
			background-position: center;
		}
	}
</style>
