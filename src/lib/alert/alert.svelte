<script lang="ts">
	import type * as Props from './props';

	export let severity: Props.AlertSeverity = 'informational';
	export let hide: boolean = false;

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
			--border-color: var(--aura-informational-30);
			--drop-shadow: var(--aura-alert-drop-shadow);
			--bg: var(--aura-informational-20);
			--font-color: var(--aura-informational-50);
		}

		&.isSuccess {
			--border-color: var(--aura-success-30);
			--drop-shadow: var(--aura-alert-drop-shadow);
			--bg: var(--aura-success-20);
			--font-color: var(--aura-success-50);
		}

		&.isError {
			--border-color: var(--aura-error-30);
			--drop-shadow: var(--aura-alert-drop-shadow);
			--bg: var(--aura-error-10);
			--font-color: var(--aura-error-50);
		}

		&.isWarning {
			--border-color: var(--aura-warning-30);
			--drop-shadow: var(--aura-alert-drop-shadow);
			--bg: var(--aura-warning-10);
			--font-color: var(--aura-warning-50);
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
