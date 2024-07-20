<script lang="ts" context="module">
	import '../../app.scss';
	import Divider from '$lib/divider/divider.svelte';
	import { dividerDirection } from '$lib/divider/props.ts';

	export const meta = {
		title: 'AURA/Divider',
		component: Divider,
		tags: ['autodocs'],
		argTypes: {
			direction: { control: 'select', options: dividerDirection },
		}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <div style='height: 7rem; display: flex;'>
    <Divider {...args} />
  </div>
</Template>

<Story name="Default Divider / Horizontal Divider" />

<Story
	name="Vertical Divider"
	args={{
		direction: 'vertical'
	}}
/>

<Story name="Horizontal Text Divider">
  <div style='height: 7rem; display: flex;'>
    <Divider>Divider With Text</Divider>
  </div>
</Story>

<Story name="Vertical Text Divider">
  <div style='height: 7rem; display: flex;'>
    <Divider direction="vertical">Divider With Text</Divider>
  </div>
</Story>
