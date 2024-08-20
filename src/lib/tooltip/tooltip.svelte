<script lang="ts">
	import classNames from 'classnames';
	import Float from '$lib/float/float.svelte';
	import type { Placement } from '@floating-ui/dom';
	import { arrow as floatingArrow } from '@floating-ui/dom';

	export let content: string | HTMLElement;

	export let placement: Placement = 'bottom';

	export let offset: number = 10;

  export let forceOpen: boolean = false;

	let arrowPlacement: string | undefined = undefined;
	let arrowSpacing: string | undefined = undefined;

	$: show = false;

	let target: HTMLElement;
	let arrow: HTMLElement;

	const toogleTooltip = () => {
		show = !show;
	};

	const positionArrow = (event: { middlewareData: MiddlewareData; placement: Placement }) => {
		if (!event.middlewareData.arrow) return;

		const { x: arrowX, y: arrowY } = event.middlewareData.arrow as {
			x?: number;
			y?: number;
		};

		arrowPlacement = event.placement.split('-')[0];
		arrowSpacing = event.placement.split('-')?.[1];

		if (!arrow) return;

		if (!arrowSpacing && arrowPlacement === 'bottom' && arrowX !== null) {
			Object.assign(arrow.style, {
				left: `${arrowX}px`,
				top: '-0.286rem',
				right: '',
				bottom: ''
			});
		}

		if (arrowSpacing === 'end' && arrowPlacement === 'bottom' && arrowX !== null) {
			Object.assign(arrow.style, {
				left: '',
				top: '-0.286rem',
				right: '0.714rem',
				bottom: ''
			});
		}

		if (arrowSpacing === 'start' && arrowPlacement === 'bottom' && arrowX !== null) {
			Object.assign(arrow.style, {
				left: '0.714rem',
				top: '-0.286rem',
				right: '',
				bottom: ''
			});
		}

		if (!arrowSpacing && arrowPlacement === 'top' && arrowX !== null) {
			Object.assign(arrow.style, {
				left: `${arrowX}px`,
				top: '',
				right: '',
				bottom: '-0.286rem'
			});
		}

		if (arrowSpacing === 'end' && arrowPlacement === 'top' && arrowX !== null) {
			Object.assign(arrow.style, {
				left: '',
				top: '',
				right: '0.714rem',
				bottom: '-0.286rem'
			});
		}

		if (arrowSpacing === 'start' && arrowPlacement === 'top' && arrowX !== null) {
			Object.assign(arrow.style, {
				left: '0.714rem',
				top: '',
				right: '',
				bottom: '-0.286rem'
			});
		}

		if (!arrowSpacing && arrowPlacement === 'left' && arrowY !== null) {
			Object.assign(arrow.style, {
				left: '',
				top: `${arrowY}px`,
				right: '-0.286rem',
				bottom: ''
			});
		}

		if (arrowSpacing === 'end' && arrowPlacement === 'left' && arrowY !== null) {
			Object.assign(arrow.style, {
				left: '',
				top: '',
				right: '-0.357rem',
				bottom: '0.714rem',
			});
		}

		if (arrowSpacing === 'start' && arrowPlacement === 'left' && arrowY !== null) {
			Object.assign(arrow.style, {
				left: '',
				top: '0.714rem',
				right: '-0.357rem',
				bottom: '',
			});
		}

		if (!arrowSpacing && arrowPlacement === 'right' && arrowY !== null) {
			Object.assign(arrow.style, {
				left: '-0.286rem',
				top: `${arrowY}px`,
				right: '',
				bottom: ''
			});
		}

		if (arrowSpacing === 'end' && arrowPlacement === 'right' && arrowY !== null) {
			Object.assign(arrow.style, {
				left: '-0.357rem',
				top: '',
				right: '',
				bottom: '0.714rem',
			});
		}

		if (arrowSpacing === 'start' && arrowPlacement === 'right' && arrowY !== null) {
			Object.assign(arrow.style, {
				left: '-0.357rem',
				top: '0.714rem',
				right: '',
				bottom: '',
			});
		}
	};
</script>

{#key show}
	<Float
		{target}
		{offset}
		{placement}
		onComputedPosition={positionArrow}
		middleware={[floatingArrow({ element: arrow })]}
	>
		<div hidden={!forceOpen && !show} class={classNames('aura-tooltip', arrowPlacement, arrowSpacing)}>
			{content}

			<div bind:this={arrow} class={classNames('arrow', arrowPlacement)} />
		</div>
	</Float>
{/key}

<span on:mouseleave={toogleTooltip} on:mouseenter={toogleTooltip} bind:this={target}><slot /></span>

<style lang="scss">
	.aura-tooltip {
		padding: 0.714rem;
		border-radius: var(--aura-tooltip-border-radius);
		border: 1px solid var(--aura-tooltip-border);
		background: var(--aura-tooltip-background);
		box-shadow: var(--aura-tooltip-drop-shadow);
		pointer-events: none;
		user-select: none;
		color: var(--aura-tooltip-font-color);

		&.left,
		&.right {
			&.start {
				transform: translateY(-0.5rem);
			}

			&.end {
				transform: translateY(0.5rem);
			}
		}
	}

	.arrow {
		position: absolute;
		background: var(--aura-tooltip-background);
		border: 1px solid var(--aura-tooltip-border);
		width: 0.571rem;
		height: 0.571rem;
		z-index: 10;
		transform: rotate(45deg);

		&.left,
		&.bottom {
			border-bottom: 0;
		}

		&.right,
		&.bottom {
			border-right: 0;
		}

		&.right,
		&.top {
			border-top: 0;
		}

		&.left,
		&.top {
			border-left: 0;
		}
	}
</style>
