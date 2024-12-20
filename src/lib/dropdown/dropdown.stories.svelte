<script lang="ts" context="module">
	import '../../app.scss';

	import Dropdown from '$lib/dropdown/dropdown.svelte';
	import Button from '$lib/button/button.svelte';

	export const meta = {
		title: 'AURA/Dropdown',
		component: Dropdown,
		tags: ['autodocs'],
		argTypes: {}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	let valueForControlsStory = 'Option 1';
</script>

<Template let:args>
	<div style="height: 160px; max-width: 400px; margin: 0 auto;">
		<Dropdown {...args}>
			<aura-option value="Option 1">Option 1</aura-option>
			<aura-option value="Option 2">Option 2</aura-option>
			<aura-option>Option 3</aura-option>
		</Dropdown>
	</div>
</Template>

<Story height="500px" name="Default dropdown" />

<Story name="Custom Placeholder">
	<div style="height: 160px; max-width: 400px; margin: 0 auto;">
		<Dropdown>
			<span slot="placeholder">Custom placeholder...</span>
			<aura-option value="Option 1">Option 1</aura-option>
			<aura-option value="Option 2">Option 2</aura-option>
			<aura-option>Option 3</aura-option>
		</Dropdown>
	</div>
</Story>

<Story name="External Value Controls">
	<div style="height: 160px; max-width: 400px; margin: 0 auto;">
		<div style="display: flex; gap: 10px;">
			<Dropdown
				style="flex: 1"
				on:change={(evt) => {
					valueForControlsStory = evt.detail.value;
				}}
				currentValue={valueForControlsStory}
			>
				<aura-option value="Option 1">Option 1</aura-option>
				<aura-option value="Option 2">Option 2</aura-option>
				<aura-option>Option 3</aura-option>
			</Dropdown>
			<Button size="small" on:click={() => (valueForControlsStory = undefined)}>Clear</Button>
		</div>
	</div>
</Story>

<Story name="Error'd Input">
	<div style="height: 160px; max-width: 400px; margin: 0 auto;">
		<Dropdown showErrors>
			<span slot="placeholder">Error'd Input...</span>
			<aura-option value="Option 1">Option 1</aura-option>
			<aura-option value="Option 2">Option 2</aura-option>
			<aura-option>Option 3</aura-option>
			<span slot="errors">Something went wrong here!</span>
		</Dropdown>
	</div>
</Story>

<Story name="Label">
	<Dropdown placeholder="Placeholder...">
		<span slot="label">Label</span>
		<aura-option value="Option 1">Option 1</aura-option>
		<aura-option value="Option 2">Option 2</aura-option>
		<aura-option>Option 3</aura-option>
	</Dropdown>
</Story>
