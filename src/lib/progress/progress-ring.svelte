<script lang="ts">
	import type * as Props from './props';

	export let variant: Props.ProgressVariant | undefined;
</script>

<div
	class="aura-progress-ring"
	class:isPrimary={variant === 'primary'}
	class:isSecondary={variant === 'secondary'}
	class:isTertiary={variant === 'tertiary'}
>
	<svg viewBox="0 0 48 48">
		<circle class="aura-progress-ring__arc" />
		<circle class="aura-progress-ring__circle" />
	</svg>
</div>

<style lang="scss">
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.aura-progress-ring {
		--diameter: var(--aura-progress-ring-diameter);
		--stroke: var(--aura-progress-ring-stroke);
		--circle-radius: 24px;
		--radius-plus-border: calc(var(--circle-radius) - var(--stroke));
		--circumference: calc(var(--radius-plus-border) * 2 * 3.141592);
		--arc-size: calc(1 - var(--aura-progress-ring-arc-size));

		--spin-rate: var(--aura-progress-ring-spin-rate);
		--transition-time: var(--aura-progress-ring-transition-time);

		&.isPrimary {
			--arc-border-color: var(--aura-primary-20);
			--circle-border-color: var(--aura-primary-50);
		}

		&.isSecondary {
			--arc-border-color: var(--aura-secondary-20);
			--circle-border-color: var(--aura-secondary-50);
		}

		&,
		&.isTertiary {
			--arc-border-color: var(--aura-tertiary-20);
			--circle-border-color: var(--aura-tertiary-50);
		}

		position: relative;

		width: var(--diameter);
		height: var(--diameter);

		svg {
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			animation-duration: var(--spin-rate);
			animation-name: spin;
			animation-iteration-count: infinite;
			animation-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
		}

		circle {
			transform: rotate(270deg);
			transform-origin: 50% 50%;
			transition: stroke-dashoffset var(--transition-time);
			stroke-linecap: round;
			r: var(--radius-plus-border);
			cx: var(--circle-radius);
			cy: var(--circle-radius);
			stroke-width: var(--stroke);
			fill: transparent;
		}

		&__arc {
			stroke: var(--arc-border-color);
		}

		&__circle {
			stroke-dasharray: var(--circumference) var(--circumference);
			stroke-dashoffset: calc(var(--circumference) * var(--arc-size));
			stroke: var(--circle-border-color);
		}
	}
</style>
