<script lang="ts">
	export let message = 'No results';
</script>

<div class="aura-zero-state">
	<div class="zero-state-graphic" />
	<div class="zero-state-message">{message}</div>
</div>

<style lang="scss">
	.aura-zero-state {
		width: 300px;
		height: 200px;
		.zero-state-graphic {
			width: 100%;
			height: 100%;
			background-image: url(/svgs/zero-state-light.svg);
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;
		}
		.zero-state-message {
			width: 100%;
			margin-top: -30px;
			text-align: center;
			color: var(--aura-light-secondary-50);
		}
	}

	:global([data-theme='dark'] .zero-state-graphic) {
		background-image: url(/svgs/zero-state-dark.svg) !important;
	}

	:global([data-theme='dark'] .zero-state-message) {
		color: var(--aura-dark-tertiary-70) !important;
	}
</style>
