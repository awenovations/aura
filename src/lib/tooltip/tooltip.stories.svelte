<script lang="ts" context="module">
	import '../../app.scss';

	import Tooltip from '$lib/tooltip/tooltip.svelte';

	export const meta = {
		title: 'AURA/Tooltip',
		component: Tooltip,
		tags: ['autodocs'],
		argTypes: {}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<div class="tooltip-story">
		<Tooltip content="Tooltip Content" forceOpen {...args}>
			Tooltip Wrapped Element Line 1<br />
			Tooltip Wrapped Element Line 2<br />
			Tooltip Wrapped Element Line 3
		</Tooltip>
	</div>
</Template>
<Story name="All tooltips">
	<div class="all-tooltips-story">
		<div class="column">
			<Tooltip content="Tooltip Content" forceOpen placement="left-start">Left start</Tooltip>
			<Tooltip content="Tooltip Content" forceOpen placement="left">Left</Tooltip>
			<Tooltip content="Tooltip Content" forceOpen placement="left-end">Left end</Tooltip>
			<Tooltip content="Tooltip Content" forceOpen placement="bottom-start">Bottom start</Tooltip>
			<Tooltip content="Tooltip Content" forceOpen placement="bottom">Bottom</Tooltip>
			<Tooltip content="Tooltip Content" forceOpen placement="bottom-end">Bottom end</Tooltip>
		</div>

		<div class="column right">
			<Tooltip content="Tooltip Content" forceOpen placement="top-start">Top start</Tooltip>
			<Tooltip content="Tooltip Content" forceOpen placement="top">Top</Tooltip>
			<Tooltip content="Tooltip Content" forceOpen placement="top-end">Top end</Tooltip>
			<Tooltip content="Tooltip Content" forceOpen placement="right-start">Right start</Tooltip>
			<Tooltip content="Tooltip Content" forceOpen placement="right">Right</Tooltip>
			<Tooltip content="Tooltip Content" forceOpen placement="right-end">Right end</Tooltip>
		</div>
	</div>
</Story>

<Story name="Default tooltip" args={{ forceOpen: false }} />

<Story name="Bottom start tooltip" args={{ placement: 'bottom-start' }} />
<Story name="Bottom tooltip" args={{ placement: 'bottom' }} />
<Story name="Bottom end tooltip" args={{ placement: 'bottom-end' }} />
<Story name="Top start tooltip" args={{ placement: 'top-start' }} />
<Story name="Top tooltip" args={{ placement: 'top' }} />
<Story name="Top end tooltip" args={{ placement: 'top-end' }} />
<Story name="Left start tooltip" args={{ placement: 'left-start' }} />
<Story name="Left tooltip" args={{ placement: 'left' }} />
<Story name="Left end tooltip" args={{ placement: 'left-end' }} />
<Story name="Right start tooltip" args={{ placement: 'right-start' }} />
<Story name="Right tooltip" args={{ placement: 'right' }} />
<Story name="Right end tooltip" args={{ placement: 'right-end' }} />

<style lang="scss">
	.tooltip-story {
		height: 10rem;
		justify-content: center;
		display: flex;
		align-items: center;
	}

	.all-tooltips-story {
		display: flex;
		gap: 6rem;
		justify-content: center;

		.column {
			margin: 4rem;
			display: flex;
			gap: 4rem;
			flex-direction: column;
			text-align: center;
		}
	}
</style>
