<script lang="ts">
</script>

<div class="aura-error-state">
	<div class="error-state-graphic" />
	<div class="error-state-message"><slot /></div>
</div>

<style lang="scss">
	.aura-error-state {
		width: 300px;
		height: 200px;
		.error-state-graphic {
			width: 100%;
			height: 100%;
			background-image: url(/svgs/error-state-light.svg);
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;
		}
		.error-state-message {
			width: 100%;
			margin-top: -30px;
			text-align: center;
			color: var(--aura-light-secondary-50);
		}
	}

	:global([data-theme='dark'] .error-state-graphic) {
		background-image: url(/svgs/error-state-dark.svg) !important;
	}

	:global([data-theme='dark'] .error-state-message) {
		color: var(--aura-dark-tertiary-70) !important;
	}
</style>
