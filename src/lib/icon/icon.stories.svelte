<script lang="ts" context="module">
	import '../../app.scss';

	import Icon from '$lib/icon/icon.svelte';
	import { iconSizes } from '$lib/icon/props.ts';

	export const meta = {
		title: 'AURA/Icon',
		component: Icon,
		tags: ['autodocs'],
		argTypes: {
			name: { control: 'text' },
			size: { control: 'select', options: iconSizes }
		}
	};
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Story
	name="Small Icon"
	args={{
		name: 'arrow-circle-left',
		size: 'small'
	}}
/>

<Template let:args>
	<Icon {...args} />
</Template>

<Story
	name="Medium Icon"
	args={{
		name: 'arrow-circle-left',
		size: 'medium'
	}}
/>

<Story
	name="Large Icon"
	args={{
		name: 'arrow-circle-left',
		size: 'large'
	}}
/>

<Story
	name="Small Icon Color"
	args={{
		name: 'microsoft-color',
		size: 'small'
	}}
/>

<Story
	name="Medium Icon Color"
	args={{
		name: 'microsoft-color',
		size: 'medium'
	}}
/>

<Story
	name="Large Icon Color"
	args={{
		name: 'microsoft-color',
		size: 'large'
	}}
/>
