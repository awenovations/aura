<script lang="ts">
	import type { MiddlewareData, Placement } from '@floating-ui/dom';
	import {
		computePosition,
		autoUpdate,
		offset as offsetMiddleware,
		arrow as floatingArrow
	} from '@floating-ui/dom';

	export let target: HTMLElement;

	export let placement: Placement = 'bottom';

	export let offset: number = 0;

	export let middleware: Array<MiddlewareData> = [];

	export let onComputedPosition: (computed: {
		x: number;
		y: number;
		middlewareData: MiddlewareData;
		placement: Placement;
	}) => void = undefined;

	let float: HTMLElement;

	let cleanup: () => void;

	$: {
		cleanup?.();

		if (target && float) {
			cleanup = autoUpdate(target, float, () => {
				if (!target || !float) return;

				computePosition(target, float, {
					placement: placement,
					middleware: [offsetMiddleware(offset), ...middleware]
				}).then(({ x, y, middlewareData, placemen }) => {
					if (float) {
						Object.assign(float.style, {
							left: `${x}px`,
							top: `${y}px`
						});
					}

					onComputedPosition?.({
						x,
						y,
						middlewareData,
						placement
					});
				});
			});
		}
	}
</script>

<div bind:this={float} class="aura-float">
	<slot />
</div>

<style lang="scss">
	.aura-float {
		z-index: 9999;
		width: max-content;
		position: absolute;
	}
</style>
