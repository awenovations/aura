<script lang="ts">
	export let width: string = '200px';
	export let height: string = '200px';
</script>

<div class="aura-skeleton" style={`--width:${width}; --height: ${height};`} />

<style lang="scss">
	.aura-skeleton {
		width: var(--width);
		height: var(--height);
		border-radius: var(--aura-container-border-radius);

		background-color: var(--aura-tertiary-40);
		background-image: linear-gradient(90deg, rgba(#fff, 0), rgba(#fff, 0.5), rgba(#fff, 0));
		background-size: 40px 100%;
		background-repeat: no-repeat;
		background-position: left -40px top 0;
		animation: shine 1s ease infinite;
	}

	@keyframes shine {
		to {
			background-position: right -40px top 0;
		}
	}
</style>
