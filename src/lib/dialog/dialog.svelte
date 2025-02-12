<script lang="ts">
	import classNames from 'classnames';

	import Button from '$lib/button/button.svelte';
	import Container from '$lib/container/container.svelte';

	export let cancelText = 'Cancel';
	export let confirmText = 'Confirm';

	export let onConfirm: () => void = () => {};
	export let onCancel: () => void = () => {};
</script>

<Container {...$$restProps} clearPadding variant="elevated" class={classNames('dialog', $$restProps.class)}>
	<slot>Are you sure you wish to take this action?</slot>
	<div class="action-buttons">
		<Button size="small" on:click={onCancel}>{cancelText}</Button>
		<Button size="small" on:click={onConfirm} variant="secondary">{confirmText}</Button>
	</div>
</Container>

<style lang="scss">
	:global(.dialog) {
		font: var(--aura-default);
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 20px;
	}

	.action-buttons {
		display: flex;
		justify-content: flex-end;
		gap: 8px;
		transform: translate(12px, 12px);
	}
</style>
