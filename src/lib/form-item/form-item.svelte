<script lang="ts">
	export let showFocusOutline: boolean = false;
	export let disabled = false;
	export let width : string | undefined = undefined;
	export let height : string | undefined = undefined;
	export let error = false;
</script>

<div
	class="aura-form-item"
	class:isFocused={showFocusOutline}
	class:disabled
	class:error
	style="{width ? `width: ${width};` : ''} {height ? `height: ${height};` : ''}"
>
	<slot />
</div>

<style lang="scss">
	.aura-form-item {
		min-height: 35px;
		background-color: var(--aura-form-item-background-color);
		border: 1px solid var(--aura-form-item-border-color);
		border-radius: var(--aura-form-item-border-radius);
		cursor: pointer;
		color: var(--aura-light-font-color);

		padding: var(--aura-form-item-vertical-padding) var(--aura-form-item-horizontal-padding);
		box-sizing: border-box;

		font: var(--aura-default-regular);

		&:not(.disabled):hover {
			border-color: var(--aura-form-item-hover-border-color);
			box-shadow: var(--aura-form-item-effect-drop-shadow);
		}

		&:not(.disabled):active,
		&:not(.disabled).isFocused {
			border-color: var(--aura-form-item-active-border-color);
		}

		&.disabled {
			border-color: var(--aura-light-tertiary-10);
			color: rgba(0, 0, 0, 0.25);
		}
		&.error {
			border-color: var(--aura-form-item-error-border-color);
		}
	}
</style>
