<script lang="ts">
	import type { Placement } from '@floating-ui/dom';
	import { computePosition, autoUpdate } from '@floating-ui/dom';

	export let target: HTMLElement;

	export let placement: Placement = 'bottom';

	let float: HTMLElement;

	let cleanup: () => void;

	$: {
		cleanup?.();

		if (target && float) {
			cleanup = autoUpdate(target, float, () => {
				if (!target || !float) return;

				computePosition(target, float, {
					placement: placement
				}).then(({ x, y }) => {
					if (float) {
						Object.assign(float.style, {
							left: `${x}px`,
							top: `${y}px`
						});
					}
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
