<div class="layout">
	<slot />
</div>

<style lang="scss">
	:global(html),
	:global(body),
	:global(#storybook-root),
	:global(#storybook-docs),
	.layout {
		transition: background 0.25s;
		background: var(--aura-background);
		color: var(--aura-font-color);
		font: var(--aura-default-regular);
	}

	.layout {
		padding: 30px;
	}
</style>
