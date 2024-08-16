<script lang="ts">
  import { onMount } from 'svelte';
	import type * as Props from './props';

	export let severity: Props.AlertSeverity = 'informational';
	export let hide: boolean = false;
	export let autoDismissTime: number;


	let hideAlert = false;

	$: {
		if (hide) {
			setTimeout(() => {
				hideAlert = true;
			}, 300);
		} else {
			hideAlert = false;
		}
	}

  onMount(() => {
    if(autoDismissTime) {
      setTimeout(() => {
        hide = true;
      }, autoDismissTime);
    }
  });

</script>

<div
	{...$$restProps}
	class:isSuccess={severity === 'success'}
	class:isInformational={severity === 'informatioanl'}
	class:isWarning={severity === 'warning'}
	class:isError={severity === 'error'}
	style:--opacity={hide ? 0 : 1}
	class:hideAlert
	class={`aura-alert ${$$restProps.class ?? ''}`}
>
	<slot />
</div>

<style lang="scss">
	.aura-alert {
		&,
		&.isInformational {
			--drop-shadow: var(--aura-alert-drop-shadow);
			--bg: var(--aura-informational-30);
			--font-color: var(--aura-informational-60);
		}

		&.isSuccess {
			--drop-shadow: var(--aura-alert-drop-shadow);
			--bg: var(--aura-success-30);
			--font-color: var(--aura-success-60);
		}

		&.isError {
			--drop-shadow: var(--aura-alert-drop-shadow);
			--bg: var(--aura-error-30);
			--font-color: var(--aura-error-60);
		}

		&.isWarning {
			--drop-shadow: var(--aura-alert-drop-shadow);
			--bg: var(--aura-warning-30);
			--font-color: var(--aura-warning-60);
		}

		&.hideAlert {
			display: none;
		}

		transition: opacity 0.3s ease-out;
		opacity: var(--opacity);
		border: 1px solid var(--border-color);
		box-shadow: var(--drop-shadow);
		font: var(--aura-default-semibold);
		color: var(--font-color);
		background: var(--bg);
		padding: var(--aura-alert-padding-vertical) var(--aura-alert-padding-horizontal);
		border-radius: var(--aura-alert-border-radius);
	}
</style>
